/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef, useRef } from 'react';
import { transitions, usePropsOverwrites } from '@core/styles';
import { QX_SIZE } from '@core/enums';
import { CheckMarkIcon, ClosingIcon, TriangleIcon } from '@core/src/main/Chips/assets';
import { SwitchTransition } from 'react-transition-group';
import { focusable, If, Transition } from '@core';
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
    const RightIcon = React.isValidElement(rightIcon)
        ? rightIcon
        : React.createElement(mapVariantToRightIcon[variant][size]);

    const ActiveStateIcon = React.isValidElement(activeStateIcon)
        ? activeStateIcon
        : React.createElement(CheckMarkIcon[size]);
    const LeftIcon = active
        ? ActiveStateIcon
        : React.isValidElement(leftIcon) && leftIcon;
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
        leftIconExists,
        leftIconColor,
        rotateRightIcon,
        rightIconExists,
    };

    const styles = useStyles({ ...params, ...styleProps });

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
            <If condition={leftIconExists}>
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
            <span>{children}</span>
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
