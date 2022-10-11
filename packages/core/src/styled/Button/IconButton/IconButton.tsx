/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import { BaseButton } from '@core/src';
import { usePropsOverwrites } from '@core/styles';
import { QX_SIZE } from '@core/enums';
import { ICON_BUTTON_CSS_VARS, useStyles } from './styles';
import { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('IconButton', initialProps, ICON_BUTTON_CSS_VARS);
    const {
        children,
        size = QX_SIZE.medium,
        loading = false,
        LoaderProps,
        cssVars,
        styles: externalStyles,
        ...restProps
    } = props;

    const params = {
        size,
        loading,
    };

    const styles = useStyles({ ...params, cssVars, styles: externalStyles });

    return (
        <BaseButton
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            size={size}
            loading={loading}
            LoaderProps={{
                twoDots: true,
                size: size === 'xSmall' ? 'small' : 'base',
                ...LoaderProps,
            }}
            {...restProps}
        >
            <div
                className={cn('icon')}
                css={styles.icon}
            >
                {children}
            </div>
        </BaseButton>
    );
});
