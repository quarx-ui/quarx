import { FC, forwardRef, memo, useCallback, useMemo, useRef, useState } from 'react';
import { TransitionProps as ReactTransitionProps } from 'react-transition-group/Transition';
import { usePropsOverwrites, useTheme } from '@core/styles';
import {
    Backdrop,
    Portal,
    Transition,
    OVER_SCREEN_PLACEMENT,
    DelayedMounter,
    OVER_SCREEN_APPEARANCE,
    TransitionProps as TransitionPropsType,
    OVER_SCREEN_CLOSE_REASON,
    BackdropProps as BackdropPropsType,
    OVER_SCREEN_ORIGIN,
    OVER_SCREEN_DATATYPE,
    OVER_SCREEN_ROLE,
} from '@core/src';
import { If } from '@core/src/system/If';
import { mergeRefs, omitProps, ownerDocument, useEnhancedEffect } from '@core/utils';
import { convertMargins } from '@core/src/system/OverScreen/helpers/getMapStyles/convertOffsets';
import {
    getMapStyles,
    getScrollbarSize,
    getNextOverScreen,
    disableNextBackdrop,
    DefaultStyles,
    restoreStyles, getOverScreens,
} from './helpers';
import { OverScreenProps } from './types';
import { useStyles } from './styles';

