import { FC } from 'react';
import { IconButton, useProps } from '@core';
import { CrossIcon } from '@quarx-ui/icons/src/cross/16px/stroke/rounded';
import { SNACKBAR_CLOSE_REASON } from '@core/src/main/Snackbar/constants';
import { If } from '@core/src/system/If';
import { SnackbarCloseButtonProps } from './types';
import { useStyles } from './styles';

export const CloseButton: FC<SnackbarCloseButtonProps> = (initialProps) => {
    const { props, cn, styleProps } = useProps('SnackbarCloseButton', initialProps);

    const styles = useStyles(styleProps);

    const {
        onClose,
        hidden,

        Button,
        IconButtonProps,

        ...htmlProps
    } = props;

    const clickHandler = IconButtonProps?.onClick
        ?? (() => onClose?.(SNACKBAR_CLOSE_REASON.closeButton));

    return (
        <If condition={!hidden}>
            <div
                {...htmlProps}
                css={styles.root}
                className={cn('root')}
            >
                <If condition={!!Button}>
                    {Button}
                </If>
                <If condition={!Button}>
                    <IconButton
                        type="text"
                        size="xSmall"
                        color="secondary"
                        {...IconButtonProps}
                        onClick={clickHandler}
                    >
                        <CrossIcon />
                    </IconButton>
                </If>
            </div>
        </If>
    );
};
