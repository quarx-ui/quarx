import { ComponentsProps, extractStyles, omitProps, Theme, useTheme } from '@core';
import { UseBemTypeCast } from '@core/styles/engine/theme/hooks/useBem/types';
import { mergeStyles } from '@core/styles/engine/theme/hooks/usePropsOverwrites/helpers';

export const useStylesOverwritesWithoutTheme = <
    Props extends object,
    CSSVarNames extends Record<string, string>,
    StyleKey extends string
>(
    props: Props,
    cssVarNames: CSSVarNames | undefined,
    overwritesOrName: Props | keyof ComponentsProps,
    theme: Theme,
) => {
    const resolvedProps = props as UseBemTypeCast<Props, StyleKey>;
    const resolvedOverwrites = (typeof overwritesOrName === 'string'
        ? theme.defaultProps?.[overwritesOrName]
        : overwritesOrName) as UseBemTypeCast<Props, StyleKey>;
    const mergedProps = omitProps<typeof resolvedProps, 'styles'>({
        ...(resolvedOverwrites ?? {}),
        ...(resolvedProps ?? {}),
    }, ['styles']);
    const overwritesStyles = extractStyles(mergedProps as Props, theme, resolvedOverwrites?.styles, cssVarNames);
    const propsStyles = extractStyles(mergedProps as Props, theme, resolvedProps?.styles, cssVarNames);

    return mergeStyles(propsStyles, overwritesStyles);
};

export const useStylesOverwrites = <
    Props extends object,
    CSSVarNames extends Record<string, string>,
    StyleKey extends string
>(
    props: Props,
    cssVarNames: CSSVarNames | undefined,
    overwritesOrName: Props | keyof ComponentsProps,
) => {
    const theme = useTheme();
    const resolvedOverwrites = (typeof overwritesOrName === 'string'
        ? theme.defaultProps?.[overwritesOrName]
        : overwritesOrName) as UseBemTypeCast<Props, StyleKey>;

    return useStylesOverwritesWithoutTheme(props, cssVarNames, resolvedOverwrites, theme);
};
