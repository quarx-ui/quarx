import { SerializedStyles } from '@emotion/react';
import { StylesProp } from '../types';

export interface UseStylesProps<
    StyleParams extends object,
    ClassKey extends string = string,
    CSSVars extends string = string,
> {
    styles?: StylesProp<StyleParams, ClassKey, CSSVars>;
    cssVars?: Partial<Record<CSSVars, string>>;
    cssPrefix?: string;
}

export interface UseStylesPropsWithParams<
    StyleParams extends object,
    ClassKey extends string = string,
    CSSVars extends string = string,
> extends UseStylesProps<StyleParams, ClassKey, CSSVars> {
    params: StyleParams;
}

export interface MakeStylesOptions {
    name?: string;
}

export type KeysFromUseStyles<T extends (...args: never) => Record<string, SerializedStyles>> = keyof ReturnType<T>
