import { ClassNameList, NoStrictEntityMods } from '@bem-react/classname';
import { Classes, Permissions, Styles, StylesCallback, StylesWithCallback } from '@core';

export interface TypedCnFormatter<Key extends string> {
    (elemName: Key): string;
    (elemName: Key, elemMix?: ClassNameList): string;
    (elemName: Key, elemMods?: NoStrictEntityMods | null, elemMix?: ClassNameList): string;
}

export interface StyleProps<
    StyleKey extends string,
    CSSVarNames extends Partial<Record<string, string>> = Record<string, string>
> {
    styles: Styles<StyleKey>,
    cssVars?: CSSVarNames,
}

export type UsePropsOverwritesPropsType<
    T extends object,
    StyleKey extends string,
    CSSVarNames extends Partial<Record<string, string>> = Record<string, string>
> = T & {
    classes?: Classes<StyleKey>,
    cssVars?: Partial<Record<keyof CSSVarNames, unknown>>,
}

export type UsePropsOverwritesPropsTypeCast<
    T extends object,
    StyleKey extends string,
    CSSVarNames extends Partial<Record<string, string>> = Record<string, string>
> = UsePropsOverwritesPropsType<T, StyleKey, CSSVarNames> & {
    styles?: Partial<StylesWithCallback<StyleKey, T>> | StylesCallback<StyleKey, T>,
    className?: string,
    permissions?: Permissions,
}

export interface UsePropsOverwritesReturnType<
    T,
    StyleKey extends string,
    CSSVars extends Partial<Record<string, string>>
> {
    props: Omit<T, keyof StyleProps<StyleKey, CSSVars>> & Permissions,
    cn: TypedCnFormatter<StyleKey>,
    name: string,
    styleProps: StyleProps<StyleKey, CSSVars>,
}
