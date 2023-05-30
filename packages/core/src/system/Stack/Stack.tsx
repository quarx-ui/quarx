import { ElementType, forwardRef } from 'react';
import { OverridableComponent, OverridableComponentRef } from '@core/types';
import { usePropsOverwrites } from '@core/styles';
import { If } from '../If';
import { StackProps, StackPropsWithoutHtml } from './types';
import { STACK_CSS_VARS, useStyles } from './styles';
import { STACK_DIRECTION, STACK_ORDER } from './styles/constants';
import { addDividerToChildren } from './helpers';

/** Контейнер для позиционирования элементов, расположенных на одной оси с равными отступами */
export const Stack: OverridableComponent<StackPropsWithoutHtml, 'div'> = forwardRef(<C extends ElementType = 'div'>(
    initialProps: StackProps<C>,
    ref: OverridableComponentRef<C>,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Stack', initialProps, STACK_CSS_VARS);
    const {
        hidden = false,
        children,

        spacing = '8px',
        inline = false,
        order = STACK_ORDER.default,
        direction = STACK_DIRECTION.column,
        justifyContent,
        alignItems = direction === STACK_DIRECTION.column ? 'stretch' : 'center',
        component: Component = 'div',
        divider,

        ...restProps
    } = props;

    const params = {
        order,
        direction,
        justifyContent,
        alignItems,
        inline,
        spacing,
        divider: divider !== undefined,
    };

    const styles = useStyles({ params, ...styleProps });

    return (
        <If condition={!hidden}>
            <Component
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                {divider
                    ? addDividerToChildren(children, divider, direction)
                    : children}
            </Component>
        </If>
    );
});
