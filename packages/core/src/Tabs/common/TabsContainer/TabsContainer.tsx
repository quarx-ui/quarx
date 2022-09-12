/** @jsx jsx */
import React, { forwardRef } from 'react';
import { jsx } from '@emotion/react';
import { usePropsOverwrites } from '@core';
import { TabsContainerProps } from './types';
import { useStyles } from './styles';
import { TABS_SCROLL_POSITIONS } from '../constants';

export const TabsContainer = forwardRef<HTMLDivElement, TabsContainerProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('TabsContainer', initialProps);

    const {
        children,
        scrollPosition = TABS_SCROLL_POSITIONS.none,
        styles: externalStyles,
        ...restProps
    } = props;

    const params = { scrollPosition };

    const styles = useStyles({ ...params, styles: externalStyles });

    return (
        <div
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            {...restProps}
        >
            {children}
        </div>
    );
});
