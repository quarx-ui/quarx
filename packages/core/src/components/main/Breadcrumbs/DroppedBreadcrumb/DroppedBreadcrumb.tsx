import { FC, forwardRef } from 'react';
import { PALETTE_COLORS, usePropsOverwrites } from '@core/styles';
import { BREADCRUMB_TYPE, BreadcrumbProps, focusable, QX_SIZE } from '@core';
import { useStyles } from './styles';
import { DROPPED_BREADCRUMB_CSS_VARS } from './styles/vars';

export const DroppedBreadcrumb: FC<BreadcrumbProps> = forwardRef<HTMLAnchorElement, BreadcrumbProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('DroppedBreadcrumb', initialProps, DROPPED_BREADCRUMB_CSS_VARS);
    const {
        value,
        link,
        children,

        disableFocus = false,

        // Для реализации интерфейса и удобной кастомизации
        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        type = BREADCRUMB_TYPE.link,

        ...restProps
    } = props;

    const params = { disableFocus, size, color, type };
    const styles = useStyles({ params, ...styleProps });

    return (
        <a
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            href={link}
            tabIndex={focusable(!disableFocus)}
            data-value={value}
            {...restProps}
        >
            {children}
        </a>
    );
});
