/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { forwardRef } from 'react';
import { Counter } from '@core/src/Counter';
import { usePropsOverwrites } from '@core/styles';
import clsx from 'clsx';
import { BadgeHtmlAttributes, BadgeProps } from './types';
import { useStyles } from './style';

export const Badge = forwardRef<HTMLDivElement, BadgeProps & BadgeHtmlAttributes>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Badge', initialProps);

    const {
        children,
        borderRadius = 'rounded',
        color = 'brand',
        type = 'filled',
        size = 'small',
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
                    className={cn('leftItem')}
                    css={styles.leftItem}
                >
                    {leftItem}
                </div>
            )}
            {children}
            {(rightItem && !counter) && (
                <div
                    className={cn('rightItem')}
                    css={styles.rightItem}
                >
                    {rightItem}
                </div>
            )}
            {counter && (
                <Counter
                    className={clsx(cn('counter'), counterProps?.className)}
                    css={styles.counter}
                    size={size}
                    color={color}
                    type={type}
                    maxDigits={3}
                    {...counterProps}
                >
                    {counter}
                </Counter>
            )}
        </div>
    );
});
