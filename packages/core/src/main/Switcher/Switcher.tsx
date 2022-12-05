/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef, MouseEventHandler, useState } from 'react';
import { PALETTE_COLORS, SWITCHER_POSITION, QX_SIZE, usePropsOverwrites, focusable } from '@core';
import { SwitcherProps } from './types';
import { SWITCHER_CSS_VARS, useStyles } from './styles';

export const Switcher: FC<SwitcherProps> = forwardRef<HTMLLabelElement, SwitcherProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('Switcher', initialProps, SWITCHER_CSS_VARS);
    const {
        checked = false,
        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        disabled = false,
        hidden = false,
        hover: externalHover,
        disableFocus = false,
        children,
        position = SWITCHER_POSITION.left,
        inputProps,
        inputRef,
        name,
        value,
        onChange,
        onClick,
        onMouseLeave,
        onMouseEnter,
        ...restProps
    } = props;

    const [hover, setHover] = useState(externalHover ?? false);

    const params = {
        size,
        checked,
        color,
        disabled,
        disableFocus,
        hover: externalHover ?? hover,
        position,
    };
    const styles = useStyles({ ...params, ...styleProps });

    if (hidden) { return null; }

    const mouseEnterHandler: MouseEventHandler<HTMLLabelElement> = (e) => {
        setHover(true);
        onMouseEnter?.(e);
    };

    const mouseLeaveHandler: MouseEventHandler<HTMLLabelElement> = (e) => {
        setHover(false);
        onMouseLeave?.(e);
    };

    return (
        <label
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onClick={(e) => {
                if (disabled) { return; }
                onClick?.(e);
            }}
            {...restProps}
        >
            {position === SWITCHER_POSITION.right && children && (
                <div
                    className={cn('content')}
                    css={styles.content}
                >
                    {children}
                </div>
            )}
            <input
                ref={inputRef}
                className={cn('input')}
                css={styles.input}
                type="checkbox"
                name={name}
                value={value}
                tabIndex={focusable(!disableFocus)}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
                {...inputProps}
            />
            <div
                className={cn('toggleContainer')}
                css={styles.toggleContainer}
            >
                <div
                    className={cn('toggle')}
                    css={styles.toggle}
                />
            </div>
            {position === SWITCHER_POSITION.left && children && (
                <div
                    className={cn('content')}
                    css={styles.content}
                >
                    {children}
                </div>
            )}
        </label>
    );
});
