import { TabsProps } from '@kit';

export interface TestTabsProps extends Omit<TabsProps, 'items'> {
    withIcons?: boolean,
}
