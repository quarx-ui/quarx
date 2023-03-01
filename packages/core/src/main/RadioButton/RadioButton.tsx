import { FC, forwardRef, MouseEventHandler, useState } from 'react';
import { QX_SIZE } from '@core/enums';
import { focusable, PALETTE_COLORS, usePropsOverwrites } from '@core';
import { RADIO_BUTTON_POSITION } from './constants';
import { RADIO_BUTTON_CSS_VARS, useStyles } from './styles';
import { RadioButtonProps } from './types';

export const RadioButton: FC<RadioButtonProps> = forwardRef<HTMLLabelElement, RadioButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('RadioButton', initialProps, RADIO_BUTTON_CSS_VARS);
    const {
        children,
        color = PALETTE_COLORS.brand,
        disableFocus = false,
        size = QX_SIZE.medium,
        disabled = false,
        position = RADIO_BUTTON_POSITION.left,
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
        color,
        disableFocus,
        hover: externalHover ?? hover,
        disabled,
        checked: checked ?? false,
        position,
    };

    const styles = useStyles({ ...params, ...styleProps });

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
            {children && position === RADIO_BUTTON_POSITION.right && (
                <div
                    className={cn('content')}
                    css={styles.content}
                >
                    {children}
                </div>
            )}
            <input
                ref={inputRef}
                type="radio"
                name={name}
                value={value}
                className={cn('input')}
                css={styles.input}
                tabIndex={focusable(!disableFocus)}
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
            {children && position === RADIO_BUTTON_POSITION.left && (
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
