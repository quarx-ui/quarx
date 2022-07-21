/** @jsx jsx */
import React, { forwardRef } from 'react';
import { jsx } from '@emotion/react';
import { usePropsOverwrites } from '@core/styles';
import { LinkProps } from './types';
import { useStyles } from './styles';

/** Ссылка связывает веб-страницы или выступает как более легкий аналог кнопки */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Link', initialProps);

    const {
        underline = 'always',
        color = 'info',
        size,
        disabled,
        leftItem,
        rightItem,
        children,
        href,
        hidden,
        styles: externalStyles,
        ...restProps
    } = props;

    const params = { underline, color, size, disabled };

    const styles = useStyles({ ...params, styles: externalStyles });

    if (hidden) {
        return null;
    }

    return (
        <a
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            aria-disabled={disabled}
            {...restProps}
            href={disabled ? undefined : href}
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
        </a>
    );
});
