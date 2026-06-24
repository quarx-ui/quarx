import { Classes, StylesProp } from '@core';
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
    StyleKey extends string
> =
    & UseBemPropsType<T, StyleKey>
    & {
        styles?: StylesProp<object, StyleKey>;
        className?: string;
    }
