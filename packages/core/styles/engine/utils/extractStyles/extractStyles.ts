import { StylesWithCallback, StylesCallback, Theme as DefaultTheme, Styles } from '@core/styles';

export function extractStyles<
    Props extends object,
    Theme extends DefaultTheme,
    ClassKey extends string = string,
>(
    props: Required<Props>,
    theme: Theme,
    styles: Partial<StylesWithCallback<ClassKey, Props>> | StylesCallback<ClassKey, Props, Theme>
): Partial<Styles<ClassKey>> {
    return typeof styles === 'function'
        ? styles(theme, props)
        : Object
            .entries(styles ?? {})
            .reduce((acc, [key, style]) => ({
                ...acc,
                [key]: typeof style === 'function'
                    ? style(theme, props)
                    : style
            }), {} as Styles<ClassKey>);
}
