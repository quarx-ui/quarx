export interface UseCssVarsReturn<CSSVarNames extends Record<string, string>> {
    cssVarNames: CSSVarNames | undefined;
    cssVarValues: Record<string, unknown>;
}
