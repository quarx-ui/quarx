import { ElementType, forwardRef } from 'react';
import { QX_SIZE } from '@core/enums';
import { PALETTE_STANDARD_KEYS, TYPOGRAPHY_WEIGHT, usePropsOverwrites } from '@core/styles';
import { If } from '@core/src/system/If';
import { OverridableComponent, OverridableComponentRef } from '@core/types';
import { BASE_TYPOGRAPHY_TYPES } from '@core';
import { BaseTypographyProps, BaseTypographyPropsWithoutHtml } from './types';
import { useStyles } from './styles';

export const BaseTypography: OverridableComponent< // eslint-disable-next-line @typescript-eslint/indent
    BaseTypographyPropsWithoutHtml, 'div'
> = forwardRef(<C extends ElementType = 'div'>(
    initialProps: BaseTypographyProps<C>,
    ref: OverridableComponentRef<C>,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('BaseTypography', initialProps);
    const {
        type = BASE_TYPOGRAPHY_TYPES.text,
        size = QX_SIZE.medium,
        fontWeight = TYPOGRAPHY_WEIGHT.normal,
        color = PALETTE_STANDARD_KEYS.main,

        children,
        hidden = false,
        component: Component = 'div',

        ...restProps
    } = props;

    const params = { type, size, fontWeight, color };
    const styles = useStyles({ params, ...styleProps });

    return (
        <If condition={!hidden}>
            <Component
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                {children}
            </Component>
        </If>
    );
});
