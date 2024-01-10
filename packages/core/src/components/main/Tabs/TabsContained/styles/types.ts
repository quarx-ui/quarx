import { QxBorderSize } from '@core';
import { TabsStyleParamsCommon } from '../../common';

export interface TabsContainedStyleParams extends TabsStyleParamsCommon {
    /** Радиус скругления вкладок, доступен для `Tabs` с типами
     * `contained` и `segmented`. Возможные значения – все ключи из theme.borderRadii
     *
     * @default medium */
    borderRadius: QxBorderSize;
}
