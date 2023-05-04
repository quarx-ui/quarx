import { FC, forwardRef } from 'react';
import clsx from 'clsx';
import { BaseButton } from '@core/src';
import { usePropsOverwrites } from '@core/styles';
import { QX_SIZE } from '@core/enums';
import { BUTTON_CSS_VARS, useStyles } from './styles';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('Button', initialProps, BUTTON_CSS_VARS);

    const {
        children,
        size = QX_SIZE.medium,
        loading = false,
        leftIcon,
        rightIcon,
        LoaderProps,
        ...restProps
    } = props;

    const params = {
        size,
        loading,
    };

    const styles = useStyles({ ...params, ...styleProps });

    return (
        <BaseButton
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            size={size}
            loading={loading}
            LoaderProps={{
                twoDots: size === QX_SIZE.small || size === QX_SIZE.xSmall,
                size: QX_SIZE.medium,
                ...LoaderProps,
            }}
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
            {rightIcon && (
                <div
                    className={clsx(cn('icon'), cn('rightIcon'))}
                    css={[styles.rightIcon, styles.icon]}
                >
                    {rightIcon}
                </div>
            )}
        </BaseButton>
    );
});