export const OverScreen: FC<OverScreenProps> = memo(forwardRef<HTMLDivElement, OverScreenProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps, name } = usePropsOverwrites('OverScreen', initialProps);

    const {
        open = false,

        timeout,
        easing,

        margin = 0,
        offset,

        placement = OVER_SCREEN_PLACEMENT.center,
        appearance = OVER_SCREEN_APPEARANCE.fade,
        origin = OVER_SCREEN_ORIGIN.right,

        disableBackdrop = false,
        disableScrollLock = false,
        disableCloseByClickAway = false,
        disableCloseByEscape = false,
        disablePortal = false,

        onClick,
        onClose,
        onKeyDown,
        keepMounted = false,

        children,
        DelayedMounterProps,
        TransitionProps,
        PortalProps,
        BackdropProps,

        ...restProps
    } = props;

    const [mounted, setMounted] = useState(open);
    const convertedMargin = convertMargins(margin);
    const params = {
        placement,
        margin: `${convertedMargin.y1} ${convertedMargin.x1} ${convertedMargin.y2} ${convertedMargin.x2}`,
        mounted,
    };
    const styles = useStyles({ params, ...styleProps });

    // --------------------------- Инициализация значений --------------------------------

    const isDisabledTransition = appearance === OVER_SCREEN_APPEARANCE.none;
    const uniqAttr = `Qx${name}`;
    const childUniqAttr = `${uniqAttr}-child`;

    const defaultBodyStyles = useRef<DefaultStyles>({});
    const defaultOverScreenStyles = useRef<DefaultStyles>({});
    const defaultChildStyles = useRef<DefaultStyles>({});
    const nextBackdropStyles = useRef<DefaultStyles>({});

    const overScreenRef = useRef<HTMLElement | null>(null);
    const childRef = useRef<HTMLElement | null>(null);

    const hasNextDialog = useRef(false);
    const nextBackdrop = useRef<HTMLElement | null>(null);

    const scrollbarSize = useRef<number | null>();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [mapStatusToStyles, setMapStatusToStyles] = useState<TransitionPropsType['mapStatusToStyles']>({});
    const [transitionStyles, setTransitionStyles] = useState<TransitionPropsType['styles']>({});

    // --------------------------- Инициализация функций --------------------------------

    const updateTransform = useCallback((node: HTMLElement | null) => {
        const mapStyles = getMapStyles(node, origin, appearance, offset);

        setMapStatusToStyles(mapStyles.mapStatusToStyles);
        setTransitionStyles(mapStyles.transitionStyles);
    }, [appearance, offset, origin]);

    const handleMount = useCallback((node: HTMLElement) => {
        updateTransform(node);
        childRef.current = node;

        if (!overScreenRef.current) {
            // Если еще нет ссылки на элемент - привязываем ее к контейнеру
            overScreenRef.current = node?.parentElement;
        }

        if (!overScreenRef.current) { return; }

        const innerCurrentIndex = getOverScreens(overScreenRef.current, uniqAttr).length - 1;
        setCurrentIndex(innerCurrentIndex);

        hasNextDialog.current = innerCurrentIndex > 0;
        const container = ownerDocument(overScreenRef.current);
        scrollbarSize.current = getScrollbarSize(container);

        // Возвращаем изначальные стили измененные при предыдущем закрытии
        if (childRef.current) {
            restoreStyles(childRef.current, defaultChildStyles.current);
        }

        const { paddingRight } = container.body.style;

        defaultBodyStyles.current = {
            'padding-right': paddingRight,
            overflow: container.body.style.overflow,
        };

        if (!hasNextDialog.current) {
            if (disableScrollLock) { return; }

            // Если отсутствует открытый OverScreen добавляем отступ равный ширине скроллбара
            if (scrollbarSize.current) {
                container.body.style.paddingRight = `${scrollbarSize.current}px`;
            }
            // и отключаем скролл
            container.body.style.overflow = 'hidden';
        } else {
            // Отключаем бэкдропы соседних OverScreen и получаем HTML-элемент с изначальным стилями
            const backdrop = disableNextBackdrop(overScreenRef.current, innerCurrentIndex, uniqAttr);

            if (backdrop) {
                nextBackdrop.current = backdrop.element;
                nextBackdropStyles.current = backdrop.defaultStyles;
            }

            if (disableScrollLock) { return; }

            const overScreenPaddingRight = getComputedStyle(overScreenRef.current).paddingRight;
            defaultOverScreenStyles.current = {
                'padding-right': overScreenPaddingRight,
                width: overScreenRef.current.style.width,
            };

            // Сдвигаем OverScreen, чтоб поместить его ровно над предыдущим
            overScreenRef.current.style.paddingRight = `calc(${overScreenPaddingRight} + ${paddingRight})`;
            // и добавляем ширину, чтоб растянуть до правого края
            overScreenRef.current.style.width = `${overScreenRef.current.clientWidth + parseInt(paddingRight, 10)}px`;
        }
    }, [disableScrollLock, uniqAttr, updateTransform, overScreenRef]);

    const handleUnmount = useCallback(() => {
        if (nextBackdrop.current) {
            // Возвращаем стили для бэкдропа предыдущего OverScreen
            restoreStyles(nextBackdrop.current, nextBackdropStyles.current);
        }

        if (!overScreenRef.current || disableScrollLock) {
            return;
        }

        if (scrollbarSize.current && childRef.current) {
            // При закрытии появляется скроллбар и смещает компонент
            // Во избежание этого задаем отрицательный отступ равный ширине скроллбара
            defaultChildStyles.current = {
                'margin-right': childRef.current.style.marginRight,
            };

            childRef.current.style.marginRight = `-${scrollbarSize.current}px`;
        }

        if (!hasNextDialog.current) {
            // Если отсутствуют открытые OverScreen - возвращаем body его изначальные стили
            const { body } = ownerDocument(overScreenRef.current);
            restoreStyles(body, defaultBodyStyles.current);
        } else {
            // Иначе возвращаем для него стили
            restoreStyles(overScreenRef.current, defaultOverScreenStyles.current);
        }
    }, [disableScrollLock]);

    const onEnter: ReactTransitionProps['onEnter'] = useCallback((node, isAppearing) => {
        handleMount(node);

        TransitionProps?.onEnter?.(node, isAppearing);
    }, [TransitionProps, handleMount]);

    const onEntering: ReactTransitionProps['onEntering'] = useCallback((node, isAppearing) => {
        node?.parentElement?.focus();

        TransitionProps?.onEntering?.(node, isAppearing);
    }, [TransitionProps]);

    const onEntered: ReactTransitionProps['onEntered'] = useCallback((node, isAppearing) => {
        // При отключении анимации и keepMounted = true - запустится только эта функция
        // Поэтому дублируем логику пропущенных функций
        if (isDisabledTransition && keepMounted) {
            node?.parentElement?.focus();
            handleMount(node);
        }

        TransitionProps?.onEntered?.(node, isAppearing);
    }, [TransitionProps, handleMount, isDisabledTransition, keepMounted]);

    const onExited: ReactTransitionProps['onExited'] = useCallback((node) => {
        setMounted(false);

        // Если есть открытый OverScreen - перемещаем фокус на него
        if (hasNextDialog.current && (node?.parentElement || overScreenRef.current)) {
            const nextModal = getNextOverScreen(node?.parentElement ?? overScreenRef.current, currentIndex, uniqAttr);
            nextModal?.focus();
        }

        TransitionProps?.onExited?.(node);
    }, [TransitionProps, currentIndex, uniqAttr]);

    const handleClick: OverScreenProps['onClick'] = useCallback((event) => {
        onClick?.(event);

        if (event.target !== event.currentTarget) {
            return;
        }

        if (!disableCloseByClickAway) {
            onClose?.(event, OVER_SCREEN_CLOSE_REASON.clickAway);
        }
    }, [disableCloseByClickAway, onClick, onClose]);

    const handleBackdropClick: BackdropPropsType['onClick'] = useCallback((event) => {
        if (event.target !== event.currentTarget) {
            return;
        }

        BackdropProps?.onClick?.(event);

        if (!disableCloseByClickAway) {
            onClose?.(event, OVER_SCREEN_CLOSE_REASON.clickAway);
        }
    }, [BackdropProps, disableCloseByClickAway, onClose]);

    const handleKeyDown: OverScreenProps['onKeyDown'] = useCallback((event) => {
        onKeyDown?.(event);

        if (event.key !== 'Escape') {
            return;
        }

        if (!disableCloseByEscape) {
            event.preventDefault();
            event.stopPropagation();
            onClose?.(event, OVER_SCREEN_CLOSE_REASON.escape);
        }
    }, [disableCloseByEscape, onClose, onKeyDown]);

    // --------------------------- Эффекты --------------------------------

    useEnhancedEffect(() => {
        updateTransform(childRef.current);
    }, [origin, appearance, offset, childRef, updateTransform]);

    useEnhancedEffect(() => {
        if (open) {
            setMounted(true);
            return handleUnmount;
        }

        return undefined;
    }, [handleUnmount, open]);

    // --------------------------- Сортировка пропсов --------------------------------

    const theme = useTheme();

    const commonTransitionProps = useMemo(() => ({
        easing: easing ?? {
            enter: theme.transitions.easing.easeOut,
            exit: theme.transitions.easing.easeOutIn,
        },
        timeout,
    }), [easing, theme.transitions.easing.easeOut, theme.transitions.easing.easeOutIn, timeout]);

    const transitionProps = useMemo(() => ({
        enter: !isDisabledTransition,
        exit: !isDisabledTransition,
        unmountOnExit: !keepMounted,
        mountOnEnter: !keepMounted,
        timeoutProperty: appearance === OVER_SCREEN_APPEARANCE.slide
            ? 'transform'
            : undefined,
        ...commonTransitionProps,
        ...TransitionProps,
        in: open,
        mapStatusToStyles,
        childrenProps: {
            ...TransitionProps?.childrenProps,
            'data-component': childUniqAttr,
        },
        styles: {
            ...TransitionProps?.styles,
            ...transitionStyles,
        },
        onEnter,
        onEntering,
        onEntered,
        onExited,
    }), [TransitionProps, appearance, childUniqAttr, commonTransitionProps, isDisabledTransition, keepMounted, mapStatusToStyles, onEnter, onEntered, onEntering, onExited, open, transitionStyles]);

    const backdropProps = useMemo(() => ({
        ...BackdropProps,
        onClick: handleBackdropClick,
        disableTransition: isDisabledTransition,
        mounted: open,
        TransitionProps: {
            ...commonTransitionProps,
            ...BackdropProps?.TransitionProps,
        },
    }), [BackdropProps, commonTransitionProps, handleBackdropClick, isDisabledTransition, open]);

    const delayedMounterProps = useMemo(() => ({
        ...DelayedMounterProps,
        disableTimeout: true,
        mounted: keepMounted
            ? true
            : mounted,
    }), [DelayedMounterProps, keepMounted, mounted]);

    const portalProps = useMemo(() => ({
        ...PortalProps,
        disablePortal,
    }), [PortalProps, disablePortal]);

    const rootProps = useMemo(() => ({
        tabIndex: currentIndex,
        datatype: OVER_SCREEN_DATATYPE,
        role: OVER_SCREEN_ROLE,
        ...restProps,
        'data-index': currentIndex,
        'data-component': uniqAttr,
        'aria-hidden': !open,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
    }), [currentIndex, handleClick, handleKeyDown, open, restProps, uniqAttr]);

    // --------------------------- Макет --------------------------------

    return (
        <Portal {...portalProps}>
            <DelayedMounter {...delayedMounterProps}>
                <div
                    {...rootProps}
                    ref={mergeRefs(ref, overScreenRef)}
                    className={cn('root', omitProps(params, ['margin']))}
                    css={styles.root}
                >
                    <If condition={!disableBackdrop}>
                        <Backdrop {...backdropProps} />
                    </If>
                    <Transition {...transitionProps}>
                        {children}
                    </Transition>
                </div>
            </DelayedMounter>
        </Portal>
    );
}));
