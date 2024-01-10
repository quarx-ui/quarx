import { PickByType } from '@core';
import { SelectionListNodeStruct, SelectionListUtils } from './types';

const DEFAULT_LIST_NODE: Required<PickByType<SelectionListNodeStruct, boolean>> = {
    checked: false,
    disabled: false,
};

const isCheckedNode = (node: SelectionListNodeStruct): boolean => Boolean(node?.checked);

/** Устанавливает все пропущенные boolean параметры для каждого узла списка.
 * ```
 * Default selection list node values: {
 *     checked: false,
 *     disabled: false
 * }
 *```
 * @return SelectionListStruct */
const setDefaultValues: SelectionListUtils['setDefaultValues'] = (
    list,
) => (
    list.map((node) => ({
        ...DEFAULT_LIST_NODE,
        ...node,
    }))
);

/** Возвращает SelectionListNode со значением
 * ```
 * checked: true
 * ```
 * В SelectionListStruct может существовать только один активированный элемент
 * @return SelectionListStruct */
const getCheckedNode: SelectionListUtils['getCheckedNode'] = (
    list,
) => list.find(isCheckedNode);

/** Возвращает SelectionRegistryNodeValue, который содержит
 * value узла со значением
 * ```
 * checked: true
 * ```
 * В SelectionListStruct может существовать только один активированный элемент
 * @return SelectionRegistryNodeValue */
const getCheckedValue: SelectionListUtils['getCheckedValue'] = (
    list,
) => {
    const selected = list.find(isCheckedNode);
    return selected?.value;
};

/** сбрасывает активированные узлы.
 * Можно исключить disabled значения для обработки.
 * По умолчанию disabled не исключаются из обработки
 *
 * @return SelectionListStruct */
const resetAll: SelectionListUtils['resetAll'] = (
    list,
    omitDisabled = false,
) => (
    list.map((node) => ({
        ...node,
        checked: !omitDisabled && node.disabled
            ? node.checked
            : false,
    }))
);

/** Проверяет на уникальность value каждого узла */
const checkValuesUniqueness: SelectionListUtils['checkValuesUniqueness'] = (
    list,
) => {
    const uniqueValues = new Set();
    list.forEach((node) => uniqueValues.add(node.value));
    return uniqueValues.size === list.length;
};

/** Возвращает узел реестра по уникальному значению
 *
 * @return SelectionListNodeStruct | undefined */
const getNodeByValue: SelectionListUtils['getNodeByValue'] = (
    list,
    value,
) => list.find((node) => node.value === value);

export const SELECTION_LIST_UTILS: SelectionListUtils = {
    setDefaultValues,
    getCheckedNode,
    getCheckedValue,
    resetAll,
    checkValuesUniqueness,
    getNodeByValue,
};
