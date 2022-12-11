import {
    isNullOrUndefined,
    SELECTION_TREE_UPDATES,
    SELECTION_TREE_UTILS,
    SelectionRegistryNodeValue,
    SelectionTreeNodeStruct,
    SelectionTreeStruct,
} from '@core';
import { UPDATES_STUB } from './stubs/updates';

describe('updateVisibility', () => {
    const { VISIBILITY_TREE_STUB: { initial } } = UPDATES_STUB;
    const openNode = SELECTION_TREE_UTILS.getNodeByValue(initial, '2.2');
    const closedNode = SELECTION_TREE_UTILS.getNodeByValue(initial, '4.2');

    it('nodes exist', () => {
        expect(openNode).not.toBe(undefined);
        expect(closedNode).not.toBe(undefined);
    });

    if (isNullOrUndefined(openNode) || isNullOrUndefined(closedNode)) {
        return;
    }

    it('without sync', () => {
        const { VISIBILITY_TREE_STUB: { handled } } = UPDATES_STUB;
        const received = SELECTION_TREE_UPDATES.updateVisibility(openNode, initial, false);
        expect(received).toEqual(handled);
    });

    it('open with sync', () => {
        const { VISIBILITY_TREE_STUB: { openWithSync } } = UPDATES_STUB;
        const received = SELECTION_TREE_UPDATES.updateVisibility(closedNode, initial, true);
        expect(received).toEqual(openWithSync);
    });

    it('close with sync', () => {
        const { VISIBILITY_TREE_STUB: { closeWithSync } } = UPDATES_STUB;
        const received = SELECTION_TREE_UPDATES.updateVisibility(openNode, initial, true);
        expect(received).toEqual(closeWithSync);
    });
});

describe('updateState', () => {
    const nodeExists = (
        node?: SelectionTreeNodeStruct,
    ): node is SelectionTreeNodeStruct => {
        if (!isNullOrUndefined(node)) {
            return true;
        }

        it('node exists', () => {
            expect(node).not.toBe(undefined);
        });

        return false;
    };

    const testIt = (
        testName: string,
        initial: SelectionTreeStruct,
        expected: SelectionTreeStruct,
        nodeValue: SelectionRegistryNodeValue,
    ) => {
        // eslint-disable-next-line jest/valid-title
        it(testName, () => {
            const node = SELECTION_TREE_UTILS.getNodeByValue(initial, nodeValue);
            if (!nodeExists(node)) { return; }
            const received = SELECTION_TREE_UPDATES.updateState(node, initial);
            expect(received).toEqual(expected);
        });
    };

    describe('work without disabled', () => {
        const {
            UPDATE_TREE_STATE_STUB: {
                workWithoutDisabled: {
                    toCheckedTopLevelNode,
                    toUncheckedTopLevelNode,
                    toCheckedMiddleLevelNode,
                    toUncheckedMiddleLevelNode,
                    toCheckedBottomLevelNode,
                    toUncheckedBottomLevelNode,
                    toAllCheckedFromMiddleLevelNode,
                    tryToResetAll,
                    tryToSelectAll,
                },
            },
        } = UPDATES_STUB;

        testIt(
            'to checked top level node',
            toCheckedTopLevelNode.initial,
            toCheckedTopLevelNode.expected,
            1,
        );
        testIt(
            'to unchecked top level node',
            toUncheckedTopLevelNode.initial,
            toUncheckedTopLevelNode.expected,
            1,
        );
        testIt(
            'to checked middle level node',
            toCheckedMiddleLevelNode.initial,
            toCheckedMiddleLevelNode.expected,
            '2.2',
        );
        testIt(
            'to unchecked middle level node',
            toUncheckedMiddleLevelNode.initial,
            toUncheckedMiddleLevelNode.expected,
            '2.2',
        );
        testIt(
            'to checked bottom level node',
            toCheckedBottomLevelNode.initial,
            toCheckedBottomLevelNode.expected,
            '2.2.2',
        );
        testIt(
            'to unchecked bottom level node',
            toUncheckedBottomLevelNode.initial,
            toUncheckedBottomLevelNode.expected,
            '2.2.2',
        );
        testIt(
            'to all checked from middle-level',
            toAllCheckedFromMiddleLevelNode.initial,
            toAllCheckedFromMiddleLevelNode.expected,
            '1.3',
        );
        testIt(
            'tryToResetAll',
            tryToResetAll.initial,
            tryToResetAll.expected,
            1,
        );
        testIt(
            'tryToSelectAll',
            tryToSelectAll.initial,
            tryToSelectAll.expected,
            1,
        );
    });

    describe('work with disabled', () => {
        describe('simple tests', () => {
            const {
                UPDATE_TREE_STATE_STUB: {
                    workWithDisabled: {
                        toCheckedDisabledTopLevelNode,
                        toUncheckedDisabledTopLevelNode,
                    },
                },
            } = UPDATES_STUB;
            testIt(
                'to checked disabled top level node',
                toCheckedDisabledTopLevelNode.tree,
                toCheckedDisabledTopLevelNode.tree,
                1,
            );
            testIt(
                'to unchecked disabled top level node',
                toUncheckedDisabledTopLevelNode.tree,
                toUncheckedDisabledTopLevelNode.tree,
                1,
            );
        });

        describe('NONE disabled children: { checked: true }', () => {
            const {
                UPDATE_TREE_STATE_STUB: {
                    workWithDisabled: {
                        noneDisabledChecked: {
                            toIndeterminate,
                            trySelectAll,
                            tryToReset,
                        },
                    },
                },
            } = UPDATES_STUB;
            testIt('toIndeterminate', toIndeterminate.initial, toIndeterminate.expected, '1.1');
            testIt('trySelectAll', trySelectAll.initial, trySelectAll.expected, 1);
            testIt('tryToReset', tryToReset.initial, tryToReset.expected, 1);
        });

        describe('SOME disabled children: { checked: true }', () => {
            const {
                UPDATE_TREE_STATE_STUB: {
                    workWithDisabled: {
                        someDisabledChecked: {
                            toIndeterminate,
                            trySelectAll,
                            tryToReset,
                        },
                    },
                },
            } = UPDATES_STUB;
            testIt('toIndeterminate', toIndeterminate.initial, toIndeterminate.expected, '1.1');
            testIt('trySelectAll', trySelectAll.initial, trySelectAll.expected, 1);
            testIt('tryToReset', tryToReset.initial, tryToReset.expected, 1);
        });

        describe('ALL disabled children: { checked: true }', () => {
            const {
                UPDATE_TREE_STATE_STUB: {
                    workWithDisabled: {
                        allDisabledChecked: {
                            toIndeterminate,
                            trySelectAll,
                            tryToReset,
                        },
                    },
                },
            } = UPDATES_STUB;
            testIt('toIndeterminate', toIndeterminate.initial, toIndeterminate.expected, '1.1');
            testIt('trySelectAll', trySelectAll.initial, trySelectAll.expected, 1);
            testIt('tryToReset', tryToReset.initial, tryToReset.expected, 1);
        });
    });
});
