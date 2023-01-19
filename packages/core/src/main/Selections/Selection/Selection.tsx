import { cloneElement, FC, forwardRef, KeyboardEventHandler, PointerEventHandler } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { If } from '@core/src/system/If';
import { PALETTE_COLORS } from '@core/styles/engine/theme/palette/constants';
import { QX_SIZE } from '@core/enums/QxSize';
import {
    useBooleanState,
    controlSynchronizedChildProps,
    verifyChildPropsAvailability,
    focusable,
} from '@core/utils';
import { KEYBOARD_KEYS } from '@core/enums';
import { SelectionProps } from './types';
import { useStyles, SELECTION_CSS_VARS } from './styles';
import { SELECTION_TYPE } from './styles/constants';

export const Selection: FC<SelectionProps> = forwardRef<HTMLLabelElement, SelectionProps>((
    externalProps,
    ref,
) => {
    const {
        cn,
        props: initialProps,
        styleProps,
    } = usePropsOverwrites('Selection', externalProps, SELECTION_CSS_VARS);

    // Первоначальные свойства
    const {
        children,
        title,
        description,
        helperText,
        leftAdornment,
        rightAdornment,
        onPointerEnter,
        onPointerLeave,
        onKeyPress,

        hover: externalHover,
        disableFocus = false,

        hidden = false,
        reverse = false,
        type = SELECTION_TYPE.text,

        // Synchronized props
        size,
        color,
        disabled,
        ...htmlProps
    } = initialProps;
    const {
        props: initialChildrenProps,
    } = children;
    verifyChildPropsAvailability([
        'hover',
        'disableFocus',
    ], children, Selection.displayName, 'Параметры всегда перезаписываются');

    // Перезапись одинаковых дочерних и родительских свойств
    const parentSynchronizableProps = {
        disabled,
        size,
        color,
    };
    const childSynchronizableProps = {
        disabled: initialChildrenProps.disabled,
        size: initialChildrenProps.size,
        color: initialChildrenProps.color,
    };
    const defaultSynchronizableProps = {
        disabled: false,
        size: QX_SIZE.medium,
        color: PALETTE_COLORS.brand,
    };
    const {
        synchronizedParentProps,
        synchronizedChildProps,
    } = controlSynchronizedChildProps(
        defaultSynchronizableProps,
        parentSynchronizableProps,
        childSynchronizableProps,
    );

    const {
        state: hover,
        setState: setHover,
    } = useBooleanState(externalHover ?? false);

    const styledParams = {
        type,
        reverse,
        disableFocus,
        hover: externalHover ?? hover,
        disabled: synchronizedParentProps.disabled,
        color: synchronizedParentProps.color,
        size: synchronizedParentProps.size,
    };
    const styles = useStyles({ ...styledParams, ...styleProps });

    // Обработчики событий
    // Pointer, так как MouseLeave не срабатывает при disabled button.
    // См.: https://github.com/facebook/react/issues/18753
    const pointerEnterHandler: PointerEventHandler<HTMLLabelElement> = (
        event,
    ) => {
        setHover(true);
        onPointerEnter?.(event);
    };
    const pointerLeaveHandler: PointerEventHandler<HTMLLabelElement> = (
        event,
    ) => {
        setHover(false);
        onPointerLeave?.(event);
    };
    const onKeyPressHandler: KeyboardEventHandler<HTMLLabelElement> = (
        event,
    ) => {
        const isSpaceKey = event.key === KEYBOARD_KEYS.SPACE;
        if (isSpaceKey && isContainerClickable) {
            childrenProps?.onChange?.(event);
        }
        onKeyPress?.(event);
    };

    const isContainerClickable = type === SELECTION_TYPE.contained;
    const childrenProps = {
        ...initialChildrenProps,

        // SynchronizedProps
        disabled: synchronizedChildProps.disabled,
        size: synchronizedChildProps.size,
        color: synchronizedChildProps.color,
        hover,
        disableFocus: isContainerClickable,
    };

    return (
        <If condition={!hidden}>
            <label
                ref={ref}
                className={cn('root', styledParams)}
                css={styles.root}
                tabIndex={focusable(isContainerClickable && (!disabled || !disableFocus))}
                onPointerEnter={pointerEnterHandler}
                onPointerLeave={pointerLeaveHandler}
                onKeyPress={onKeyPressHandler}
                {...htmlProps}
            >
                <If condition={Boolean(leftAdornment)}>
                    {leftAdornment}
                </If>
                <div
                    className={cn('content')}
                    css={styles.content}
                >
                    <div
                        className={cn('controller')}
                        css={styles.controller}
                    >
                        {cloneElement(
                            children,
                            childrenProps,
                        )}
                    </div>
                    <div
                        className={cn('texts')}
                        css={styles.texts}
                    >
                        <If condition={Boolean(title)}>
                            <span
                                className={cn('title')}
                                css={styles.title}
                            >
                                {title}
                            </span>
                        </If>
                        <If condition={Boolean(description)}>
                            <span
                                className={cn('description')}
                                css={styles.description}
                            >
                                {description}
                            </span>
                        </If>
                        <If condition={Boolean(helperText)}>
                            <span
                                className={cn('helperText')}
                                css={styles.helperText}
                            >
                                {helperText}
                            </span>
                        </If>
                    </div>
                </div>
                <If condition={Boolean(rightAdornment)}>
                    {rightAdornment}
                </If>
            </label>
        </If>
    );
});
