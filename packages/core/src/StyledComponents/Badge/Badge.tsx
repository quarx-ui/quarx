/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { forwardRef } from 'react';
import { Counter, CounterType } from '@core/src/StyledComponents/Counter';
import { usePropsOverwrites } from '@core/styles';
import clsx from 'clsx';
import { BadgeProps, BadgeType } from './types';
import { useStyles } from './styles';

const mapBadgeTypeToCounter: Record<BadgeType, CounterType> = {
    contained: 'white',
    outlined: 'filled',
    ghosted: 'filled',
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Badge', initialProps);

    const {
        children,
        borderRadius = 'max',
        color = 'brand',
        type = 'contained',
        size = 'medium',
        counter,
        leftItem,
        rightItem,
        counterProps,
        styles: externalStyles,
        ...restProps
    } = props;

    const params = {
        type,
        size,
        borderRadius,
        color,
    };

    const styles = useStyles({ ...params, styles: externalStyles });

    return (
        <div
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            {...restProps}
        >
            {leftItem && (
                <div
                    className={clsx(cn('leftItem'), cn('item'))}
                    css={[styles.leftItem, styles.item]}
                >
                    {leftItem}
                </div>
            )}
            {children}
            {(rightItem && counter === undefined) && (
                <div
                    className={clsx(cn('rightItem'), cn('item'))}
                    css={[styles.rightItem, styles.item]}
                >
                    {rightItem}
                </div>
            )}
            {counter !== undefined && (
                <Counter
                    className={clsx(cn('rightItem'), cn('item'), counterProps?.className)}
                    css={[styles.rightItem, styles.item]}
                    size={size}
                    color={color}
                    type={mapBadgeTypeToCounter[type]}
                    maxDigits={3}
                    {...counterProps}
                >
                    {counter}
                </Counter>
            )}
        </div>
    );
});
