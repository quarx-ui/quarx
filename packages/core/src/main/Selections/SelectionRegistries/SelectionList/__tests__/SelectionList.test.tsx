import { fireEvent, render, screen } from '@testing-library/react';
import { testStyleParams } from '@core/test-utils';
import {
    PALETTE_COLORS,
    SELECTION_LIST_TYPE,
    SelectionList,
    SelectionListProps,
    SelectionListStyleParams, SelectionListTypes,
} from '@core';

describe('SelectionList', () => {
    const Text = 'Node';
    const EnabledText = 'EnabledNode';
    const DisabledText = 'DisabledText';
    const DisabledCheckedText = 'DisabledCheckedText';
    const list = [
        { value: 0, title: Text },
        { value: 1, checked: true, title: EnabledText },
        { value: 2, checked: false, disabled: true, title: DisabledText },
        { value: 3, checked: true, disabled: true, title: DisabledCheckedText },
    ];

    describe('styles', () => {
        testStyleParams<SelectionListStyleParams, SelectionListProps>(
            SelectionList,
            {
                size: 'medium',
                color: 'brand',
                type: 'text',
            },
            {
                nodes: list,
                onUpdate: () => list,
            },
        )({
            color: Object.values(PALETTE_COLORS),
            size: ['small', 'medium', 'large'],
            type: Object.values(SELECTION_LIST_TYPE),
        });
    });

    describe('behaviour', () => {
        it('text/children should be in the document', () => {
            render((
                <SelectionList
                    nodes={list}
                    onUpdate={() => list}
                />
            ));
            expect(screen.queryAllByText(Text).length).toBe(1);
        });

        it('should be hidden', () => {
            render((
                <SelectionList
                    hidden
                    nodes={list}
                    onUpdate={() => list}
                />
            ));
            expect(screen.queryAllByText(Text).length).toBe(0);
        });

        const testClickedForType = (type: SelectionListTypes) => {
            it('click by node', async () => {
                const onTestUpdate = jest.fn();
                const { findByText } = render((
                    <SelectionList
                        nodes={list}
                        type={type}
                        onUpdate={onTestUpdate}
                    />
                ));
                const node = await findByText(Text);
                fireEvent.click(node);
                // Именно два, так как еще вызывается первый апдейт установки дефолтных значений (setDefaultValues)
                expect(onTestUpdate).toBeCalledTimes(2);
            });

            it('click by disabled node', async () => {
                const onTestUpdate = jest.fn();
                const { findByText } = render((
                    <SelectionList
                        nodes={list}
                        type={type}
                        onUpdate={onTestUpdate}
                    />
                ));
                const node = await findByText(DisabledText);
                fireEvent.click(node);
                // Именно один, так как в любом случае еще вызывается первый апдейт установки дефолтных значений (setDefaultValues)
                expect(onTestUpdate).toBeCalledTimes(1);
            });
        };

        Object.values(SELECTION_LIST_TYPE).forEach(testClickedForType);
    });
});
