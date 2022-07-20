/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef, MouseEventHandler, useState } from 'react';
import { SX_SIZE } from '@core/enums';
import { usePropsOverwrites } from '@core';
import { useStyles } from './styles';
import { RadioButtonProps } from './types';

export const RadioButton:FC<RadioButtonProps> = forwardRef<HTMLLabelElement, RadioButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('RadioButton', initialProps);
    const {
        children,
        hasError = false,
        styles: externalStyles,
        disableFocus = false,
        size = SX_SIZE.medium,
        disabled = false,
        checked,
        hidden = false,
        hover: externalHover,
        onChange,
        inputRef,
        inputProps,
        name,
        value,
        onMouseEnter,
        onMouseLeave,
        ...restProps
    } = props;

    const [hover, setHover] = useState(externalHover ?? false);

    const params = {
        size,
        disableFocus,
        hover: externalHover ?? hover,
        hasError,
        disabled,
        checked: checked ?? false,
    };

    const styles = useStyles({ ...params, styles: externalStyles });

    if (hidden) {
        return null;
    }

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
            {...restProps}
        >
            <input
                ref={inputRef}
                type="radio"
                name={name}
                value={value}
                className={cn('input')}
                css={styles.input}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
                {...inputProps}
            />
            <div
                className={cn('marker')}
                css={styles.marker}
            >
                <div
                    className={cn('markerDot')}
                    css={styles.markerDot}
                />
            </div>
            {children && (
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
