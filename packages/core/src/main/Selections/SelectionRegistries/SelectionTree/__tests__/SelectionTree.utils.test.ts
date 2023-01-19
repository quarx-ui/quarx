import { SelectionRegistryNodeValue } from '@core';
import { SelectionTreeNodeStruct } from '../utils/types';
import { SELECTION_TREE_UTILS } from '../utils/utils';
import { UTILS_STUBS } from './stubs/utils';

describe('deepForEachNodes', () => {
    it('callback executions count', () => {
        const callback = jest.fn();

        SELECTION_TREE_UTILS.deepForEachNodes(
            UTILS_STUBS.SIMPLE_TREE,
            callback,
        );

        expect(callback).toBeCalledTimes(16);
    });

    it('calling nodes order', () => {
        const order: SelectionRegistryNodeValue[] = [];
        const callback = (node: SelectionTreeNodeStruct) => (
            order.push(node.value)
        );

        SELECTION_TREE_UTILS.deepForEachNodes(
            UTILS_STUBS.SIMPLE_TREE,
            callback,
        );

        // Дерево должно выполнять обратный вызов с конца ветвей
        expect(order).toEqual(UTILS_STUBS.CALLING_SIMPLE_TREE_NODES_ORDER);
    });
});

describe('deepMapNodes', () => {
    it('callback executions count', () => {
        const callback = jest.fn();

        SELECTION_TREE_UTILS.deepMapNodes(
            UTILS_STUBS.SIMPLE_TREE,
            callback,
        );

        expect(callback).toBeCalledTimes(16);
    });

    it('calling nodes order', () => {
        const order: SelectionRegistryNodeValue[] = [];
        const callback = (
            node: SelectionTreeNodeStruct,
        ): SelectionTreeNodeStruct => {
            order.push(node.value);
            return node;
        };

        SELECTION_TREE_UTILS.deepMapNodes(
            UTILS_STUBS.SIMPLE_TREE,
            callback,
        );

        // Дерево должно выполнять обратный вызов с конца ветвей
        expect(order).toEqual(UTILS_STUBS.CALLING_SIMPLE_TREE_NODES_ORDER);
    });

    it('return of the processed tree', () => {
        const callback = (
            node: SelectionTreeNodeStruct,
        ): SelectionTreeNodeStruct => ({ ...node, checked: true });

        const received = SELECTION_TREE_UTILS.deepMapNodes(
            UTILS_STUBS.SIMPLE_TREE,
            callback,
        );

        expect(received).toEqual(UTILS_STUBS.CHECKED_SIMPLE_TREE);
    });
});

describe('getNodeByValue', () => {
    it('get a top-level node', () => {
        const received = SELECTION_TREE_UTILS.getNodeByValue(
            UTILS_STUBS.SIMPLE_TREE,
            2,
        );
        expect(received).toEqual({ value: 2 });
    });

    it('get a middle-level node', () => {
        const received = SELECTION_TREE_UTILS.getNodeByValue(
            UTILS_STUBS.SIMPLE_TREE,
            '3.3',
        );
        const expected = {
            value: '3.3',
            children: [
                { value: '3.3.1' },
                { value: '3.3.2' },
                {
                    value: '3.3.3',
                    children: [{ value: '3.3.3.1' }],
                },
                { value: '3.3.4' },
            ],
        };

        expect(received).toEqual(expected);
    });

    it('get a bottom-level node', () => {
        const received = SELECTION_TREE_UTILS.getNodeByValue(
            UTILS_STUBS.SIMPLE_TREE,
            '3.3.3.1',
        );
        expect(received).toEqual({ value: '3.3.3.1' });
    });
});

describe('checkValuesUniqueness', () => {
    it('all keys are unique', () => {
        const received = SELECTION_TREE_UTILS
            .checkValuesUniqueness(UTILS_STUBS.SIMPLE_TREE);
        expect(received).toBe(true);
    });

    it('identical keys on the same level', () => {
        const received = SELECTION_TREE_UTILS
            .checkValuesUniqueness(UTILS_STUBS.IDENTICAL_SAME_TREE_LEVEL_KEYS);
        expect(received).toEqual(false);
    });

    it('identical keys at different levels', () => {
        const received = SELECTION_TREE_UTILS
            .checkValuesUniqueness(UTILS_STUBS.IDENTICAL_DIFFERENT_TREE_LEVELS_KEYS);
        expect(received).toEqual(false);
    });
});

// Открывает только узлы, которые имеют детей.
it('open all', () => {
    const received = SELECTION_TREE_UTILS.openAll(UTILS_STUBS.CLOSED_TREE);
    expect(received).toEqual(UTILS_STUBS.OPENED_TREE);
});

// Закрывает только узлы, которые имеют детей.
it('close all', () => {
    const received = SELECTION_TREE_UTILS.closeAll(UTILS_STUBS.OPENED_TREE);
    expect(received).toEqual(UTILS_STUBS.CLOSED_TREE);
});

