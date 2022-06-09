import { SerializedStyles } from '@emotion/react';

export interface MakeStylesOptions {
    name?: string;
}

export type KeysFromUseStyles<T extends (...args: never) => Record<string, SerializedStyles>> = keyof ReturnType<T>
