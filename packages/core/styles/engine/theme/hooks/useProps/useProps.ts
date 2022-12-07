import { UsePropsReturn, UsePropsType } from '@core/styles/engine/theme/hooks/useProps/types';
import { ComponentsProps, extractStyles, Theme, useTheme } from '@core';
import { useBem } from '@core/styles/engine/theme/hooks/useBem';
import { UseBemPropsType } from '@core/styles/engine/theme/hooks/useBem/types';

export const usePropsWithoutTheme = <
    Props extends object,
    StyleKey extends string,
    CSSVarNames extends Record<string, string> = Record<string, string>
>(
    name: keyof ComponentsProps | string,
    props: UseBemPropsType<Props, StyleKey>,
    theme: Theme,
    cssVarNames?: CSSVarNames,
) => {
    const {
        permissions,
        styles,
        ...restProps
    } = props as UsePropsType<Props, StyleKey>;

    const resolvedProps = {
        ...(restProps ?? {}),
        ...(permissions ?? {}),
    } as UsePropsReturn<Props>

    const { cn } = useBem(name, props);

    const propsStyles = extractStyles(resolvedProps, theme, styles, cssVarNames);

    const styleProps = {
        cssVars: cssVarNames,
        styles: propsStyles,
    }

    return {
        props: resolvedProps,
        cn,
        name,
        styleProps,
    }
};

export const useProps = <
    Props extends object,
    StyleKey extends string,
    CSSVarNames extends Record<string, string> = Record<string, string>
>(
    name: keyof ComponentsProps | string,
    props: UseBemPropsType<Props, StyleKey>,
    cssVarNames?: CSSVarNames,
) => {
    const resolvedTheme = useTheme();
    return usePropsWithoutTheme(name, props, resolvedTheme, cssVarNames);
};
