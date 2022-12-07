import { ComponentsProps, extractStyles, mapObjectKeys, omitProps, Styles, Theme, useTheme } from '@core';
import { UseBemTypeCast } from '@core/styles/engine/theme/hooks/useBem/types';
import { mergeStyles } from '@core/styles/engine/theme/hooks/usePropsOverwrites/helpers';
import { useCssVarsOverwrites } from '@core/styles/engine/theme/hooks/useCssVarsOverwrites';

export function useStylesOverwrites<
    Props extends object,
    CSSVarNames extends Record<string, string>,
    StyleKey extends string
>(
    props: Props,
    cssVarNames: CSSVarNames | undefined,
    name: keyof ComponentsProps
): Styles<StyleKey>
export function useStylesOverwrites<
    Props extends object,
    CSSVarNames extends Record<string, string>,
    StyleKey extends string
>(
    props: Props,
    cssVarNames: CSSVarNames | undefined,
    overwrites: Props,
    theme?: Theme,
): Styles<StyleKey>

export function useStylesOverwrites<
    Props extends object,
    CSSVarNames extends Record<string, string>,
    StyleKey extends string
>(
    props: Props,
    cssVarNames: CSSVarNames | undefined,
    overwritesOrName: Props | keyof ComponentsProps,
    theme?: Theme,
) {
    const resolvedTheme = theme ?? useTheme();
    const resolvedProps = props as UseBemTypeCast<Props, StyleKey>;
    const resolvedOverwrites = (typeof overwritesOrName === 'string'
        ? resolvedTheme.defaultProps?.[overwritesOrName]
        : overwritesOrName) as UseBemTypeCast<Props, StyleKey>;

    const mergedProps = omitProps<typeof resolvedProps>({
        ...(resolvedOverwrites ?? {}),
        ...(resolvedProps ?? {}),
    }, ['styles']);

    const overwritesStyles = extractStyles(mergedProps, resolvedTheme, resolvedOverwrites?.styles, cssVarNames);
    const propsStyles = extractStyles(mergedProps, resolvedTheme, resolvedProps?.styles, cssVarNames);

    const { cssVarValues } = useCssVarsOverwrites(cssVarNames, resolvedProps, resolvedOverwrites, resolvedTheme);

    return mergeStyles(propsStyles, overwritesStyles, cssVarValues as Record<string, string>);
}
