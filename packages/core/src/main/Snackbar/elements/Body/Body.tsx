import { FC } from 'react';
import { QX_SIZE, useProps } from '@core';
import { SnackbarBodyProps } from '@core/src/main/Snackbar/elements/Body/types';
import { ActionButtons } from '@core/src/main/Snackbar/elements/ActionButtons';
import { If } from '@core/src/system/If';
import { useStyles } from './styles';

export const Body: FC<SnackbarBodyProps> = (initialProps) => {
    const { cn, props, styleProps } = useProps('SnackbarBody', initialProps);

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

    const styles = useStyles({ ...params, ...styleProps });

    return (
        <div
            css={styles.root}
            className={cn('root', params)}
            {...htmlProps}
        >
            {children}
            <If condition={!children}>
                <div
                    css={styles.texts}
                    className={cn('texts')}
                >
                    <If condition={!!title}>
                        <span
                            css={styles.title}
                            className={cn('title')}
                        >
                            {title}
                        </span>
                    </If>
                    <If condition={!!description}>
                        <p
                            css={styles.description}
                            className={cn('description')}
                        >
                            {description}
                        </p>
                    </If>
                </div>
                <ActionButtons
                    {...ActionButtonProps}
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
        </div>
    );
};
