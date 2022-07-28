import React, { createRef, FC, forwardRef, MouseEventHandler, useState } from 'react';
import { Selection } from '@core/src';
import { RadioButton, usePropsOverwrites } from '@core';
import { RadioButtonSelectionProps } from '@core/src/RadioButton/types';

export const RadioButtonSelection: FC<RadioButtonSelectionProps> = forwardRef<
HTMLDivElement,
RadioButtonSelectionProps
>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('RadioButtonSelection', initialProps);
    const {
        disabled,
        size,
        focused: externalFocus,
        onMouseLeave,
        onMouseEnter,
        radioButtonProps,
        checked,
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

    const radioButtonRef = createRef<HTMLInputElement>();

    return (
        <Selection
            {...props}
            className={cn('root')}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            disabled={radioButtonRef.current?.disabled || disabled}
            focused={externalFocus ?? focus}
            ref={ref}
            leftAdornment={(
                <RadioButton
                    inputRef={radioButtonRef}
                    disabled={radioButtonRef.current?.disabled || disabled}
                    disableFocus
                    color={radioButtonProps?.color}
                    checked={checked}
                    hover={hover}
                    size={size}
                    {...radioButtonProps}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            )}
        />
    );
});
