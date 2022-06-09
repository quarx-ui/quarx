import React, { createRef, FC, forwardRef, MouseEventHandler, useState } from 'react';
import { Selection, Switcher, SwitcherSelectionProps } from '@core';
import { usePropsOverwrites } from '@core/emotion-styles/theme';

export const SwitcherSelection: FC<SwitcherSelectionProps> = forwardRef<HTMLDivElement, SwitcherSelectionProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('SwitcherSelection', initialProps);
    const {
        focused: externalFocus,
        switcherProps,
        errorText,
        disabled,
        size,
        onMouseLeave,
        onMouseEnter,
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

    const switcherRef = createRef<HTMLInputElement>();

    return (
        <Selection
            {...props}
            className={cn('root')}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            disabled={switcherRef.current?.disabled || disabled}
            focused={externalFocus ?? focus}
            ref={ref}
            leftAdornment={(
                <Switcher
                    inputRef={switcherRef}
                    hasError={!!errorText}
                    disabled={switcherRef.current?.disabled || disabled}
                    checked={checked}
                    hover={hover}
                    disableFocus
                    size={size}
                    {...switcherProps}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            )}
        />
    );
});
