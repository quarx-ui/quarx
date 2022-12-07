import { useTheme } from '../useTheme';
import {
    StyleProps,
    UsePropsOverwritesPropsType,
    UsePropsOverwritesPropsTypeCast,
    UsePropsOverwritesReturnType
} from './types';
import { ComponentsProps, useStylesOverwritesWithoutTheme } from '@core/styles';
import { omitProps } from '@core/utils';
import { useBem } from '@core/styles/engine/theme/hooks/useBem';

/**
 * Хук для переопределения стандартных параметров компонентов, а также обеспечения возможности
 * стилизации через БЭМ. Стандартные значения параметров берутся из глобальной темы (`theme.defaultProps[name]`).
 * - Приоритет при слиянии параметров: defaultProps < props < props.permissions
 * - `className` добавляется в `cn('root')`
 * - `classes[key]` добавляется в `cn(key)`
 *
 * @param name имя компонента
 * @param props параметры, переданные в компонент извне
 * @param cssVarNames объект с CSS-переменными, где ключ - название переменной, значение - сама переменная
 *
 * @return
 * { props, cn, styleProps, name }
 *
 * props – итоговый набор параметров компонента
 *
 * cn – функция для генерации имен классов по БЭМ
 *
 * styleProps - набор параметров для передачи в useStyles
 *
 * name - имя компонента
 */
export function usePropsOverwrites<
    Props extends object,
    StyleKey extends string,
    CSSVarNames extends Record<string, string>
>(
    name: keyof ComponentsProps,
    props: UsePropsOverwritesPropsType<Props, StyleKey, CSSVarNames>,
    cssVarNames?: CSSVarNames
): UsePropsOverwritesReturnType<Props, StyleKey, CSSVarNames> {
    const typedProps = omitProps<
        UsePropsOverwritesPropsTypeCast<Props, StyleKey, CSSVarNames>,
        'classes' | 'className'
    >(props, ['classes', 'className']);

    const {
        permissions,
        ...restProps
    } = typedProps;

    const theme = useTheme();
    const overwrites = theme?.defaultProps?.[name] as typeof typedProps;
    const mergedProps = omitProps<typeof typedProps, 'cssVars' | 'styles'>({
        ...(overwrites ?? {}),
        ...(restProps ?? {}),
        ...(permissions ?? {}),
    }, ['cssVars', 'styles']);
    const mergedStyles = useStylesOverwritesWithoutTheme(typedProps, cssVarNames, overwrites, theme);
    const { cn } = useBem(name, props);

    const styleProps: StyleProps<StyleKey, CSSVarNames> = {
        cssVars: cssVarNames,
        styles: mergedStyles,
    };

    return {
        props: mergedProps as UsePropsOverwritesReturnType<Props, StyleKey, CSSVarNames>['props'],
        cn,
        name,
        styleProps,
    };
}
