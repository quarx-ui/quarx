import { TabItem } from './common';
import { TabsDefaultProps } from './TabsDefault';
import { TabsContainedProps } from './TabsContained';
import { TabsSegmentedProps } from './TabsSegmented';

export type TabsProps<T extends TabItem = TabItem> =
    | { type: 'default' } & TabsDefaultProps<T>
    | { type: 'contained' } & TabsContainedProps<T>
    | { type: 'segmented' } & TabsSegmentedProps<T>

export * from './TabsDefault/types';
