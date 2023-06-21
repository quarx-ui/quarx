import { ElementType, forwardRef } from 'react';
import { QX_SIZE } from '@core/enums';
import { PALETTE_STANDARD_KEYS, TYPOGRAPHY_WEIGHT, usePropsOverwrites } from '@core/styles';
import { If } from '@core/src/system/If';
import { OverridableComponent, OverridableComponentRef } from '@core/types';
import { HeadlineProps, HeadlinePropsWithoutHtml } from './types';
import { useStyles } from './styles';

export const Headline: OverridableComponent< // eslint-disable-next-line @typescript-eslint/indent
    HeadlinePropsWithoutHtml, 'div'
> = forwardRef(<C extends ElementType = 'div'>(
    initialProps: HeadlineProps<C>,
    ref: OverridableComponentRef<C>,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Headline', initialProps);
    const {
        size = QX_SIZE.medium,
        fontWeight = TYPOGRAPHY_WEIGHT.normal,
        color = PALETTE_STANDARD_KEYS.main,

        children,
        hidden = false,
        component: Component = 'div',

        ...restProps
    } = props;

    const params = { size, fontWeight, color };
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
