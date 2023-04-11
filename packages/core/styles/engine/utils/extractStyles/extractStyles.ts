import { StylesWithCallback, StylesCallback, Theme, Styles } from '@core/styles';

export function extractStyles<
    Props extends object,
    ClassKey extends string = string,
    CSSVars extends Record<string, string> = Record<string, string>
>(
    props: Props,
    theme: Theme,
    styles?: Partial<StylesWithCallback<ClassKey, Props>> | StylesCallback<ClassKey, Props>,
    vars?: CSSVars,
): Partial<Styles<ClassKey>> {
    if (!styles) {
        return {};
    }

    const cssVars = vars ?? {};

    return typeof styles === 'function'
        ? styles(theme, props as Required<Props>, cssVars)
        : Object
            .entries(styles ?? {})
            .reduce((acc, [key, style]) => ({
                ...acc,
                [key]: typeof style === 'function'
                    ? style(theme, props, cssVars)
                    : style,
            }), {} as Styles<ClassKey>);
}
