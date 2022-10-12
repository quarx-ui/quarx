import { SerializedStyles } from '@emotion/react';

export interface MakeStylesOptions {
    name?: string;
}

type UseStylesType = (...args: never) => Record<string, SerializedStyles>

export type TypeFromUseStyles<T extends UseStylesType> = ReturnType<T>

export type KeysFromUseStyles<T extends UseStylesType> = keyof ReturnType<T>
