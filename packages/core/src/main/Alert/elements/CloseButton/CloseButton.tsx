import { FC } from 'react';
import { IconButton, QX_SIZE, usePropsOverwrites } from '@core';
import { If } from '@core/src/system/If';
import { ALERT_TYPE } from '@core/src/main/Alert';
import { CloseButtonProps } from './types';
import { useStyles } from './styles';
import { sizeToIcon } from './maps';

export const CloseButton: FC<CloseButtonProps> = (initialProps) => {
    const { props, cn, styleProps } = usePropsOverwrites('AlertCloseButton', initialProps);

    const {
        onClose,
        hidden,
        type = ALERT_TYPE.vertical,
        size = QX_SIZE.large,

        Button,
        IconButtonProps,

        ...htmlProps
    } = props;
    const params = { type };
    const styles = useStyles({ params, ...styleProps });

    const clickHandler = IconButtonProps?.onClick ?? onClose;

    return (
        <If condition={!hidden}>
            <div
                {...htmlProps}
                css={styles.root}
                className={cn('root', params)}
            >
                {Button ?? (
                    <IconButton
                        type="text"
                        size="xSmall"
                        color="secondary"
                        {...IconButtonProps}
                        className={cn('button')}
                        css={styles.button}
                        onClick={clickHandler}
                    >
                        {sizeToIcon[size]}
                    </IconButton>
                )}
            </div>
        </If>
    );
};
