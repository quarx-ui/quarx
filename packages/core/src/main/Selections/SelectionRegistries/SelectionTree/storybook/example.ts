import { SelectionTreeStruct, SelectionTreeNodeStruct } from '@core';

const createDescription = (
    node: SelectionTreeNodeStruct,
): SelectionTreeNodeStruct => ({
    ...node,
    title: `Параметр №${node.value}`,
    description: 'Описание параметра',
});

export const EXAMPLE_TREE: SelectionTreeStruct = [
    createDescription({ value: 1 }),
    createDescription({ value: 2, disabled: true }),
    createDescription({ value: 3, disabled: true, checked: true }),
    createDescription({
        value: 4,
        children: [
            createDescription({
                value: '4.1',
                children: [
                    createDescription({ value: '4.1.1' }),
                    createDescription({ value: '4.1.2' }),
                    createDescription({ value: '4.1.3' }),
                ],
            }),
            createDescription({ value: '4.2' }),
            createDescription({ value: '4.3' }),
            createDescription({
                value: '4.4',
                children: [
                    createDescription({ value: '4.4.1' }),
                    createDescription({ value: '4.4.2' }),
                    createDescription({
                        value: '4.4.3',
                        children: [
                            createDescription({ value: '4.4.3.1' }),
                            createDescription({ value: '4.4.3.2' }),
                            createDescription({ value: '4.4.3.3' }),
                            createDescription({ value: '4.4.3.4' }),
                        ],
                    }),
                ],
            }),
        ],
    }),
    createDescription({
        value: 5,
        children: [
            createDescription({
                value: '5.1',
                disabled: true, // нормализуется самостоятельно
                children: [
                    createDescription({ value: '5.1.1' }),
                    createDescription({ value: '5.1.2' }),
                    createDescription({ value: '5.1.3' }),
                ],
            }),
            createDescription({ value: '5.2' }),
            createDescription({ value: '5.3' }),
            createDescription({
                value: '5.4',
                children: [
                    createDescription({ value: '5.4.1' }),
                    createDescription({ value: '5.4.2' }),
                    createDescription({ value: '5.4.3' }),
                ],
            }),
        ],
    }),
    createDescription({
        value: 6,
        children: [
            createDescription({
                value: '6.1',
                disabled: true, // самостоятельно нормализуется
                children: [
                    createDescription({ value: '6.1.1' }),
                    createDescription({ value: '6.1.2' }),
                    createDescription({ value: '6.1.3', checked: true }),
                ],
            }),
            createDescription({ value: '6.2' }),
            createDescription({ value: '6.3' }),
            createDescription({
                value: '6.4',
                children: [
                    createDescription({ value: '6.4.1' }),
                    createDescription({ value: '6.4.2' }),
                    createDescription({ value: '6.4.3' }),
                ],
            }),
        ],
    }),
    createDescription({
        value: 7,
        checked: true,
        indeterminate: true,
        children: [
            createDescription({
                value: '7.1',
                disabled: true, // самостоятельно нормализуется
                checked: true,
                children: [
                    createDescription({ value: '7.1.1', checked: true }),
                    createDescription({ value: '7.1.2', checked: true }),
                    createDescription({ value: '7.1.3', checked: true }),
                ],
            }),
            createDescription({ value: '7.2' }),
            createDescription({ value: '7.3' }),
            createDescription({
                value: '7.4',
                children: [
                    createDescription({ value: '7.4.1' }),
                    createDescription({ value: '7.4.2' }),
                    createDescription({ value: '7.4.3' }),
                ],
            }),
        ],
    }),
];
