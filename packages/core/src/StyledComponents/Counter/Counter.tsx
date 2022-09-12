/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { limitDigitsCount } from '@core/utils/limitDigitsCount';
import { useStyles } from './styles';
import { CounterProps } from './types';

export const Counter = forwardRef<HTMLSpanElement, CounterProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Counter', initialProps);

    const {
        size = 'large',
        type = 'filled',
        color = 'brand',
        maxDigits = 2,
        children,
        styles: externalStyles,
        hidden,
        ...restProps
    } = props;

    const params = { type, size, color };
    const styles = useStyles({ ...params, styles: externalStyles });

    if (maxDigits < 1 || hidden) {
        return null;
    }

    return (
        <span
            {...restProps}
            className={cn('root', params)}
            css={styles.root}
            ref={ref}
        >
            {limitDigitsCount(+children, maxDigits)}
        </span>
    );
});
