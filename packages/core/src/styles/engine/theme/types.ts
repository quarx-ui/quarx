import { DeepPartial } from '@core';

export interface WithOverwrites<T> {
    overwrites?: DeepPartial<T>;
}
