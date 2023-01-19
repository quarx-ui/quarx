import { fireEvent, render } from '@testing-library/react';
import { testStyleParams } from '@core/test-utils';
import {
    PALETTE_COLORS,
    SELECTION_TREE_TYPE,
    SelectionTree,
    SelectionTreeProps,
    SelectionTreeStruct,
    SelectionTreeStyleParams,
    SelectionTreeTypes,
} from '@core';

describe('SelectionTree', () => {
    const TestText = 'EnabledNode';
    const TestDisabledText = 'DisabledNode';
    const Text = 'Node';
    const example: SelectionTreeStruct = [
        { value: 1, title: TestText },
        { value: 2, title: Text, checked: true },
        { value: 3, title: Text, disabled: true },
        { value: 4, title: Text, disabled: true, checked: true },
        {
            value: 5,
            checked: true,
            indeterminate: true,
            title: Text,
            open: true,
            children: [
                { value: '5.1', title: Text },
                { value: '5.2', title: Text },
                { value: '5.3', title: TestDisabledText, disabled: true, checked: true },
            ],
        },
    ];

    describe('styles', () => {
        testStyleParams<SelectionTreeStyleParams, SelectionTreeProps>(
            SelectionTree,
            {
                size: 'medium',
                color: 'brand',
                type: 'text',
            },
            {
                nodes: example,
                onUpdate: () => example,
            },
        )({
            color: Object.values(PALETTE_COLORS),
            size: ['small', 'medium', 'large'],
            type: Object.values(SELECTION_TREE_TYPE),
        });
    });

    it('should be hidden', async () => {
        const { asFragment } = render((
            <SelectionTree
                hidden
                nodes={example}
                onUpdate={() => undefined}
            />
        ));
        const DOMnodes = asFragment().querySelectorAll('input');
        expect(DOMnodes.length).toBe(0);
    });

    it('visual', async () => {
        const { asFragment } = render((
            <SelectionTree
                nodes={example}
                onUpdate={() => undefined}
            />
        ));
        const DOMnodes = asFragment().querySelectorAll('input');
        expect(DOMnodes.length).toBe(8);
    });

    const testClickedForType = (type: SelectionTreeTypes) => {
        it(`${type}: click by node`, async () => {
            const onTestUpdate = jest.fn();
            const { findByText } = render((
                <SelectionTree
                    nodes={example}
                    type={type}
                    onUpdate={onTestUpdate}
                />
            ));
            const node = await findByText(TestText);
            fireEvent.click(node);
            // Именно два, так как еще вызывается первый апдейт установки дефолтных значений (setDefaultValues)
            expect(onTestUpdate).toBeCalledTimes(2);
        });

        it(`${type}: click by disabled node`, async () => {
            const onTestUpdate = jest.fn();
            const { findByText } = render((
                <SelectionTree
                    nodes={example}
                    type={type}
                    onUpdate={onTestUpdate}
                />
            ));
            const node = await findByText(TestDisabledText);
            fireEvent.click(node);
            // Именно один, так как в любом случае еще вызывается первый апдейт установки дефолтных значений (setDefaultValues)
            expect(onTestUpdate).toBeCalledTimes(1);
        });
    };

    Object.values(SELECTION_TREE_TYPE).forEach(testClickedForType);
});
