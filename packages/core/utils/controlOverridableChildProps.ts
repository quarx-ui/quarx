import { Entries, NonNullableFields } from '@core/types';

/** Функция, применяемая в компонентах,
 * которые реализуют перезапись логики дочернего свойства.
 * Возвращает стандартизируемый результат обработки одинаковых свойств.
 * @return [parent_value, child_value] */
export const controlOverridableChildProp = <T>(
    defaultValue: T,
    parent?: T,
    child?: T,
): [T, T] => {
    if (!parent && !child) {
        return [defaultValue, defaultValue];
    }

    if (parent && child) {
        return [parent, child];
    }

    const value = <T>(parent ?? child);
    return [value, value];
};

interface ControlOverriddenChildProps<T> {
    parentOverriddenProps: NonNullableFields<Required<T>>,
    childOverriddenProps: NonNullableFields<Required<T>>,
}

/** Функция, применяемая в компонентах,
 * которые реализуют перезапись логики дочерних свойств.
 * Возвращает стандартизируемый результат обработки одинаковых свойств.
 * @return ControlOverriddenChildProps<T>
 * */
export const controlOverridableChildProps = <T extends object>(
    defaultProps: NonNullableFields<Required<T>>,
    parentProps: T,
    childProps: T,
): ControlOverriddenChildProps<T> => {
    const defaultEntries = <Entries<Required<T>>>Object.entries(defaultProps);
    const initial = {
        parentOverriddenProps: defaultProps,
        childOverriddenProps: defaultProps,
    };

    return defaultEntries.reduce((
        acc,
        [key, value],
    ) => {
        const [parent, child] = controlOverridableChildProp(
            value,
            parentProps[key],
            childProps[key],
        );

        return {
            parentOverriddenProps: {
                ...acc.parentOverriddenProps,
                [key]: parent,
            },
            childOverriddenProps: {
                ...acc.childOverriddenProps,
                [key]: child,
            },
        };
    }, initial);
};
