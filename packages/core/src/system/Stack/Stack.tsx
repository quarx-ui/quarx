import { Children, ElementType, forwardRef, Fragment, ReactChild } from 'react';
import { OverridableComponent, OverridableComponentRef } from '@core/types';
import { usePropsOverwrites } from '@core/styles';
import { addCssToElement } from '@core/utils';
import { If } from '../If';
import { StackProps, StackPropsWithoutHtml } from './types';
import { STACK_CSS_VARS, useStyles } from './styles';
import { CHILD_TYPE, ChildType, STACK_DIRECTION, STACK_ORDER } from './styles/constants';

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

    const renderChild = (child: ReactChild, type: ChildType, key: number | string) => (
        typeof child === 'object'
            ? addCssToElement(
                { ...child, key: child.key ?? key },
                styles[type],
                { prepend: true, addClassName: cn(type) },
            )
            : (
                <div key={key} css={styles[type]} className={cn(type)}>
                    {child}
                </div>
            )
    );

    return (
        <If condition={!hidden}>
            <Component
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                {Children.map(children, (child, i) => (
                    divider && i < children.length - 1
                        ? (
                            <Fragment>
                                {renderChild(child, CHILD_TYPE.item, i)}
                                {renderChild(divider, CHILD_TYPE.divider, `divider-${i}`)}
                            </Fragment>
                        )
                        : renderChild(child, CHILD_TYPE.item, i)
                ))}
            </Component>
        </If>
    );
});