describe('indeterminate', () => {
    it('getIndeterminateNodes', () => {
        const received = SELECTION_TREE_UTILS
            .getIndeterminateNodes(UTILS_STUBS.INDETERMINATE_NODES_TREE);
        expect(received).toEqual(UTILS_STUBS.INDETERMINATE_NODES);
    });

    it('getIndeterminateValues', () => {
        const received = SELECTION_TREE_UTILS
            .getIndeterminateValues(UTILS_STUBS.INDETERMINATE_NODES_TREE);
        expect(received).toEqual(UTILS_STUBS.INDETERMINATE_VALUES);
    });

    describe('isIndeterminateNodeByChildren', () => {
        it('found', () => {
            const received = SELECTION_TREE_UTILS
                .isIndeterminateNodeByChildren(UTILS_STUBS.INDETERMINATE_NODES_TREE);
            expect(received).toBe(true);
        });

        it('not found', () => {
            const received = SELECTION_TREE_UTILS
                .isIndeterminateNodeByChildren(UTILS_STUBS.SIMPLE_TREE);
            expect(received).toBe(false);
        });
    });
});

describe('checked', () => {
    describe('getCheckedNodes', () => {
        it('omit indeterminate', () => {
            const received = SELECTION_TREE_UTILS.getCheckedNodes(
                UTILS_STUBS.PARTIALLY_CHECKED_TREE.tree,
                true,
            );
            expect(received).toEqual(UTILS_STUBS.PARTIALLY_CHECKED_TREE.checked);
        });

        it('don\'t omit indeterminate', () => {
            const received = SELECTION_TREE_UTILS.getCheckedNodes(
                UTILS_STUBS.PARTIALLY_CHECKED_TREE.tree,
                false,
            );
            expect(received).toEqual(UTILS_STUBS.PARTIALLY_CHECKED_TREE.withIndeterminate);
        });
    });

    describe('getCheckedValues', () => {
        it('omit indeterminate', () => {
            const received = SELECTION_TREE_UTILS.getCheckedValues(
                UTILS_STUBS.PARTIALLY_CHECKED_TREE.tree,
                true,
            );
            expect(received)
                .toEqual(UTILS_STUBS.PARTIALLY_CHECKED_TREE.checkedValues);
        });

        it('don\'t omit indeterminate', () => {
            const received = SELECTION_TREE_UTILS.getCheckedValues(
                UTILS_STUBS.PARTIALLY_CHECKED_TREE.tree,
                false,
            );
            expect(received)
                .toEqual(UTILS_STUBS.PARTIALLY_CHECKED_TREE.withIndeterminateValues);
        });
    });

    describe('isCheckedNodeByChildren', () => {
        it('found', () => {
            const received = SELECTION_TREE_UTILS
                .isCheckedNodeByChildren(UTILS_STUBS.PARTIALLY_CHECKED_TREE.checked);
            expect(received).toEqual(true);
        });

        it('not found', () => {
            const received = SELECTION_TREE_UTILS
                .isCheckedNodeByChildren(UTILS_STUBS.SIMPLE_TREE);
            expect(received).toEqual(false);
        });
    });
});

describe('resetAll', () => {
    it('don`t omit disabled', () => {
        const { RESET_STUB_TREE: { initial, handled } } = UTILS_STUBS;
        const received = SELECTION_TREE_UTILS.resetAll(initial, false);
        expect(received).toEqual(handled);
    });

    it('omit disabled', () => {
        const { RESET_STUB_TREE: { initial, handledWithOmitDisabled } } = UTILS_STUBS;
        const received = SELECTION_TREE_UTILS.resetAll(initial, true);
        expect(received).toEqual(handledWithOmitDisabled);
    });
});

describe('selectAll', () => {
    it('don`t omit disabled', () => {
        const { SELECT_ALL_STUB_TREE: { initial, handled } } = UTILS_STUBS;
        const received = SELECTION_TREE_UTILS.selectAll(initial, false);
        expect(received).toEqual(handled);
    });

    it('omit disabled', () => {
        const { SELECT_ALL_STUB_TREE: { initial, handledWithOmitDisabled } } = UTILS_STUBS;
        const received = SELECTION_TREE_UTILS.selectAll(initial, true);
        expect(received).toEqual(handledWithOmitDisabled);
    });
});

describe('setDefaultValues', () => {
    it('without normalize', () => {
        const { NORMALIZED_TREE_STUB: { initial, withoutNormalize } } = UTILS_STUBS;
        const received = SELECTION_TREE_UTILS.setDefaultValues(initial, false);
        expect(received).toEqual(withoutNormalize);
    });

    it('with normalize', () => {
        const { NORMALIZED_TREE_STUB: { initial, handled } } = UTILS_STUBS;
        const received = SELECTION_TREE_UTILS.setDefaultValues(initial);
        expect(received).toEqual(handled);
    });
});
