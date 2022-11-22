/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef, MouseEventHandler } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { focusable, If, useBooleanState } from '@core';
import { PALETTE_COLORS } from '@core/styles/engine/theme/palette/constants';
import { QX_SIZE } from '@core/enums/QxSize';
import { controlOverridableChildProps } from '@core/utils';
import { SelectionProps } from './types';
import { useStyles, SELECTION_CSS_VARS } from './styles';
import { SELECTION_TYPE } from './styles/constants';

export const Selection: FC<SelectionProps> = forwardRef<HTMLButtonElement, SelectionProps>((
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
        onMouseEnter,
        onMouseLeave,
        onClick,
        disableHandlingChildProps = false,

        disableFocus = false,
        hidden = false,
        reverse = false,
        type = SELECTION_TYPE.text,
        hover: externalHover,

        // overridable props
        size,
        color,
        disabled,
        ...htmlProps
    } = initialProps;
    const {
        props: initialChildrenProps,
    } = children;

    // Перезапись одинаковых дочерних и родительских свойств
    const parentOverridableProps = {
        disabled,
        size,
        color,
    };
    const childOverridableProps = {
        disabled: initialChildrenProps.disabled,
        size: initialChildrenProps.size,
        color: initialChildrenProps.color,
    };
    const defaultOverridableProps = {
        disabled: false,
        size: QX_SIZE.medium,
        color: PALETTE_COLORS.brand,
    };
    const {
        parentOverriddenProps,
        childOverriddenProps,
    } = controlOverridableChildProps(
        defaultOverridableProps,
        parentOverridableProps,
        childOverridableProps,
    );

    const childrenProps = {
        ...initialChildrenProps,

        // OverriddenProps
        disabled: childOverriddenProps.disabled,
        size: childOverriddenProps.size,
        color: childOverriddenProps.color,
    };

    const {
        state: hover,
        setState: setHover,
    } = useBooleanState(externalHover ?? false);

    const styledParams = {
        type,
        reverse,
        disableFocus,
        hover: externalHover ?? hover,
        disabled: parentOverriddenProps.disabled,
        color: parentOverriddenProps.color,
        size: parentOverriddenProps.size,
    };
    const styles = useStyles({ ...styledParams, ...styleProps });

    const isContainerClickable = type === SELECTION_TYPE.contained;

    if (!disableHandlingChildProps && isContainerClickable) {
        childrenProps.hover = hover;
        childrenProps.disableFocus = true;
        childrenProps.onChange = () => undefined;
    }

    // Обработчики событий
    const mouseEnterHandler: MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        setHover(true);
        onMouseEnter?.(event);
    };

    const mouseLeaveHandler: MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        setHover(false);
        onMouseLeave?.(event);
    };

    const onContainerClickHandler: MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        if (!disableHandlingChildProps && isContainerClickable) {
            initialChildrenProps?.onChange?.(event);
        }
        onClick?.(event);
    };

    return (
        <If condition={!hidden}>
            <button
                ref={ref}
                type="button"
                className={cn('root', styledParams)}
                css={styles.root}
                disabled={disabled}
                tabIndex={focusable((
                    !disableFocus
                    && type === SELECTION_TYPE.contained
                ))}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                onClick={onContainerClickHandler}
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
                        className={cn('leftAdornment')}
                        css={styles.leftAdornment}
                    >
                        {React.cloneElement(
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
            </button>
        </If>
    );
});
