import { Theme } from '@core';
import { CSSInterpolation } from '@emotion/serialize';
import { SerializedStyles } from '@emotion/react';

export type StylesMap<ClassKey extends string = string> = Record<ClassKey, SerializedStyles>;

export type Classes<Keys extends string> = Partial<Record<Keys, string>>
export type Styles<ClassKey extends string = string> = Record<ClassKey, CSSInterpolation>;

export type StylesWithCallback<
    ClassKey extends string = string,
    Props extends object = {},
    CSSVars extends string = string
> = Record<
    ClassKey,
    CSSInterpolation | ((theme: Theme, props: Required<Props>, cssVars: Record<CSSVars, string>) => CSSInterpolation)
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
    Props extends object = {},
    CSSVars extends string = string,
    > {
    /** Объект с дополнительными именами классов для компонента. Обеспечивает возможность
     * добавить кастомное имя класса в один из внутренних элементов по ключу стилей для этого элемента */
    classes?: Classes<Keys>

    /** Объект с переопределениями стилей для элементов компонента */
    styles?: Partial<StylesWithCallback<Keys, Props>>
        | ((theme: Theme, props: Required<Props>, cssVars: Record<CSSVars, string>) => Partial<Styles<Keys>>)

    cssVars?: Partial<Record<CSSVars, string>>,
}
