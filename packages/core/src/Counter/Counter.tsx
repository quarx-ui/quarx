/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { forwardRef } from 'react';
import { useStyles } from './style';
import { CounterHtmlAttributes, CounterProps } from './types';
import { usePropsOverwrites } from '../../emotion-styles/theme';
import { limitDigitsCount } from '../../utils/limitDigitsCount';

export const Counter = forwardRef<HTMLSpanElement, CounterProps & CounterHtmlAttributes>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Counter', initialProps);

    const {
        size = 'large',
        type = 'filled',
        color = 'color1',
        maxDigits = 2,
        children,
        styles: externalStyles,
        ...restProps
    } = props;

    const params = { type, size, color };
    const styles = useStyles({ ...params, styles: externalStyles });

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
