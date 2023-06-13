import { FC } from 'react';
import { ALERT_SIZE, ALERT_TYPE, Button, Stack, usePropsOverwrites } from '@core';
import { If } from '@core/src/system/If';
import { ActionButtonsProps } from './types';
import { useStyles } from './styles';

export const ActionButtons: FC<ActionButtonsProps> = (initialProps) => {
    const { cn, props, styleProps } = usePropsOverwrites('AlertActionButtons', initialProps);

    const {
        hidden,
        size = ALERT_SIZE.large,
        type = ALERT_TYPE.vertical,

        PrimaryButton,
        SecondaryButton,

        PrimaryButtonProps,
        SecondaryButtonProps,

        ...htmlProps
    } = props;

    const params = { type };
    const styles = useStyles({ params, ...styleProps });

    const buttonsAreNotExist = !PrimaryButton
        && !SecondaryButton
        && (!PrimaryButtonProps?.children || PrimaryButtonProps?.hidden)
        && (!SecondaryButtonProps?.children || SecondaryButtonProps?.hidden);

    return (
        <Stack
            hidden={hidden || buttonsAreNotExist}
            css={styles.root}
            className={cn('root', params)}
            spacing={size === ALERT_SIZE.large ? '12px' : undefined}
            direction="row"
            order={type === ALERT_TYPE.horizontal ? 'reverse' : undefined}
            {...htmlProps}
        >
            {PrimaryButton ?? (
                <If condition={Boolean(PrimaryButtonProps?.children)}>
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
            )}
            {SecondaryButton ?? (
                <If condition={Boolean(SecondaryButtonProps?.children)}>
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
            )}
        </Stack>
    );
};
