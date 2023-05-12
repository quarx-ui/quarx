import { CSSInterpolation } from '@emotion/serialize';
import { Styles, StylesArray, Theme } from '@core/styles';

export interface ExtractStylesProps<
    StyleParams extends object,
    CSSVars extends Record<string, string> = Record<string, string>
> {
    params: Required<StyleParams>;
    theme: Theme;
    vars?: CSSVars;
}

/**
 * Функция для вычисления стилей из переданного массива со стилевыми объектами или функциями.
 *
 * От порядка стилей в массиве `styles` зависит приоритет наложения –
 * более приоритетные стили необходимо добавлять в конец массива.
 * */
export function extractStyles<
    StyleParams extends object,
    ClassKey extends string = string,
    CSSVars extends Record<string, string> = Record<string, string>
>(
    { theme, params, vars }: ExtractStylesProps<StyleParams, CSSVars>,
    styles: StylesArray<StyleParams, ClassKey>,
): Record<ClassKey, CSSInterpolation[]> {
    const cssVars = vars ?? {};

    const styleObjectsArray = styles?.map((objectOrCallback) => {
        if (!objectOrCallback) { return undefined; }

        return (
            typeof objectOrCallback === 'function'
                ? objectOrCallback(theme, params, cssVars)
                : Object
                    .entries(objectOrCallback ?? {})
                    .reduce((acc, [key, style]) => ({
                        ...acc,
                        [key]: typeof style === 'function'
                            ? style(theme, params, cssVars)
                            : style,
                    }), {} as Styles<ClassKey>));
    });

    return styleObjectsArray?.reduce<Record<ClassKey, CSSInterpolation[]>>((acc, styleObject) => {
        if (!styleObject) { return acc; }

        Object.entries(styleObject).forEach(([key, cssInterpolation]) => {
            acc[key] = [acc[key] ?? [], cssInterpolation].flat();
        });

        return acc;
    }, {} as Record<ClassKey, CSSInterpolation[]>);
}
