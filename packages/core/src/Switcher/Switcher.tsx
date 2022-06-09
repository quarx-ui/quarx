/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef, MouseEventHandler, useState } from 'react';
import { SWITCHER_POSITION, SX_SIZE } from '@core';
import { usePropsOverwrites } from '@core/emotion-styles/theme';
import { SwitcherProps } from './types';
import { useStyles } from './style';

export const Switcher: FC<SwitcherProps> = forwardRef<HTMLLabelElement, SwitcherProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Switcher', initialProps);
    const {
        styles: externalStyles,
        checked = false,
        size = SX_SIZE.medium,
        hasError = false,
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
        hasError,
        disabled,
        disableFocus,
        hover: externalHover ?? hover,
        position,
    };
    const styles = useStyles({ ...params, styles: externalStyles });

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
