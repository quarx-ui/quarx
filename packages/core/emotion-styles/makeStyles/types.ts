import { CSSInterpolation } from '@emotion/serialize';
import { SerializedStyles } from '@emotion/react';

export type StyleRules<ClassKey extends string = string> = Record<ClassKey, CSSInterpolation>;

export type StyleRulesCallback<Theme, Props extends object, ClassKey extends string = string> = (
    theme: Theme,
    props: Props,
) => StyleRules<ClassKey>;

export type Styles<Theme, Props extends object, ClassKey extends string = string> =
    | StyleRules<ClassKey>
    | StyleRulesCallback<Theme, Props, ClassKey>;

export type StylesMap<ClassKey extends string = string> = Record<ClassKey, SerializedStyles>;

export type StylesOverwrites = Record<string, CSSInterpolation>

export interface MakeStylesOptions {
    name?: string;
}

export type KeysFromUseStyles<T extends (...args: never) => Record<string, SerializedStyles>> = keyof ReturnType<T>
