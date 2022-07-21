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
 *
 * @return
 * { props, cn }
 *
 * props – итоговый набор параметров компонента
 *
 * cn – функция для генерации имен классов по БЭМ
 */
export function usePropsOverwrites<T, StyleKey extends string>(
    name: keyof ComponentsProps,
    props: T & { classes?: Classes<StyleKey> },
): {
        props: T extends Permissions
            ? Omit<T, 'permissions'> & Permissions['permissions'] & { styles: Partial<Styles<StyleKey>> }
            : T & { styles: Partial<Styles<StyleKey>> }, // TODO что-то не так с Permissions
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

    const mergedProps = {
        ...(overwrites ?? {}),
        ...(restProps ?? {}),
        ...(permissions ?? {}),
    };

    // @ts-ignore
    const overwritesStyles = overwrites?.styles ? extractStyles(mergedProps, theme, overwrites.styles) : {};
    const propsStyles = restProps?.styles ? extractStyles(mergedProps, theme, restProps.styles) : {};

    if (propsStyles || overwritesStyles) {
        mergedProps.styles = deepmerge(overwritesStyles, propsStyles);
    }

    const bemCn = bem(`Sx${name}`);

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
