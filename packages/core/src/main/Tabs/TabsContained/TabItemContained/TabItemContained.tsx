import { ElementType, forwardRef } from 'react';
import {
    QX_SIZE,
    PALETTE_COLORS,
    usePropsOverwrites,
    OverridableComponent,
    OverridableComponentRef, isNullOrUndefined,
} from '@core';
import { TabItemContainedProps, TabItemContainedPropsWithoutHtml } from './types';
import { useStyles } from './styles';

export const TabItemContained: OverridableComponent<TabItemContainedPropsWithoutHtml, 'button'> = forwardRef(
    <C extends ElementType = 'button'>(
        initialProps: TabItemContainedProps<C>,
        ref: OverridableComponentRef<C>,
    ) => {
        const { props, cn, styleProps } = usePropsOverwrites('TabItemContained', initialProps);

        const {
            children,
            counter,
            component: Component = 'button',

            color = PALETTE_COLORS.brand,
            borderRadius = QX_SIZE.medium,
            size = QX_SIZE.large,
            selected = false,
            ...restProps
        } = props;

        const params = {
            color,
            size,
            borderRadius,
            selected,
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
                {!isNullOrUndefined(counter) && (
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
