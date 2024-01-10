import { ForwardedRef } from 'react';
import { forwardRef, usePropsOverwrites } from '@core';
import { TabItem, TABS_TYPES } from './common';
import { TabsDefault } from './TabsDefault';
import { TabsContained } from './TabsContained';
import { TabsSegmented } from './TabsSegmented';
import { TabsProps } from './types';

const TabsComponents = {
    [TABS_TYPES.default]: TabsDefault,
    [TABS_TYPES.contained]: TabsContained,
    [TABS_TYPES.segmented]: TabsSegmented,
};

export const Tabs = forwardRef(<T extends TabItem = TabItem>(
    initialProps: TabsProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('Tabs', initialProps);

    const { type = TABS_TYPES.default, ...restProps } = props;

    const Component = TabsComponents[type];

    return (
        <Component
            ref={ref}
            className={cn('root')}
            {...restProps}
            styles={styleProps.styles}
        />
    );
});
