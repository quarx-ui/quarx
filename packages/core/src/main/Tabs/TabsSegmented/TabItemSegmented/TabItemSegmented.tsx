import { ElementType, forwardRef } from 'react';
import {
    QX_SIZE,
    PALETTE_COLORS,
    usePropsOverwrites,
    OverridableComponent,
    OverridableComponentRef, isNullOrUndefined,
} from '@core';
import { TabItemSegmentedProps, TabItemSegmentedPropsWithoutHtml } from './types';
import { useStyles } from './styles';

export const TabItemSegmented: OverridableComponent<TabItemSegmentedPropsWithoutHtml, 'button'> = forwardRef(
    <C extends ElementType = 'button'>(
        initialProps: TabItemSegmentedProps<C>,
        ref: OverridableComponentRef<C>,
    ) => {
        const { props, cn, styleProps } = usePropsOverwrites('TabItemSegmented', initialProps);

        const {
            children,
            counter,
            component: Component = 'button',

            color = PALETTE_COLORS.brand,
            borderRadius = QX_SIZE.medium,
            size = QX_SIZE.large,
            selected = false,
            icon = false,
            ...restProps
        } = props;

        const params = {
            color,
            size,
            borderRadius,
            selected,
            icon,
        };

        const styles = useStyles({ params, ...styleProps });

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
                {!isNullOrUndefined(counter) && !icon && (
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
