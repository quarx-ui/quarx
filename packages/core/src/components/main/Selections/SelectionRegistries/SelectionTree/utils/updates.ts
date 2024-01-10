import { isCheckedNodeByChildren, isIndeterminateNodeByChildren, isNullOrUndefined } from '@core';
import { SelectionTreeUpdates, SelectionTreeNodeStruct } from './types';
import { SELECTION_TREE_UTILS } from './utils';

type NodeState = Pick<SelectionTreeNodeStruct, 'checked' | 'indeterminate'>;
interface ChildrenDescription {
    disabledExists: boolean;

    allEnabledChecked: boolean;
}

const getChildrenDescription = (
    children: SelectionTreeNodeStruct[],
): ChildrenDescription => {
    let disabledExists = false;
    let countEnabledNodes = 0;
    let countCheckedEnabledNodes = 0;

    const getNodeDescription = (node: SelectionTreeNodeStruct): void => {
        if (node?.disabled) {
            disabledExists ||= Boolean(node.disabled);
            return;
        }

        countEnabledNodes += 1;
        countCheckedEnabledNodes += Number(Boolean(node?.checked));
    };

    SELECTION_TREE_UTILS.deepForEachNodes(children, getNodeDescription);
    const allEnabledChecked = countEnabledNodes === countCheckedEnabledNodes;

    return { disabledExists, allEnabledChecked };
};

const getExpectedNextState = (
    node: SelectionTreeNodeStruct,
): NodeState => {
    if (isNullOrUndefined(node?.children)) {
        return {
            checked: !node?.checked,
            indeterminate: false,
        };
    }

    const { disabledExists, allEnabledChecked } = getChildrenDescription(node.children);
    const indeterminate = node?.checked && node?.indeterminate;

    if (!disabledExists) {
        return {
            checked: indeterminate || !node?.checked,
            indeterminate: false,
        };
    }

    return {
        checked: (!indeterminate && !node?.checked) || !allEnabledChecked,
        indeterminate: false,
    };
};

const createToExpectedState = (expectedNextState: NodeState) => (
    (node: SelectionTreeNodeStruct): SelectionTreeNodeStruct => {
        const { disabled, children } = node;

        /* Предпологается, что нормализация дерева уже совершена,
         * и у дочерних элементов будут disabled, если disabled prop есть у родителя */
        if (disabled) { return node; }

        /* Изменяются только bottom-level узлы. Остальные пересчитываются.
         * Так заложено для учета disabled значений. */
        if (isNullOrUndefined(children)) {
            return { ...node, ...expectedNextState };
        }

        const indeterminate = isIndeterminateNodeByChildren(children);
        const checked = isCheckedNodeByChildren(children);

        return {
            ...node,
            indeterminate,
            checked: checked || indeterminate,
        };
    }
);

const createUpdateNodeState = (updatedNode: SelectionTreeNodeStruct) => (
    (node: SelectionTreeNodeStruct): SelectionTreeNodeStruct => {
        if (node.disabled) { return node; }

        if (updatedNode.value === node.value) {
            const { deepMapNodes } = SELECTION_TREE_UTILS;
            const { children: rawChildren } = node;
            const expectedState = getExpectedNextState(node);
            const children = isNullOrUndefined(rawChildren)
                ? rawChildren
                : deepMapNodes(rawChildren, createToExpectedState(expectedState));
            const indeterminate = isIndeterminateNodeByChildren(children);

            return {
                ...node,
                children,
                indeterminate,
                checked: isNullOrUndefined(children)
                    ? expectedState.checked
                    : isCheckedNodeByChildren(children) || indeterminate,
            };
        }

        const children = node?.children?.map(createUpdateNodeState(updatedNode));
        const indeterminate = isIndeterminateNodeByChildren(children);

        return {
            ...node,
            children,
            indeterminate,
            checked: isNullOrUndefined(children)
                ? node?.checked
                : isCheckedNodeByChildren(children) || indeterminate,
        };
    }
);

/** Функция, которая преобразовывает состояние checked
 * противоположному предшествующему значению выбранного узла.
 * Когда функция достигает disabled узла - она не продолжает изменения в глубину данного узла.
 *
 * @param updatedNode - обновляемый узел
 * @param tree - дерево узлов */
const updateState: SelectionTreeUpdates['updateState'] = (
    updatedNode,
    tree,
) => {
    const { disabled } = updatedNode;
    if (disabled) { return tree; }
    return tree.map(createUpdateNodeState(updatedNode));
};

const updateNodeVisibility = (
    node: SelectionTreeNodeStruct,
    updatedNode: SelectionTreeNodeStruct,
    synchronizeChildren: boolean,
): SelectionTreeNodeStruct => {
    if (isNullOrUndefined(node?.children)) {
        return { ...node };
    }

    if (node.value === updatedNode.value) {
        const open = !node.open;
        return {
            ...node,
            open,
            children: synchronizeChildren && !open
                ? SELECTION_TREE_UTILS.deepMapNodes(node?.children, (child) => ({
                    ...child,
                    open,
                }))
                : node?.children,
        };
    }

    const children = node.children.map((child) => (
        updateNodeVisibility(child, updatedNode, synchronizeChildren)
    ));
    return { ...node, children };
};

/** Функция установит противоположное состояние open для узла,
 * чье значение совпадает с переданным value и вернет обновленное дерево. При переданном параметре
 * synchronizeChildren все состояния open дочерних элементов будут синхронизированны с текущим узлом
 * (если при обновлении состояние меняется на false)
 *
 * @param updatedNode - обновляемый узел
 * @param tree - дерево узлов
 * @param synchronizeChildren - необходимость синхронизации дочерних элементов. По умолчанию false */
const updateVisibility: SelectionTreeUpdates['updateVisibility'] = (
    updatedNode,
    tree,
    synchronizeChildren = false,
) => (
    tree.map((node) => (
        updateNodeVisibility(node, updatedNode, synchronizeChildren)
    ))
);

export const SELECTION_TREE_UPDATES: SelectionTreeUpdates = {
    updateState,
    updateVisibility,
};
