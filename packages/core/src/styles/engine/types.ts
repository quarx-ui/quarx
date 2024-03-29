import { Theme } from '@core';
import { CSSInterpolation } from '@emotion/serialize';
import { SerializedStyles } from '@emotion/react';

export type StylesMap<ClassKey extends string = string> = Record<ClassKey, SerializedStyles>;

export type Classes<Keys extends string> = Partial<Record<Keys, string>>
export type Styles<ClassKey extends string = string> = Record<ClassKey, CSSInterpolation>;

export type StylesWithCallback<
    ClassKey extends string = string,
    StyleParams extends object = object,
    CSSVars extends string = string
> = Record<
ClassKey,
CSSInterpolation | ((theme: Theme, props: Required<StyleParams>, cssVars: Record<CSSVars, string>) => CSSInterpolation)
>;

export type StylesCallback<
    Keys extends string,
    Props extends object,
    CSSVars extends string = string
> = (
    theme: Theme,
    props: Required<Props>,
    cssVars: Record<CSSVars, string>
) => Styles<Keys>

export interface WithClassesAndStyles<
    Keys extends string,
    Props extends object = object,
    CSSVars extends string = string,
> {
    /** Объект с дополнительными именами классов для компонента. Обеспечивает возможность
     * добавить кастомное имя класса в один из внутренних элементов по ключу стилей для этого элемента */
    classes?: Classes<Keys>;

    /** Объект с переопределениями стилей для элементов компонента */
    styles?:
    | Partial<StylesWithCallback<Keys, Props>>
    | ((theme: Theme, props: Required<Props>, cssVars: Record<CSSVars, string>) => Partial<Styles<Keys>>)
    | StylesArray<Props, Keys, CSSVars>;
}

export type OmitClassesAndStyles<Props extends object> = Omit<Props, keyof WithClassesAndStyles<any>>

export type StylesProp<
    StyleParams extends object,
    ClassKey extends string = string,
    CSSVars extends string = string,
> = Partial<StylesWithCallback<ClassKey, StyleParams, CSSVars>> | StylesCallback<ClassKey, StyleParams, CSSVars>

export type StylesArray<
    StyleParams extends object,
    ClassKey extends string = string,
    CSSVars extends string = string,
> = Array<StylesProp<StyleParams, ClassKey, CSSVars> | undefined>
