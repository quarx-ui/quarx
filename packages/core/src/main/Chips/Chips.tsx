import { createElement, forwardRef, useRef, isValidElement, FC } from 'react';
import { transitions, usePropsOverwrites } from '@core/styles';
import { QX_SIZE } from '@core/enums';
import { CheckMarkIcon, ClosingIcon, TriangleIcon } from '@core/src/main/Chips/assets';
import { SwitchTransition } from 'react-transition-group';
import { focusable, Transition } from '@core';
import { If } from '@core/src/system/If';
import { useId } from '@core/utils';
import { CHIPS_VARIANT } from './constants';
import { ChipsProps } from './types';
import { CHIPS_CSS_VARS, useStyles } from './styles';

const mapVariantToRightIcon = {
    [CHIPS_VARIANT.input]: ClosingIcon,
    [CHIPS_VARIANT.filter]: TriangleIcon,
};

export const Chips: FC<ChipsProps> = forwardRef<HTMLButtonElement, ChipsProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Chips', initialProps, CHIPS_CSS_VARS);
    const {
        children,
        variant = CHIPS_VARIANT.input,
        active,
        elevation,
        disabled,
        size = QX_SIZE.medium,
        disableFocus,
        leftIcon,
        leftIconColor,
        rightIcon,
        activeStateIcon,
        rotateRightIcon = true,
        hidden,
        ...restProps
    } = props;

    const rightIconExists = Boolean(rightIcon);
    const RightIcon = isValidElement(rightIcon)
        ? rightIcon
        : createElement(mapVariantToRightIcon[variant][size]);

    const ActiveStateIcon = isValidElement(activeStateIcon)
        ? activeStateIcon
        : createElement(CheckMarkIcon[size]);
    const LeftIcon = activeStateIcon !== false && (active || !leftIcon)
        ? ActiveStateIcon
        : isValidElement(leftIcon) && leftIcon;
    const leftIconExists = Boolean(LeftIcon);

    const inactiveLeftIconRef = useRef<HTMLDivElement>(null);
    const activeLeftIconRef = useRef<HTMLDivElement>(null);
    const inactiveLeftIconId = useId();
    const activeLeftIconId = useId();
    const leftIconId = active ? activeLeftIconId : inactiveLeftIconId;
    const leftIconRef = active ? activeLeftIconRef : inactiveLeftIconRef;
    const leftIconTimeout = {
        appear: transitions.duration.shorter,
        enter: transitions.duration.shorter,
        exit: transitions.duration.shorter,
    };
    // eslint-disable-next-line
    const addLeftIconEndListener = (done: any) => {
        leftIconRef.current?.addEventListener(
            'transitionend',
            done,
            false,
        );
    };

    const params = {
        variant,
        size,
        active: Boolean(active),
        elevation: Boolean(elevation),
        disabled: Boolean(disabled),
        disableFocus: Boolean(disableFocus),
        leftIconColor,
        rotateRightIcon,
        onlyStateIcon: leftIconExists && !leftIcon,
    };

    const styles = useStyles({ params, ...styleProps });

    if (hidden) { return null; }

    return (
        <button
            ref={ref}
            type="button"
            className={cn('root', params)}
            css={styles.root}
            disabled={disabled}
            tabIndex={focusable(!disableFocus)}
            {...restProps}
        >
            <If condition={leftIconExists && Boolean(leftIcon)}>
                <SwitchTransition mode="out-in">
                    <Transition
                        key={leftIconId}
                        nodeRef={leftIconRef}
                        timeout={leftIconTimeout}
                        addEndListener={addLeftIconEndListener}
                        enter
                    >
                        <div
                            ref={leftIconRef}
                            className={cn('leftIcon')}
                            css={styles.leftIcon}
                        >
                            {LeftIcon}
                        </div>
                    </Transition>
                </SwitchTransition>
            </If>
            <If condition={leftIconExists && !leftIcon}>
                <div
                    ref={leftIconRef}
                    className={cn('leftIcon')}
                    css={styles.leftIcon}
                >
                    {LeftIcon}
                </div>
            </If>
            <span
                css={styles.content}
                className={cn('content')}
            >
                {children}
            </span>
            <If condition={rightIconExists}>
                <div
                    className={cn('rightIcon')}
                    css={styles.rightIcon}
                >
                    {RightIcon}
                </div>
            </If>
        </button>
    );
});
