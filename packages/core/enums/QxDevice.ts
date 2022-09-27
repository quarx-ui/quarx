import { Narrow, Values, valuesAsKeysFromArray } from '@core';

export const QX_DEVICE = valuesAsKeysFromArray([
    'mobile',
    'tablet',
    'smallDesktop',
    'desktop',
]);

export type QxDevice = Values<typeof QX_DEVICE>;

export type PickQxDevice<Devices extends QxDevice = QxDevice> = Narrow<QxDevice, Devices>;

export const isQxDevice = (arg: unknown): arg is QxDevice => (
    Object.values(QX_DEVICE).includes(arg as never)
);
