/** @jsx jsx */
import React, { ElementType, forwardRef } from 'react';
import { jsx } from '@emotion/react';
import { usePropsOverwrites } from '@core/styles';
import { OverridableComponent, OverridableComponentRef } from '@core/types';
import { LinkProps, LinkPropsWithoutHtml } from './types';
import { useStyles } from './styles';

/** Ссылка связывает веб-страницы или выступает как более легкий аналог кнопки */
export const Link: OverridableComponent<LinkPropsWithoutHtml, 'a'> = forwardRef(<C extends ElementType = 'a'>(
    initialProps: LinkProps<C>,
    ref: OverridableComponentRef<C>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('Link', initialProps);

    const {
        underline = 'always',
        color = 'info',
        size = 'inherit',
        disabled = false,
        leftItem,
        rightItem,
        children,
        component = 'a',
        ...restProps
    } = props;

    const params = { underline, color, size, disabled };

    const styles = useStyles({ ...params, ...styleProps });

    if (props.hidden) {
        return null;
    }

    const Component = component;

    return (
        <Component
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            aria-disabled={disabled}
            tabIndex={0}
            {...restProps}
        >
            {leftItem && (
                <span
                    className={cn('leftItem')}
                    css={styles.leftItem}
                >
                    {leftItem}
                </span>
            )}
            <span
                className={cn('content')}
                css={styles.content}
            >
                {children}
            </span>
            {rightItem && (
                <span
                    className={cn('rightItem')}
                    css={styles.rightItem}
                >
                    {rightItem}
                </span>
            )}
        </Component>
    );
});
