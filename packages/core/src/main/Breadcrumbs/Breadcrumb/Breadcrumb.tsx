import { FC, forwardRef } from 'react';
import { QX_SIZE } from '@core/enums';
import { PALETTE_COLORS, usePropsOverwrites } from '@core/styles';
import { If } from '@core/src/system/If';
import { focusable } from '@core/utils';
import { BreadcrumbProps } from './types';
import { useStyles } from './styles';
import { BREADCRUMB_CSS_VARS } from './styles/vars';
import { BREADCRUMB_TYPE } from './styles/constants';
import { isPrimitiveChildren } from './helpers';

export const Breadcrumb: FC<BreadcrumbProps> = forwardRef<HTMLAnchorElement, BreadcrumbProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Breadcrumb', initialProps, BREADCRUMB_CSS_VARS);
    const {
        hidden = false,

        value,
        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        type = BREADCRUMB_TYPE.link,
        disableFocus = false,
        maxCrumbLength = 24,
        link,
        children,

        ...restProps
    } = props;

    const params = { size, color, type, disableFocus };
    const styles = useStyles({ params, ...styleProps });
    const exceededTextLimit = isPrimitiveChildren(children)
        && String(children).length > maxCrumbLength;
    const textRender = exceededTextLimit
        ? `${String(children).slice(0, maxCrumbLength)}...`
        : children;

    return (
        <If condition={!hidden}>
            <a
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                href={link}
                tabIndex={focusable(!disableFocus)}
                data-value={value}
                {...restProps}
            >
                {textRender}
            </a>
        </If>
    );
});
