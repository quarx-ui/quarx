/** @jsx jsx */
import React, { ElementType, forwardRef } from 'react';
import { jsx } from '@emotion/react';
import {
    SX_SIZE,
    PALETTE_COLORS,
    usePropsOverwrites,
    OverridableComponent,
    OverridableComponentRef,
} from '@core';
import { TabItemContainedProps, TabItemContainedPropsWithoutHtml } from './types';
import { useStyles } from './styles';

export const TabItemContained: OverridableComponent<TabItemContainedPropsWithoutHtml, 'button'> = forwardRef(
    <C extends ElementType = 'button'>(
        initialProps: TabItemContainedProps<C>,
        ref: OverridableComponentRef<C>,
    ) => {
        const { props, cn } = usePropsOverwrites('TabItemContained', initialProps);

        const {
            children,
            counter,
            component: Component = 'button',

            color = PALETTE_COLORS.brand,
            borderRadius = SX_SIZE.medium,
            size = SX_SIZE.large,
            selected = false,
            styles: externalStyles,
            ...restProps
        } = props;

        const params = {
            color,
            size,
            borderRadius,
            selected,
        };

        const styles = useStyles({ ...params, styles: externalStyles });

        return (
            <Component
                ref={ref}
                type="button"
                className={cn('root', params)}
                css={styles.root}
                tabIndex={selected ? -1 : 0}
                {...restProps}
            >
                {children}
                {counter && (
                    <span
                        className={cn('counter')}
                        css={styles.counter}
                    >
                        {counter}
                    </span>
                )}
            </Component>
        );
    },
);
