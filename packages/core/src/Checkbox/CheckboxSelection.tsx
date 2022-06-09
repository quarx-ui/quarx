import React, { createRef, FC, forwardRef, MouseEventHandler, useState } from 'react';
import { Selection } from '@core/src';
import { usePropsOverwrites } from '@core/emotion-styles/theme';
import { Checkbox, CheckboxSelectionProps } from '.';

export const CheckboxSelection: FC<CheckboxSelectionProps> = forwardRef<HTMLDivElement, CheckboxSelectionProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('CheckboxSelection', initialProps);
    const {
        errorText,
        size,
        borderRadius,
        disabled,
        focused: externalFocus,
        checked,
        checkboxProps,
        onMouseEnter,
        onMouseLeave,
    } = props;

    const [focus, setFocus] = useState(externalFocus ?? false);
    const [hover, setHover] = useState(false);

    const mouseLeaveHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        setHover(false);
        onMouseLeave?.(e);
    };

    const mouseEnterHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        setHover(true);
        onMouseEnter?.(e);
    };

    const checkboxRef = createRef<HTMLInputElement>();

    return (
        <Selection
            {...props}
            className={cn('root')}
            focused={externalFocus ?? focus}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            ref={ref}
            disabled={checkboxRef.current?.disabled || disabled}
            leftAdornment={(
                <Checkbox
                    inputRef={checkboxRef}
                    checked={checked}
                    hasError={!!errorText}
                    size={size}
                    hover={hover}
                    disabled={checkboxRef.current?.disabled || disabled}
                    disableFocus
                    borderRadius={borderRadius}
                    {...checkboxProps}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            )}
        />
    );
});
