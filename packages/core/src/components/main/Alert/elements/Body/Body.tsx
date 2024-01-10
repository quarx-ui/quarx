import { FC } from 'react';
import { QX_SIZE, Stack, usePropsOverwrites, ALERT_TYPE } from '@core';
import { ActionButtons } from '@core/components/main/Alert/elements';
import { If } from '@core/components/system/If';
import { useStyles } from './styles';
import { BodyProps } from './types';

export const Body: FC<BodyProps> = (initialProps) => {
    const { cn, props, styleProps } = usePropsOverwrites('AlertBody', initialProps);

    const {
        title,
        description,
        children,
        size = QX_SIZE.large,

        PrimaryButtonProps,
        SecondaryButtonProps,
        ActionButtonProps,

        ...htmlProps
    } = props;

    const params = {
        size,
    };

    const styles = useStyles({ params, ...styleProps });

    return (
        <Stack
            className={cn('root', params)}
            css={styles.root}
            spacing="0px"
            {...htmlProps}
        >
            {children}
            <If condition={!children}>
                <Stack
                    css={styles.texts}
                    className={cn('texts')}
                    spacing={size === 'large' ? '2px' : '0px'}
                >
                    <If condition={Boolean(title)}>
                        <span
                            css={styles.title}
                            className={cn('title')}
                        >
                            {title}
                        </span>
                    </If>
                    <If condition={Boolean(description)}>
                        <p
                            css={styles.description}
                            className={cn('description')}
                        >
                            {description}
                        </p>
                    </If>
                </Stack>
                <ActionButtons
                    size={size}
                    {...ActionButtonProps}
                    hidden={ActionButtonProps?.type === ALERT_TYPE.horizontal || ActionButtonProps?.hidden}
                    PrimaryButtonProps={{
                        ...PrimaryButtonProps,
                        ...ActionButtonProps?.PrimaryButtonProps,
                    }}
                    SecondaryButtonProps={{
                        ...SecondaryButtonProps,
                        ...ActionButtonProps?.SecondaryButtonProps,
                    }}
                    className={cn('actions')}
                    css={styles.actions}
                />
            </If>
        </Stack>
    );
};
