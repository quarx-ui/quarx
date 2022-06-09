import { Narrow, Values, valuesAsKeysFromArray } from '@core';

export const SX_DEVICE = valuesAsKeysFromArray([
    'mobile',
    'tablet',
    'smallDesktop',
    'desktop',
]);

export type SxDevice = Values<typeof SX_DEVICE>;

export type PickSxDevice<Devices extends SxDevice = SxDevice> = Narrow<SxDevice, Devices>;

export const isSxDevice = (arg: unknown): arg is SxDevice => (
    Object.values(SX_DEVICE).includes(arg as never)
);
