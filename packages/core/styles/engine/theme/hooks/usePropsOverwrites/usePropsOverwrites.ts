import { cn as bem } from '@bem-react/classname';
import clsx from 'clsx';
import { extractStyles } from '@core/styles/engine/utils';
import { useTheme } from '../useTheme';
import {
    StyleProps,
    TypedCnFormatter,
    UsePropsOverwritesPropsType,
    UsePropsOverwritesPropsTypeCast,
    UsePropsOverwritesReturnType
} from './types';
import { ComponentsProps } from '@core/styles';
import { mergeStyles } from './helpers';
import { mapObjectKeys, omitProps } from '@core/utils';

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
export function usePropsOverwrites<T extends object, StyleKey extends string, CSSVarNames extends Record<string, string>>(
    name: keyof ComponentsProps,
    props: UsePropsOverwritesPropsType<T, StyleKey, CSSVarNames>,
    cssVarNames?: CSSVarNames
): UsePropsOverwritesReturnType<T, StyleKey, CSSVarNames> {
    const typedProps = props as UsePropsOverwritesPropsTypeCast<T, StyleKey, CSSVarNames>

    const {
        classes,
        className,
        permissions,
        ...restProps
    } = typedProps;

    const theme = useTheme();
    const overwrites = theme?.defaultProps?.[name] as typeof typedProps;

    const mergedCssVars = {
        ...overwrites?.cssVars,
        ...restProps.cssVars,
    };

    const mergedProps = omitProps<typeof typedProps>({
        ...(overwrites ?? {}),
        ...(restProps ?? {}),
        ...(permissions ?? {}),
    }, ['cssVars', 'styles']);

    const overwritesStyles = extractStyles(mergedProps, theme, overwrites?.styles, cssVarNames);
    const propsStyles = extractStyles(mergedProps, theme, restProps?.styles, cssVarNames);

    const cssVarValues = mapObjectKeys(mergedCssVars, cssVarNames);

    const styleProps: StyleProps<StyleKey, CSSVarNames> = {
        cssVars: cssVarNames,
        styles: mergeStyles(propsStyles, overwritesStyles, cssVarValues),
    };

    const bemCn = bem(`Qx${name}`);

    const cn: TypedCnFormatter<StyleKey> = (key, ...args: any) => (
        key === 'root'
            ? clsx(bemCn(...args), classes?.[key], className)
            : clsx(bemCn(key, ...args), classes?.[key])
    );

    return {
        props: mergedProps,
        cn,
        name,
        styleProps,
    };
}
