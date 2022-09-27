import { cn as bem } from '@bem-react/classname';
import clsx from 'clsx';
import { deepmerge, extractStyles } from '@core/styles/engine/utils';
import { Permissions } from '@core/types';
import { useTheme } from './useTheme';
import { TypedCnFormatter } from './types';
import { Classes, Styles } from '@core/styles/engine';
import { ComponentsProps } from '@core/styles';

/**
 * Хук для переопределения стандартных параметров компонентов, а также обеспечения возможности
 * стилизации через БЭМ. Стандартные значения параметров берутся из глобальной темы (`theme.defaultProps[name]`).
 * - Приоритет при слиянии параметров: defaultProps < props < props.permissions
 * - `className` добавляется в `cn('root')`
 * - `classes[key]` добавляется в `cn(key)`
 *
 * @param name имя компонента
 * @param props параметры, переданные в компонент извне
 * @param cssVars объект с CSS-переменными, где ключ - название переменной, значение - сама переменная
 *
 * @return
 * { props, cn }
 *
 * props – итоговый набор параметров компонента
 *
 * cn – функция для генерации имен классов по БЭМ
 */
export function usePropsOverwrites<T, StyleKey extends string, CSSVars extends Partial<Record<string, string>>>(
    name: keyof ComponentsProps,
    props: T & { classes?: Classes<StyleKey>, cssVars?: CSSVars },
    cssVars?: CSSVars
): {
        props: T & Permissions & { styles: Partial<Styles<StyleKey>> },
        cn: TypedCnFormatter<StyleKey>,
        name: string
    } {
    const {
        classes,
        className,
        permissions,
        ...restProps
    } = props as any;

    const theme = useTheme();
    const overwrites = theme?.defaultProps?.[name];

    const mergedCssVars: CSSVars = {
        ...cssVars,
        ...overwrites?.cssVars,
        ...restProps.cssVars,
    };

    const mergedProps = {
        ...(overwrites ?? {}),
        ...(restProps ?? {}),
        ...(permissions ?? {}),
        ...(Object.keys(mergedCssVars).length
            ? { cssVars: mergedCssVars }
            : {})
    };

    // @ts-ignore
    const overwritesStyles = overwrites?.styles ? extractStyles(mergedProps, theme, overwrites.styles, mergedProps.cssVars) : {};
    const propsStyles = restProps?.styles ? extractStyles(mergedProps, theme, restProps.styles, mergedProps.cssVars) : {};

    if (propsStyles || overwritesStyles) {
        mergedProps.styles = deepmerge(overwritesStyles, propsStyles);
    }

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
    };
}
