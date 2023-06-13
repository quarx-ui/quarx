import { FC, forwardRef, useMemo } from 'react';
import { QX_SIZE } from '@core/enums';
import { ELEVATION_TYPE, PALETTE_COLORS, usePropsOverwrites } from '@core/styles';
import { If } from '@core/src/system/If';
import { ActionButtons, Body, CloseButton, LeftItem, ActionButtonsProps as ActionButtonPropsType } from './elements';
import { sizeToButtonSize } from './maps';
import { ALERT_COLORS, ALERT_TYPE } from './constants';
import { useStyles } from './styles';
import { AlertProps } from './types';

export const Alert: FC<AlertProps> = forwardRef<HTMLDivElement, AlertProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Alert', initialProps);
    const {
        hidden = false,
        size = QX_SIZE.large,
        background = ELEVATION_TYPE.main,
        elevation = QX_SIZE.medium,
        leftItem = 'default',
        color = ALERT_COLORS.default,
        title,
        description,
        type = ALERT_TYPE.vertical,
        onClose,

        LeftItemProps,
        BodyProps,
        ActionButtonsProps,
        PrimaryButtonProps,
        SecondaryButtonProps,
        CloseButtonProps,

        ...htmlProps
    } = props;

    const buttonSize = sizeToButtonSize[size];
    const primaryButtonProps: ActionButtonPropsType['PrimaryButtonProps'] = useMemo(() => ({
        color: color === ALERT_COLORS.default ? PALETTE_COLORS.secondary : color,
        type: color === ALERT_COLORS.default ? 'contained' : 'outlined',
        size: buttonSize,
        ...PrimaryButtonProps,
        ...ActionButtonsProps?.PrimaryButtonProps,
    }), [ActionButtonsProps?.PrimaryButtonProps, PrimaryButtonProps, buttonSize, color]);

    const secondaryButtonProps: ActionButtonPropsType['SecondaryButtonProps'] = useMemo(() => ({
        type: color === ALERT_COLORS.default ? 'outlined' : 'text',
        size: buttonSize,
        ...SecondaryButtonProps,
        ...ActionButtonsProps?.SecondaryButtonProps,
    }), [ActionButtonsProps?.SecondaryButtonProps, SecondaryButtonProps, buttonSize, color]);

    const bodyProps = useMemo(() => ({
        title,
        size,
        description,
        ...BodyProps,
        ActionButtonProps: {
            type,
            ...ActionButtonsProps,
            ...BodyProps?.ActionButtonProps,
        },
        PrimaryButtonProps: {
            ...primaryButtonProps,
            ...BodyProps?.PrimaryButtonProps,
        },
        SecondaryButtonProps: {
            ...secondaryButtonProps,
            ...BodyProps?.SecondaryButtonProps,
        },
    }), [ActionButtonsProps, BodyProps, description, primaryButtonProps, secondaryButtonProps, size, title, type]);

    const actionButtonsProps = useMemo(() => ({
        size,
        type,
        ...ActionButtonsProps,
        hidden: type === ALERT_TYPE.vertical || ActionButtonsProps?.hidden,
        PrimaryButtonProps: primaryButtonProps,
        SecondaryButtonProps: secondaryButtonProps,
    }), [ActionButtonsProps, primaryButtonProps, secondaryButtonProps, size, type]);

    const leftItemProps = useMemo(() => ({
        color,
        ...LeftItemProps,
        children: LeftItemProps?.children ?? leftItem,
    }), [LeftItemProps, color, leftItem]);

    const closeButtonProps = useMemo(() => ({
        type,
        size,
        ...CloseButtonProps,
        IconButtonProps: {
            size: buttonSize,
            ...CloseButtonProps?.IconButtonProps,
        },
        onClose: CloseButtonProps?.onClose ?? onClose,
    }), [CloseButtonProps, buttonSize, onClose, type, size]);

    const primaryBtnIsHidden = primaryButtonProps?.hidden || bodyProps?.PrimaryButtonProps?.hidden;
    const secondaryBtnIsHidden = secondaryButtonProps?.hidden || bodyProps?.SecondaryButtonProps?.hidden;

    const primaryBtnIsExist = primaryButtonProps?.children || bodyProps?.ActionButtonProps?.PrimaryButton
        || bodyProps?.ActionButtonProps?.PrimaryButtonProps?.children;
    const secondaryBtnIsExist = secondaryButtonProps?.children || bodyProps?.ActionButtonProps?.SecondaryButton
        || bodyProps?.ActionButtonProps?.SecondaryButtonProps?.children;

    const buttonsAreNotExist = !primaryBtnIsExist && !secondaryBtnIsExist;
    const buttonsAreHidden = bodyProps?.ActionButtonProps?.hidden || (primaryBtnIsHidden && secondaryBtnIsHidden);
    const bodyIsHidden = (buttonsAreHidden || buttonsAreNotExist) && (bodyProps?.hidden || !description);

    const params = {
        size,
        background,
        elevation,
        color,
        type,
        isMinimalView: bodyIsHidden,
    };
    const styles = useStyles({ params, ...styleProps });

    return (
        <If condition={!hidden}>
            <div
                {...htmlProps}
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
            >
                <LeftItem
                    {...leftItemProps}
                    css={styles.leftItem}
                    className={cn('leftItem')}
                >
                    {leftItemProps.children}
                </LeftItem>
                <Body
                    {...bodyProps}
                    className={cn('content')}
                    css={styles.content}
                />
                <ActionButtons {...actionButtonsProps} />
                <CloseButton
                    {...closeButtonProps}
                    css={styles.closeButton}
                    className={cn('closeButton')}
                />
            </div>
        </If>
    );
});
