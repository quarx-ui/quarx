import { Entries, NonNullableFields } from '@core/types';

/** Функция, применяемая в компонентах,
 * которые реализуют перезапись логики дочернего свойства.
 * Возвращает стандартизируемый результат обработки одинаковых свойств.
 * @return [parent_value, child_value] */
export const controlSynchronizedChildProp = <T>(
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

interface ControlSynchronizedChildProps<T> {
    synchronizedParentProps: NonNullableFields<Required<T>>,
    synchronizedChildProps: NonNullableFields<Required<T>>,
}

/** Функция, применяемая в компонентах,
 * которые реализуют перезапись логики дочерних свойств.
 * Возвращает стандартизируемый результат обработки одинаковых свойств.
 * @return ControlSynchronizedChildProps<T>
 * */
export const controlSynchronizedChildProps = <T extends object>(
    defaultProps: NonNullableFields<Required<T>>,
    parentProps: T,
    childProps: T,
): ControlSynchronizedChildProps<T> => {
    const defaultEntries = <Entries<Required<T>>>Object.entries(defaultProps);
    const initial = {
        synchronizedParentProps: defaultProps,
        synchronizedChildProps: defaultProps,
    };

    return defaultEntries.reduce((
        acc,
        [key, value],
    ) => {
        const [parent, child] = controlSynchronizedChildProp(
            value,
            parentProps[key],
            childProps[key],
        );

        return {
            synchronizedParentProps: {
                ...acc.synchronizedParentProps,
                [key]: parent,
            },
            synchronizedChildProps: {
                ...acc.synchronizedChildProps,
                [key]: child,
            },
        };
    }, initial);
};
