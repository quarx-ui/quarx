import { useCallback, useRef, useState } from 'react';
import { TransitionProps as ReactTransitionProps } from 'react-transition-group/Transition';
import { BackdropProps as BackdropPropsType, OverScreenProps } from '@core/src';
import { ownerDocument, useEnhancedEffect } from '@core/utils';
import { OVER_SCREEN_APPEARANCE, OVER_SCREEN_CLOSE_REASON, OVER_SCREEN_ORIGIN } from '@core/src/system/OverScreen/constants';
import { useMapStyles } from './useMapStyles';
import { ExtendedOverScreenProps, UseOverScreenPropsReturn } from './types';
import {
    DefaultStyles,
    getDialogs,
    getNextDialog,
    getScrollbarSize,
    restoreStyles,
    disableNextBackdrop,
} from './helpers';

export const useOverScreenProps = <Props extends ExtendedOverScreenProps>(props: Props): UseOverScreenPropsReturn<Props> => {
    const {
        offset,
        open,
        disableCloseByEscape = false,
        disableCloseByClickAway = false,
        onClick,
        onClose,
        TransitionProps,
        BackdropProps,
        onKeyDown,
        disableScrollLock,
        origin = OVER_SCREEN_ORIGIN.right,
        appearance = OVER_SCREEN_APPEARANCE.fade,
        keepMounted = false,
        disablePortal = false,
        uniqAttr,
        ContentTransitionProps,
        PortalProps,
    } = props;

    const disabledTransition = appearance === OVER_SCREEN_APPEARANCE.none;
    const childUniqAttr = `${uniqAttr}-child`;

    const [currentIndex, setCurrentIndex] = useState(0);

    const defaultBodyStyles = useRef<DefaultStyles>({});
    const defaultDrawerStyles = useRef<DefaultStyles>({});
    const defaultChildStyles = useRef<DefaultStyles>({});

    const drawerRef = useRef<HTMLElement | null>(null);
    const childRef = useRef<HTMLElement | null>(null);

    const scrollbarSize = useRef<number | null>();
    const hasNextDialog = useRef(false);

    const nextBackdropStyles = useRef<DefaultStyles>({});
    const nextBackdrop = useRef<HTMLElement | null>(null);

    const handleMount = useCallback((node: HTMLElement) => {
        drawerRef.current = node;

        const innerCurrentIndex = getDialogs(drawerRef.current, uniqAttr).length - 1;
        setCurrentIndex(innerCurrentIndex);

        hasNextDialog.current = getDialogs(drawerRef.current, uniqAttr).length > 1;
        const container = ownerDocument(drawerRef.current);
        scrollbarSize.current = getScrollbarSize(container);

        // Возвращаем изначальные стили измененные в предыдущем закрытии
        if (childRef.current) {
            restoreStyles(childRef.current, defaultChildStyles.current);
        }

        if (disableScrollLock) {
            return;
        }

        const { paddingRight } = container.body.style;

        defaultBodyStyles.current = {
            'padding-right': paddingRight,
            overflow: container.body.style.overflow,
        };

        if (!hasNextDialog.current) {
            // Если отсутствует открытый Drawer добавляем отступ равный ширине скроллбара
            if (scrollbarSize.current) {
                container.body.style.paddingRight = `${scrollbarSize.current}px`;
            }
            // и отключаем скролл
            container.body.style.overflow = 'hidden';
        } else {
            const drawerPaddingRight = getComputedStyle(drawerRef.current).paddingRight;
            defaultDrawerStyles.current = {
                'padding-right': drawerPaddingRight,
                width: drawerRef.current.style.width,
            };

            // Сдвигаем Drawer, чтоб поместить его ровно над предыдущим
            drawerRef.current.style.paddingRight = `calc(${drawerPaddingRight} + ${paddingRight})`;
            // и добавляем ширины, чтоб растянуть до правого края
            drawerRef.current.style.width = `${drawerRef.current.clientWidth + parseInt(paddingRight, 10)}px`;

            // Отключаем бэкдропы соседних Drawer и получаем HTML-элемент с изначальным стилями
            const [backdrop, backdropStyles] = disableNextBackdrop(
                getNextDialog(drawerRef.current, innerCurrentIndex, uniqAttr),
            );

            nextBackdrop.current = backdrop as HTMLElement;
            nextBackdropStyles.current = backdropStyles as DefaultStyles;
        }
    }, [disableScrollLock, uniqAttr]);

    const handleUnmount = useCallback(() => {
        if (!drawerRef.current || disableScrollLock) {
            return;
        }

        if (scrollbarSize.current) {
            // При закрытии появляется скроллбар и смещает компонент
            // Во избежание этого задаем отрицательный отступ равный ширине скроллбара
            const child = drawerRef.current?.querySelector(`[data-component=${childUniqAttr}]`) as HTMLElement;
            childRef.current = child;
            defaultChildStyles.current = {
                'margin-right': childRef.current.style.marginRight,
            };

            child.style.marginRight = `-${scrollbarSize.current}px`;
        }

        if (!hasNextDialog.current) {
            // Если отсутствуют открытые Drawer - возвращаем body его изначальные стили
            const { body } = ownerDocument(drawerRef.current);
            restoreStyles(body, defaultBodyStyles.current);
        } else if (nextBackdrop.current) {
            // Иначе возвращаем для него стили
            restoreStyles(drawerRef.current, defaultDrawerStyles.current);
            // и для его бэкдропа
            restoreStyles(nextBackdrop.current, nextBackdropStyles.current);
        }
    }, [childUniqAttr, disableScrollLock]);

    useEnhancedEffect(() => {
        if (open) {
            return handleUnmount;
        }

        return undefined;
    }, [handleUnmount, open]);

    const onEnter: ReactTransitionProps['onEnter'] = useCallback((node, isAppearing) => {
        handleMount(node);

        TransitionProps?.onEnter?.(node, isAppearing);
    }, [TransitionProps, handleMount]);

    const onEntering: ReactTransitionProps['onEntering'] = useCallback((node, isAppearing) => {
        node?.focus();

        TransitionProps?.onEntering?.(node, isAppearing);
    }, [TransitionProps]);

    const onEntered: ReactTransitionProps['onEntered'] = useCallback((node, isAppearing) => {
        // При отключении анимации запустится только эта функция
        // Поэтому дублируем логику пропущенных функций
        if (disabledTransition) {
            node?.focus();
            handleMount(node);
        }

        TransitionProps?.onEntered?.(node, isAppearing);
    }, [TransitionProps, disabledTransition, handleMount]);

    const onExited: ReactTransitionProps['onExited'] = useCallback((node) => {
        // Если есть открытый Drawer - перемещаем фокус на него
        if (hasNextDialog.current) {
            const nextModal = getNextDialog(node, currentIndex, uniqAttr);
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

    const { mapStatusToStyles, transitionStyles } = useMapStyles(origin, appearance, offset);

    return {
        ...props,
        disableCloseByEscape,
        disableCloseByClickAway,
        origin,
        appearance,
        keepMounted,
        disablePortal,
        onClick: handleClick,
        dataIndex: currentIndex,
        onKeyDown: handleKeyDown,
        PortalProps: {
            ...PortalProps,
            disablePortal,
        },
        BackdropProps: {
            ...BackdropProps,
            onClick: handleBackdropClick,
            disableTransition: disabledTransition,
            mounted: open,
        },
        TransitionProps: {
            ...TransitionProps,
            in: open,
            unmountOnExit: !keepMounted,
            mountOnEnter: !keepMounted,
            enter: !disabledTransition,
            exit: !disabledTransition,
            onEnter,
            onExited,
            onEntering,
            onEntered,
        },
        ContentTransitionProps: {
            ...ContentTransitionProps,
            in: open,
            mapStatusToStyles,
            enter: !disabledTransition,
            exit: !disabledTransition,
            childrenProps: {
                'data-component': childUniqAttr,
            },
            timeoutProps: appearance === OVER_SCREEN_APPEARANCE.slide
                ? 'transform'
                : undefined,
            styles: {
                ...ContentTransitionProps?.styles,
                ...transitionStyles,
            },
        },
    };
};
