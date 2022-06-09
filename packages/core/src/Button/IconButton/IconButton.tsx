/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import { BaseButton } from '@core/src/Button/BaseButton/BaseButton';
import { Loader } from '@core/src';
import { usePropsOverwrites } from '@core/styles';
import { useStyles } from './style';
import { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('IconButton', initialProps);
    const {
        children,
        size = 'medium',
        loading = false,
        styles: externalStyles,
        ...restProps
    } = props;
    const params = { size, loading };

    const styles = useStyles({ ...params, styles: externalStyles });

    return (
        <BaseButton
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            size={size}
            loading={loading}
            {...restProps}
        >
            <div
                className={cn('icon')}
                css={styles.icon}
            >
                {children}
            </div>
            {loading && (
                <Loader
                    className={cn('loader')}
                    css={styles.loader}
                    twoDots
                    size={size === 'xSmall' ? 'small' : 'base'}
                />
            )}
        </BaseButton>
    );
});
