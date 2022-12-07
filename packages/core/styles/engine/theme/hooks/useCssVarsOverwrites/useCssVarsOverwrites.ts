import { ComponentsProps, mapObjectKeys, Theme, useTheme } from '@core';
import { UsePropsOverwritesPropsTypeCast } from '@core/styles/engine/theme/hooks/usePropsOverwrites/types';
import { UseCssVarsReturn } from './types';

export function useCssVarsOverwrites<
    CSSVarNames extends Record<string, string>,
    Props extends object,
    StyleKey extends string
>(
    cssVarNames: CSSVarNames | undefined,
    props: Props,
    name: keyof ComponentsProps
): UseCssVarsReturn<CSSVarNames>

export function useCssVarsOverwrites<
    CSSVarNames extends Record<string, string>,
    Props extends object,
    StyleKey extends string
>(
    cssVarNames: CSSVarNames | undefined,
    props: Props,
    overwrites: Props,
    theme?: Theme,
): UseCssVarsReturn<CSSVarNames>

export function useCssVarsOverwrites<
    CSSVarNames extends Record<string, string>,
    Props extends object,
    StyleKey extends string
>(
    cssVarNames: CSSVarNames | undefined,
    props: Props,
    overwritesOrName: Props | keyof ComponentsProps,
    theme?: Theme,
) {
    const resolvedTheme = theme ?? useTheme();
    const resolvedProps = props as UsePropsOverwritesPropsTypeCast<Props, StyleKey, CSSVarNames>;
    const resolvedOverwrites = (typeof overwritesOrName === 'string'
        ? resolvedTheme.defaultProps?.[overwritesOrName]
        : overwritesOrName) as UsePropsOverwritesPropsTypeCast<Props, StyleKey, CSSVarNames>;

    const mergedCssVars = {
        ...resolvedOverwrites?.cssVars,
        ...resolvedProps.cssVars,
    };

    const cssVarValues = mapObjectKeys(mergedCssVars, cssVarNames);

    return {
        cssVarNames,
        cssVarValues,
    }
}
