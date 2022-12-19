/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef, MouseEventHandler } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { focusable, useBooleanState } from '@core';
import { If } from '@core/src/system/If';
import { PALETTE_COLORS } from '@core/styles/engine/theme/palette/constants';
import { QX_SIZE } from '@core/enums/QxSize';
import { controlSynchronizedChildProps, verifyChildPropsAvailability } from '@core/utils';
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

        onChange,
        hover: externalHover,
        disableFocus = false,
        disableHandlingChildProps = false,

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
    ], children, Selection.displayName, `Параметры изменяются при type = ${SELECTION_TYPE.contained}`);
    verifyChildPropsAvailability([
        'onChange',
    ], children, Selection.displayName, 'Параметр всегда перезаписывается');

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

    const childrenProps = {
        ...initialChildrenProps,

        // SynchronizedProps
        disabled: synchronizedChildProps.disabled,
        size: synchronizedChildProps.size,
        color: synchronizedChildProps.color,
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
        disabled: synchronizedParentProps.disabled,
        color: synchronizedParentProps.color,
        size: synchronizedParentProps.size,
    };
    const styles = useStyles({ ...styledParams, ...styleProps });

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

    const isContainerClickable = type === SELECTION_TYPE.contained;

    if (!disableHandlingChildProps) {
        if (isContainerClickable) {
            childrenProps.hover = hover;
            childrenProps.disableFocus = true;
            childrenProps.onChange = () => undefined;
        } else {
            childrenProps.onChange = onChange;
        }
    }

    const onContainerClickHandler: MouseEventHandler<HTMLButtonElement> = (
        event,
    ) => {
        if (!disableHandlingChildProps && isContainerClickable) {
            onChange?.(event);
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
                        className={cn('controller')}
                        css={styles.controller}
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
