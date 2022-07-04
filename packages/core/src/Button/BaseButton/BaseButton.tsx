/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { useStyles } from './style';
import { BaseButtonProps } from './types';

export const BaseButton: FC<BaseButtonProps> = forwardRef<HTMLButtonElement, BaseButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('BaseButton', initialProps);
    const {
        buttonType = 'button',
        children,
        size = 'medium',
        color = 'brand',
        type = 'contained',
        borderRadius = 'smooth',
        disabled = false,
        loading = false,
        hidden = false,
        styles: externalStyles,
        ...restProps
    } = props;

    const params = {
        size,
        color,
        type,
        borderRadius,
        disabled,
        loading,
    };
    const styles = useStyles({ ...params, styles: externalStyles });

    if (hidden) {
        return null;
    }

    return (
        <button
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            /* eslint-disable-next-line react/button-has-type */
            type={buttonType}
            disabled={disabled || loading}
            {...restProps}
        >
            {children}
        </button>
    );
});
