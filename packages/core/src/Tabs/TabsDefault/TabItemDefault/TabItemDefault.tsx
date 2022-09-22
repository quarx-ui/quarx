/** @jsx jsx */
import React, { ElementType, forwardRef } from 'react';
import { jsx } from '@emotion/react';
import {
    SX_SIZE,
    usePropsOverwrites,
    OverridableComponent,
    OverridableComponentRef,
} from '@core';
import { TabItemDefaultProps, TabItemDefaultPropsWithoutHtml } from './types';
import { useStyles } from './styles';
import { TABS_LINES } from '../constants';

export const TabItemDefault: OverridableComponent<TabItemDefaultPropsWithoutHtml, 'button'> = forwardRef(
    <C extends ElementType = 'button'>(
        initialProps: TabItemDefaultProps<C>,
        ref: OverridableComponentRef<C>,
    ) => {
        const { props, cn } = usePropsOverwrites('TabItemDefault', initialProps);

        const {
            children,
            counter,
            component: Component = 'button',

            line = TABS_LINES.down,
            size = SX_SIZE.large,
            selected = false,
            styles: externalStyles,
            ...restProps
        } = props;

        const params = { size, line, selected };

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
                <div
                    className={cn('innerWrapper')}
                    css={styles.innerWrapper}
                >
                    <div
                        className={cn('innerPlaceholder')}
                        css={styles.innerPlaceholder}
                    >
                        {children}
                    </div>
                    <div
                        className={cn('innerContent')}
                        css={styles.innerContent}
                    >
                        {children}
                    </div>
                </div>
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
