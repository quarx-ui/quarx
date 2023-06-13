import { ALERT_SIZE, Values } from '@core';
import { ALERT_COLORS, ALERT_TYPE } from '@core/src/main/Alert';

export type AlertColor = Values<typeof ALERT_COLORS>;
export type AlertSize = Values<typeof ALERT_SIZE>;
export type AlertType = Values<typeof ALERT_TYPE>;

export interface ElementTypes {
    /** Размер компонента
     * - **small**
     * - **large**
     * @default small */
    size: AlertSize;

    /** Тип компонента:
     * - **vertical** - вертикальная ориентация
     * - **horizontal** - горизонтальная ориентация
     * @default default */
    type: AlertType;

    /** Цветовая палитра компонента
     *
     * - **default**
     * - **brand**
     * - **secondary**
     * - **success**
     * - **info**
     * - **warning**
     * - **danger**
     *
     * @default default */
    color: AlertColor;
}
