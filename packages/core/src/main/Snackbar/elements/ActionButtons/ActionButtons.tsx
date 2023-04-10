import { FC } from 'react';
import { Button, QX_SIZE, useProps } from '@core';
import { If } from '@core/src/system/If';
import { SnackbarActionButtonProps } from './types';
import { useStyles } from './styles';

export const ActionButtons: FC<SnackbarActionButtonProps> = (initialProps) => {
    const { cn, props, styleProps } = useProps('SnackbarActionButtons', initialProps);

    const {
        hidden,
        size = QX_SIZE.large,
        alert = false,

        PrimaryButton,
        SecondaryButton,

        PrimaryButtonProps,
        SecondaryButtonProps,

        ...htmlProps
    } = props;

    const params = { size, alert };
    const styles = useStyles({ ...params, ...styleProps });

    return (
        <If condition={!hidden}>
            <div
                css={styles.root}
                className={cn('root', params)}
                {...htmlProps}
            >
                <If condition={!!PrimaryButton}>
                    {PrimaryButton}
                </If>
                <If condition={!!SecondaryButton}>
                    {SecondaryButton}
                </If>
                <If condition={!!PrimaryButtonProps && !PrimaryButton}>
                    <Button
                        size="small"
                        type="outlined"
                        color="secondary"
                        {...PrimaryButtonProps}
                        className={cn('button')}
                        css={styles.button}
                    >
                        {PrimaryButtonProps?.children}
                    </Button>
                </If>
                <If condition={!!SecondaryButtonProps && !SecondaryButton}>
                    <Button
                        type="text"
                        size="small"
                        color="secondary"
                        {...SecondaryButtonProps}
                        className={cn('button')}
                        css={styles.button}
                    >
                        {SecondaryButtonProps?.children}
                    </Button>
                </If>
            </div>
        </If>
    );
};
