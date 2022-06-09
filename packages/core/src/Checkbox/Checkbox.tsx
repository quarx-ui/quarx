/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef, MouseEventHandler, useState } from 'react';
import { usePropsOverwrites } from '@core/emotion-styles/theme';
import { useStyles } from './style';
import { CheckboxProps } from './types';
import { CheckIconSmall, CheckIconMedium, CheckIconLarge } from './assets';

type CheckIconProps = Pick<CheckboxProps, 'className' | 'size' | 'indeterminate'>

const CheckIcon: FC<CheckIconProps> = ({ indeterminate, size, ...props }) => {
    if (indeterminate) {
        return <div {...props} />;
    }
    switch (size) {
        case 'small':
            return <CheckIconSmall {...props} />;
        case 'large':
            return <CheckIconLarge {...props} />;
        default:
            return <CheckIconMedium {...props} />;
    }
};

export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLLabelElement, CheckboxProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Checkbox', initialProps);
    const {
        hover: externalHover,
        hasError = false,
        styles: externalStyles,
        children,
        size = 'medium',
        disabled = false,
        checked = false,
        borderRadius = 'smooth',
        indeterminate = false,
        hidden = false,
        inputRef,
        onChange,
        inputProps,
        name,
        value,
        onMouseEnter,
        onMouseLeave,
        disableFocus = false,
        ...restProps
    } = props;

    const [hover, setHover] = useState(externalHover ?? false);
    const params = {
        size,
        hasError,
        disabled,
        checked,
        borderRadius,
        hover: externalHover ?? hover,
        indeterminate,
        disableFocus,
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
            className={cn('root', params)}
            ref={ref}
            css={styles.root}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            {...restProps}
        >
            <input
                ref={inputRef}
                className={cn('input')}
                css={styles.input}
                checked={checked}
                type="checkbox"
                disabled={disabled}
                name={name}
                value={value}
                onChange={onChange}
                {...inputProps}
            />
            <div
                className={cn('checkboxContainer')}
                css={styles.checkboxContainer}
            >
                <div
                    className={cn('overlay')}
                    css={styles.overlay}
                >
                    <CheckIcon
                        indeterminate={indeterminate}
                        size={size}
                        className={cn('icon')}
                        css={styles.icon}
                    />
                </div>
            </div>
            {children && (
                <span
                    className={cn('content')}
                    css={styles.content}
                >
                    {children}
                </span>
            )}
        </label>
    );
});
