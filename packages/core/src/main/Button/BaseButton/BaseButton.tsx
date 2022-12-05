/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import { PALETTE_COLORS, usePropsOverwrites } from '@core/styles';
import { Loader } from '@core/src';
import { QX_BORDER_SIZE, QX_SIZE } from '@core/enums';
import { useStyles, BASE_BUTTON_CSS_VARS } from './styles';
import { BaseButtonProps } from './types';

export const BaseButton: FC<BaseButtonProps> = forwardRef<HTMLButtonElement, BaseButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('BaseButton', initialProps, BASE_BUTTON_CSS_VARS);
    const {
        buttonType = 'button',
        children,
        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        type = 'contained',
        borderRadius = QX_BORDER_SIZE.medium,
        disabled = false,
        loading = false,
        hidden = false,
        Loader: externalLoader,
        LoaderProps,
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
    const styles = useStyles({ ...params, ...styleProps });

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
            {loading && (
                externalLoader ?? (
                    <Loader
                        css={styles.loader}
                        className={cn('loader')}
                        {...LoaderProps}
                    />
                ))}
        </button>
    );
});
