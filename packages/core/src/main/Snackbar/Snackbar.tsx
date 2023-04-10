import { FC, forwardRef, useMemo } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { useTimer } from '@core/utils/hooks';
import { UseTimerOptions } from '@core/utils/hooks/useTimer/types';
import { If } from '@core/src/system/If';
import { QX_SIZE } from '@core/enums';
import { SnackbarActionButtonProps } from '@core/src/main/Snackbar/elements/ActionButtons/types';
import { LeftItem } from './elements/LeftItem';
import { ActionButtons } from './elements/ActionButtons';
import { Body } from './elements/Body';
import { CloseButton } from './elements/CloseButton';
import { SNACKBAR_CLOSE_REASON } from './constants';
import { SnackbarProps } from './types';
import { useStyles, SNACKBAR_COLORS, SNACKBARS_LEFT_ITEMS } from './styles';

const mapSizeToButtonSize = {
    large: QX_SIZE.small,
    small: QX_SIZE.xSmall,
};

export const Snackbar: FC<SnackbarProps> = forwardRef<HTMLDivElement, SnackbarProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Snackbar', initialProps);
    const {
        disableTimer = false,
        pauseOnHover = false,
        hidden = false,
        title,
        description,
        color = SNACKBAR_COLORS.default,
        leftItem = SNACKBARS_LEFT_ITEMS.default,
        initialTimerValue = 5,
        onClose,
        alert = false,
        size = QX_SIZE.large,
        elevation = QX_SIZE.medium,
        background = 'main',

        PrimaryButtonProps,
        SecondaryButtonProps,
        TimerProps,
        LeftItemProps,
        BodyProps,
        ActionButtonProps,
        CloseButtonProps,

        ...htmlProps
    } = props;

    const params = {
        color,
        alert,
        size,
        elevation,
        background,
    };

    const styles = useStyles({ ...params, ...styleProps });

    const onCloseHandler = CloseButtonProps?.onClose ?? onClose;

    const timerOps: UseTimerOptions = useMemo(() => ({
        startTime: initialTimerValue,
        disabled: disableTimer,
        rerenderOn: leftItem === SNACKBARS_LEFT_ITEMS.timer
            ? 'step'
            : 'end',
        onFinish: () => onCloseHandler?.(SNACKBAR_CLOSE_REASON.timer),
        ...TimerProps,
    }), [TimerProps, disableTimer, initialTimerValue, leftItem, onCloseHandler]);

    const { value: timerValue, resume, pause } = useTimer(timerOps);

    const buttonSize = mapSizeToButtonSize[size];

    const primaryButtonProps: SnackbarActionButtonProps['PrimaryButtonProps'] = useMemo(() => ({
        color: color === 'default' ? 'secondary' : color,
        type: color === 'default' ? 'contained' : 'outlined',
        size: buttonSize,
        ...PrimaryButtonProps,
        ...ActionButtonProps?.PrimaryButtonProps,
    }), [ActionButtonProps?.PrimaryButtonProps, PrimaryButtonProps, buttonSize, color]);

    const secondaryButtonProps: SnackbarActionButtonProps['SecondaryButtonProps'] = useMemo(() => ({
        type: color === 'default' ? 'outlined' : 'text',
        size: buttonSize,
        ...SecondaryButtonProps,
        ...ActionButtonProps?.SecondaryButtonProps,
    }), [ActionButtonProps?.SecondaryButtonProps, SecondaryButtonProps, buttonSize, color]);

    return (
        <If condition={!hidden}>
            <div
                {...htmlProps}
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                onMouseEnter={(event) => {
                    if (pauseOnHover) {
                        pause();
                    }
                    htmlProps?.onMouseEnter?.(event);
                }}
                onMouseLeave={(event) => {
                    if (pauseOnHover) {
                        resume();
                    }
                    htmlProps?.onMouseLeave?.(event);
                }}
            >
                <LeftItem
                    color={color}
                    timerValue={timerValue}
                    initialTimerValue={initialTimerValue}
                    {...LeftItemProps}
                    css={styles.leftItem}
                    className={cn('leftItem')}
                >
                    {LeftItemProps?.children ?? leftItem}
                </LeftItem>
                <Body
                    title={title}
                    size={size}
                    description={description}
                    {...BodyProps}
                    ActionButtonProps={{
                        size,
                        alert,
                        ...ActionButtonProps,
                        hidden: alert || ActionButtonProps?.hidden,
                    }}
                    PrimaryButtonProps={{
                        ...primaryButtonProps,
                        ...BodyProps?.PrimaryButtonProps,
                    }}
                    SecondaryButtonProps={{
                        ...secondaryButtonProps,
                        ...BodyProps?.SecondaryButtonProps,
                    }}
                    className={cn('content')}
                    css={styles.content}
                />
                <ActionButtons
                    size={size}
                    alert={alert}
                    {...ActionButtonProps}
                    hidden={!alert || ActionButtonProps?.hidden}
                    PrimaryButtonProps={primaryButtonProps}
                    SecondaryButtonProps={secondaryButtonProps}
                />
                <CloseButton
                    {...CloseButtonProps}
                    IconButtonProps={{
                        size: buttonSize,
                        ...CloseButtonProps?.IconButtonProps,
                    }}
                    onClose={onCloseHandler}
                    css={styles.closeButton}
                    className={cn('closeButton')}
                />
            </div>
        </If>
    );
});
