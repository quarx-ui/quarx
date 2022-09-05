import { StylesWithCallback, StylesCallback, Theme, Styles } from '@core/styles';

export function extractStyles<
    Props extends object,
    ClassKey extends string = string,
    CSSVars extends Record<string, string> = Record<string, string>
>(
    props: Required<Props>,
    theme: Theme,
    styles: Partial<StylesWithCallback<ClassKey, Props>> | StylesCallback<ClassKey, Props>,
    vars?: CSSVars
): Partial<Styles<ClassKey>> {
    return typeof styles === 'function'
        ? styles(theme, props, vars ?? {})
        : Object
            .entries(styles ?? {})
            .reduce((acc, [key, style]) => ({
                ...acc,
                [key]: typeof style === 'function'
                    ? style(theme, props, vars ?? {})
                    : style
            }), {} as Styles<ClassKey>);
}
