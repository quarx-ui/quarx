/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import clsx from 'clsx';
import { BaseButton, Loader } from '@core/src';
import { usePropsOverwrites } from '@core/emotion-styles/theme';
import { useStyles } from './style';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Button', initialProps);
    const {
        children,
        size = 'medium',
        loading = false,
        leftIcon,
        rightIcon,
        styles: externalStyles,
        ...restProps
    } = props;

    const params = {
        size,
        loading,
    };

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
            {leftIcon && (
                <div
                    className={clsx(cn('icon'), cn('leftIcon'))}
                    css={[styles.leftIcon, styles.icon]}
                >
                    {leftIcon}
                </div>
            )}
            {children && (
                <div
                    className={cn('content')}
                    css={styles.content}
                >
                    {children}
                </div>
            )}
            {rightIcon
                    && (
                        <div
                            className={clsx(cn('icon'), cn('rightIcon'))}
                            css={[styles.rightIcon, styles.icon]}
                        >
                            {rightIcon}
                        </div>
                    )}
            {loading && (
                <Loader
                    css={styles.loader}
                    className={cn('loader')}
                    twoDots={size === 'small' || size === 'xSmall'}
                    size="base"
                />
            )}
        </BaseButton>
    );
});
