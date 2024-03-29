import { FC, forwardRef } from 'react';
import { BaseButton } from '@core/components';
import { usePropsOverwrites } from '@core/styles';
import { QX_SIZE } from '@core/enums';
import { ICON_BUTTON_CSS_VARS, useStyles } from './styles';
import { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('IconButton', initialProps, ICON_BUTTON_CSS_VARS);
    const {
        children,
        size = QX_SIZE.medium,
        loading = false,
        LoaderProps,
        ...restProps
    } = props;

    const params = {
        size,
        loading,
    };

    const styles = useStyles({ params, ...styleProps });

    return (
        <BaseButton
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            size={size}
            loading={loading}
            LoaderProps={{
                twoDots: true,
                size: size === QX_SIZE.xSmall ? QX_SIZE.small : QX_SIZE.medium,
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
