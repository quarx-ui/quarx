import { Children, FC, forwardRef, Fragment, ReactChild } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { addCssToElement } from '@core/utils';
import { If } from '../If';
import { StackProps } from './types';
import { STACK_CSS_VARS, useStyles } from './styles';
import { CHILD_TYPE, ChildType, STACK_DIRECTION, STACK_ORDER } from './styles/constants';

/** Контейнер для позиционирования элементов, расположенных на одной оси с равными отступами */
export const Stack: FC<StackProps> = forwardRef<HTMLDivElement, StackProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Stack', initialProps, STACK_CSS_VARS);
    const {
        hidden = false,
        children,

        spacing = '8px',
        inline = false,
        order = STACK_ORDER.forward,
        direction = STACK_DIRECTION.column,
        justifyContent,
        alignItems,
        divider,

        ...restProps
    } = props;

    const params = { order, direction, justifyContent, alignItems, inline, spacing, divider: divider !== undefined };

    const styles = useStyles({ ...params, ...styleProps });

    const renderChild = (child: ReactChild, type: ChildType = CHILD_TYPE.item) => (
        typeof child === 'object'
            ? addCssToElement(child, styles[type], { prepend: true, addClassName: cn(type) })
            : (
                <div key={`${child}`} css={styles[type]} className={cn(type)}>
                    {child}
                </div>
            )
    );

    return (
        <If condition={!hidden}>
            <div
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                {Children.map(children, (child, i) => (
                    divider && i < children.length - 1
                        ? (
                            <Fragment>
                                {renderChild(child)}
                                {renderChild(divider, CHILD_TYPE.divider)}
                            </Fragment>
                        )
                        : renderChild(child)
                ))}
            </div>
        </If>
    );
});
