import { ElementType, forwardRef } from 'react';
import { ORIENTATIONS } from '@core/enums';
import { PALETTE_STANDARD_KEYS, usePropsOverwrites } from '@core/styles';
import { If } from '@core/components/system/If';
import { DividerProps, DividerPropsWithoutHtml } from './types';
import { useStyles } from './styles';
import { DIVIDER_CSS_VARS } from './styles/vars';
import { OverridableComponent, OverridableComponentRef } from '../../../types';

export const Divider: OverridableComponent<DividerPropsWithoutHtml, 'div'> = forwardRef(<C extends ElementType = 'div'>(
    initialProps: DividerProps<C>,
    ref: OverridableComponentRef<C>,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Divider', initialProps, DIVIDER_CSS_VARS);
    const {
        hidden = false,

        component: Component = 'div',

        color = PALETTE_STANDARD_KEYS.main,
        indent = false,
        orientation = ORIENTATIONS.horizontal,
        width = 'thin',

        ...restProps
    } = props;

    const params = { indent, orientation, color, width };
    const styles = useStyles({ params, ...styleProps });

    return (
        <If condition={!hidden}>
            <Component
                ref={ref}
                className={cn('root', { ...params, indent: Boolean(indent) })}
                css={styles.root}
                role="separator"
                {...restProps}
            />
        </If>
    );
});
