import { SelectionListUpdates } from './types';

/** Функция, которая преобразовывает состояние checked
 * противоположному предшествующему значению выбранного узла.
 *
 * @param updatedNode - узел, который будет обновлен
 * @param list - узлы списка
 *
 * @return SelectionList */
const updateState: SelectionListUpdates['updateState'] = (
    updatedNode,
    list,
) => {
    if (updatedNode.disabled) {
        return list;
    }

    return (
        list.map((node) => {
            const isCurrentNode = node.value === updatedNode.value;
            return {
                ...node,
                checked: node.disabled
                    ? node?.checked
                    : isCurrentNode,
            };
        })
    );
};

export const SELECTION_LIST_UPDATES: SelectionListUpdates = {
    updateState,
};
