import { Classes, StylesCallback, StylesWithCallback } from '@core';
import { ClassNameList, NoStrictEntityMods } from '@bem-react/classname';

export interface TypedCnFormatter<Key extends string> {
    (elemName: Key): string;
    (elemName: Key, elemMix?: ClassNameList): string;
    (elemName: Key, elemMods?: NoStrictEntityMods | null, elemMix?: ClassNameList): string;
}

export type UseBemPropsType<
    Props extends object,
    StyleKey extends string,
> =
    & Props
    & { classes?: Classes<StyleKey> }

export type UseBemTypeCast<
    T extends object,
    StyleKey extends string,
    CSSVarNames extends Partial<Record<string, string>> = Record<string, string>
> =
    & UseBemPropsType<T, StyleKey>
    & {
        styles?: Partial<StylesWithCallback<StyleKey, T>> | StylesCallback<StyleKey, T>;
        className?: string;
    }
