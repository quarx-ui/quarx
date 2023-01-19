import { isNullOrUndefined, PickByType, SelectionRegistryNodeValue, SelectionTreeStruct } from '@core';
import { SelectionTreeUtils, SelectionTreeNodeStruct } from './types';

const DEFAULT_TREE_NODE: Required<PickByType<SelectionTreeNodeStruct, boolean>> = {
    open: false,
    indeterminate: false,
    checked: false,
    disabled: false,
};

/** Функция применит callback к каждому узлу дерева */
const deepForEachNodes: SelectionTreeUtils['deepForEachNodes'] = (
    nodes,
    callback,
): void => {
    nodes.forEach((node, index, array) => {
        if (node?.children) {
            deepForEachNodes(node.children, callback);
        }
        callback(node, index, array);
    });
};

/** Функция применит callback к каждому узлу дерева и вернет обновленное callback`ом дерево
 *
 * @return TreeBaseNode[] */
const deepMapNodes: SelectionTreeUtils['deepMapNodes'] = (
    nodes,
    callback,
) => (
    nodes.map((node, index, array) => {
        const updatedChildren = node?.children
            ? deepMapNodes(node.children, callback)
            : node?.children;

        return callback({
            ...node,
            children: updatedChildren,
        }, index, array);
    })
);

/** Формирует массив TreeBaseNode, в который входят только
 * узлы со значением
 * ```
 * checked: true
 * ``` */
const getCheckedNodes: SelectionTreeUtils['getCheckedNodes'] = (
    tree,
    omitIndeterminate = false,
) => {
    const results: SelectionTreeNodeStruct[] = [];
    deepForEachNodes(tree, (node) => {
        if (!node.checked) { return; }

        const indeterminateCheck = node.indeterminate && !omitIndeterminate;
        if (!node.indeterminate || indeterminateCheck) {
            results.push(node);
        }
    });
    return results;
};

/** Формирует массив SelectionRegistryNodeValue, в который входят
 * value узлов со значением
 * ```
 * checked: true
 * ``` */
const getCheckedValues: SelectionTreeUtils['getCheckedValues'] = (
    tree,
    omitIndeterminate = false,
) => {
    const results: SelectionRegistryNodeValue[] = [];
    deepForEachNodes(tree, (node) => {
        if (!node.checked) { return; }

        const indeterminateCheck = node.indeterminate && !omitIndeterminate;
        if (!node.indeterminate || indeterminateCheck) {
            results.push(node.value);
        }
    });
    return results;
};

/** Функция возвращает все узлы, которые обозначены как indeterminate
 * @ узел является indeterminate, когда значения checked и indeterminate равняются true */
const getIndeterminateNodes: SelectionTreeUtils['getIndeterminateNodes'] = (
    tree,
) => {
    const results: SelectionTreeNodeStruct[] = [];
    deepForEachNodes(tree, (node) => {
        if (node?.checked && node?.indeterminate) {
            results.push(node);
        }
    });
    return results;
};

/** Функция определяет является узел checked на основе первого уровня дочерних элементов
 * @ Indeterminate не считается checked узлом
 * @ Для корректной работы функции дерево должно быть нормализованным */
export const isCheckedNodeByChildren: SelectionTreeUtils['isCheckedNodeByChildren'] = (
    nodeChildElements,
): boolean => {
    if (isNullOrUndefined(nodeChildElements)) { return false; }

    const isChecked = (child: SelectionTreeNodeStruct) => Boolean(child.checked) && !child.indeterminate;
    const checkedCount = nodeChildElements.filter(isChecked).length;

    return checkedCount === nodeChildElements.length;
};

/** Функция возвращает все ключи(value) узлов, которые обозначены как indeterminate
 * @ узел является indeterminate, когда значения checked и indeterminate равняются true */
const getIndeterminateValues: SelectionTreeUtils['getIndeterminateValues'] = (
    tree,
) => {
    const results: SelectionRegistryNodeValue[] = [];
    deepForEachNodes(tree, (node) => {
        if (node?.checked && node?.indeterminate) {
            results.push(node.value);
        }
    });
    return results;
};

/** Функция определяет является узел indeterminate на основе первого уровня дочерних элементов
 * @ Для корректной работы функции дерево должно быть нормализованным */
export const isIndeterminateNodeByChildren: SelectionTreeUtils['isIndeterminateNodeByChildren'] = (
    nodeChildElements,
): boolean => {
    if (isNullOrUndefined(nodeChildElements)) { return false; }

    const isChecked = (child: SelectionTreeNodeStruct) => Boolean(child?.checked);
    const isIndeterminate = (child: SelectionTreeNodeStruct) => child?.indeterminate && child?.checked;

    const countCheckedNodes = nodeChildElements.filter(isChecked).length;
    const moreThanOne = countCheckedNodes > 0;
    const lessThanAll = countCheckedNodes < nodeChildElements.length;

    const countIndeterminateNodes = nodeChildElements.filter(isIndeterminate).length;

    return (moreThanOne && lessThanAll) || countIndeterminateNodes > 0;
};

/** Функция изменит состояние open каждого узла, имеющего дочерние узлы, на true и вернет обновленноое дерево */
const openAll: SelectionTreeUtils['openAll'] = (
    tree,
) => (
    deepMapNodes(tree, (node) => Object.assign(node, node?.children && {
        open: true,
    }))
);

/** Функция изменит состояние open каждого узла, имеющего дочерние узлы, на false и вернет обновленноое дерево */
const closeAll: SelectionTreeUtils['closeAll'] = (
    tree,
) => (
    deepMapNodes(tree, (node) => Object.assign(node, node?.children && {
        open: false,
    }))
);

