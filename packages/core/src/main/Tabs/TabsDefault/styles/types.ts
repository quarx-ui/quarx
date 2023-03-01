import { Values } from '@core';
import { TabsStyleParamsCommon } from '../../common';
import { TABS_LINES } from '../constants';

export type TabsLine = Values<typeof TABS_LINES>;

export interface TabsDefaultStyleParams extends TabsStyleParamsCommon {
    /** Положение линии-индикатора относительно вкладок,
     * доступно только для `Tabs` с типом `default`.
     *
     * - **up** – индикатор отображается сверху
     *
     * - **down** – индикатор отображается снизу
     *
     * @default down */
    line: TabsLine;
}
