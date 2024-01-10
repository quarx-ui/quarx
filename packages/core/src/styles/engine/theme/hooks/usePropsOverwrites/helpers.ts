import { deepmerge, Styles } from '@core/styles';

export const mergeStyles = <StyleKey extends string>(
    propsStyles: Partial<Styles<StyleKey>>,
    overwriteStyles: Partial<Styles<StyleKey>>,
    cssVarProps: Record<string, string> = {},
): Styles<StyleKey> => {
    if (!propsStyles && !overwriteStyles) {
        return {} as Styles<StyleKey>;
    }

    const mergedStyles = deepmerge(overwriteStyles, propsStyles);
    const root = {
        ...mergedStyles?.root ?? {},
        ...Object.values(cssVarProps).length
            ? cssVarProps
            : {},
    };

    return {
        ...mergedStyles,
        root,
    };
};

export const unifyClassName = (value: string) => Array
    .from(new Set(value.split(' ')))
    .join(' ');