/** активирует все узлы.
 * Можно исключить disabled значения для обработки и данные узлы будут
 * принужденно активированы. По умолчанию disabled не исключаются из обработки */
const selectAll: SelectionTreeUtils['selectAll'] = (
    tree,
    omitDisabled = false,
) => (
    deepMapNodes(tree, (node) => {
        if (!omitDisabled && node?.disabled) { return node; }

        if (isNullOrUndefined(node?.children)) {
            return { ...node, checked: true, indeterminate: false };
        }

        const indeterminate = isIndeterminateNodeByChildren(node?.children);

        return {
            ...node,
            checked: isCheckedNodeByChildren(node?.children) || indeterminate,
            indeterminate,
        };
    })
);

/** Сбрасывает активированные узлы.
 * Можно исключить disabled значения для обработки и данные узлы будут
 * принужденно сброшены. По умолчанию disabled исключаются из обработки,
 * так как это является наиболее правильным подходом при демонстрации дерева */
const resetAll: SelectionTreeUtils['resetAll'] = (
    tree,
    omitDisabled = false,
) => (
    deepMapNodes(tree, (node) => {
        if (!omitDisabled && node.disabled) { return node; }
        const indeterminate = isIndeterminateNodeByChildren(node?.children);
        return ({
            ...node,
            checked: isCheckedNodeByChildren(node?.children) || indeterminate,
            indeterminate,
        });
    })
);

/** Проверяет на уникальность все value каждого узла */
const checkValuesUniqueness: SelectionTreeUtils['checkValuesUniqueness'] = (
    tree,
) => {
    const uniqueValues = new Set();
    let nodeCounts = 0;
    deepForEachNodes(tree, (node) => {
        uniqueValues.add(node.value);
        nodeCounts += 1;
    });
    return uniqueValues.size === nodeCounts;
};

/** Получить узел реестра по уникальному значению
 *
 * @return TreeBaseNode | undefined */
const getNodeByValue: SelectionTreeUtils['getNodeByValue'] = (
    tree,
    value,
) => {
    let result: SelectionTreeNodeStruct | undefined;
    deepForEachNodes(tree, (node) => {
        if (node.value === value) {
            result = node;
        }
    });
    return result;
};

const setDisabled = (node: SelectionTreeNodeStruct): SelectionTreeNodeStruct => ({
    ...node,
    disabled: true,
});

const normalizeNodeByDisabled = (node: SelectionTreeNodeStruct): SelectionTreeNodeStruct => {
    const { children } = node;
    if (node?.disabled) {
        return {
            ...node,
            children: children
                ? deepMapNodes(children, setDisabled)
                : children,
        };
    }

    return {
        ...node,
        children: children?.map(normalizeNodeByDisabled),
    };
};

const normalizeTreeByDisabled = (tree: SelectionTreeStruct): SelectionTreeStruct => (
    tree.map(normalizeNodeByDisabled)
);

/** Логика нормализации работает следующим образом:
 *
 * Если дочерних элементов нет, то indeterminate всегда будет false (так как данное свойство имеет смысл
 * устанавливать только при наличии дочерних элементов),
 * а checked возможен если изначально установлен checked,
 * или если у родителей установлено данные свойства (для поддержки логики дерева).
 *
 * Если дочерние элементы имеются:
 * При checked всем дочерним узлам будет назначен checked, игнорируя свойство disabled,
 * и заново пересчитаются данные значения для всех кроме bottom-level
 * (нельзя заранее спрогнозировать где именно желалось установить checked значения). */
const normalizeNodeByChecked = (
    node: SelectionTreeNodeStruct,
): SelectionTreeNodeStruct => {
    const { children, checked, indeterminate } = node;

    if (!children) {
        return {
            ...node,
            checked,
            indeterminate: false,
        };
    }

    const updatedChildren = checked && !indeterminate
        ? selectAll(children, true)
        : children.map(normalizeNodeByChecked);

    const updatedIndeterminate = isIndeterminateNodeByChildren(updatedChildren);

    return {
        ...node,
        checked: isCheckedNodeByChildren(updatedChildren) || updatedIndeterminate,
        indeterminate: updatedIndeterminate,
        children: updatedChildren,
    };
};

const normalizeTreeByChecked = (tree: SelectionTreeStruct): SelectionTreeStruct => (
    tree.map(normalizeNodeByChecked)
);

const setDefaultNodeValues = (node: SelectionTreeNodeStruct): SelectionTreeNodeStruct => ({
    ...DEFAULT_TREE_NODE,
    ...node,
});

/** Устанавливает все пропущенные boolean параметры для каждого узла списка,
 * нормализует узлы. Если имеется disabled состояние - все дочерние элементы будут приведены к disabled.
 * Если имеется indeterminate функция установит состояние checked для узла.
 * Сначала нормализуется по disabled, затем по checked.
 *
 * @param normalize - необходимость нормализации узлов в соответствии с описанием */
const setDefaultValues: SelectionTreeUtils['setDefaultValues'] = (
    tree,
    normalize = true,
) => {
    const definedValuesTree = deepMapNodes(tree, setDefaultNodeValues);

    if (normalize) {
        const normalizedByDisabledTree = normalizeTreeByDisabled(definedValuesTree);
        return normalizeTreeByChecked(normalizedByDisabledTree);
    }

    return definedValuesTree;
};

export const SELECTION_TREE_UTILS: SelectionTreeUtils = {
    setDefaultValues,
    getCheckedNodes,
    getCheckedValues,
    isCheckedNodeByChildren,
    getIndeterminateNodes,
    getIndeterminateValues,
    isIndeterminateNodeByChildren,
    deepMapNodes,
    deepForEachNodes,
    openAll,
    closeAll,
    selectAll,
    resetAll,
    checkValuesUniqueness,
    getNodeByValue,
};
