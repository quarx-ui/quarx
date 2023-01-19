import { SelectionRegistryNodeValue, SelectionTreeNodeStruct, SelectionTreeStruct } from '@core';

const SIMPLE_TREE: SelectionTreeStruct = [
    { value: 1 },
    { value: 2 },
    {
        value: 3,
        children: [
            { value: '3.1' },
            { value: '3.2' },
            {
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
            },
            { value: '3.4' },
        ],
    },
    { value: 4 },
    {
        value: 5,
        children: [
            { value: '5.1' },
            { value: '5.2' },
        ],
    },
];

const CALLING_SIMPLE_TREE_NODES_ORDER: SelectionRegistryNodeValue[] = [
    1,
    2,
    '3.1', '3.2',
    '3.3.1', '3.3.2', '3.3.3.1', '3.3.3', '3.3.4', '3.3',
    '3.4', 3,
    4,
    '5.1', '5.2', 5,
];

const CHECKED_SIMPLE_TREE: SelectionTreeStruct = [
    { value: 1, checked: true },
    { value: 2, checked: true },
    {
        value: 3,
        checked: true,
        children: [
            { value: '3.1', checked: true },
            { value: '3.2', checked: true },
            {
                value: '3.3',
                checked: true,
                children: [
                    { value: '3.3.1', checked: true },
                    { value: '3.3.2', checked: true },
                    {
                        value: '3.3.3',
                        checked: true,
                        children: [{ value: '3.3.3.1', checked: true }],
                    },
                    { value: '3.3.4', checked: true },
                ],
            },
            { value: '3.4', checked: true },
        ],
    },
    { value: 4, checked: true },
    {
        value: 5,
        checked: true,
        children: [
            { value: '5.1', checked: true },
            { value: '5.2', checked: true },
        ],
    },
];

const IDENTICAL_SAME_TREE_LEVEL_KEYS: SelectionTreeStruct = [
    { value: 1 },
    {
        value: 2,
        children: [
            { value: '2.2' },
            { value: '2.2' },
        ],
    },
    { value: 3 },
];

const IDENTICAL_DIFFERENT_TREE_LEVELS_KEYS: SelectionTreeStruct = [
    { value: '2.2' },
    {
        value: 2,
        children: [
            { value: '2.1' },
            { value: '2.2' },
        ],
    },
    { value: 3 },
];

const CLOSED_TREE: SelectionTreeStruct = [
    { value: 1 },
    { value: 2 },
    {
        value: 3,
        open: false,
        children: [
            { value: '3.1' },
            { value: '3.2' },
            {
                value: '3.3',
                disabled: true,
                open: false,
                children: [
                    { value: '3.3.1', disabled: true },
                    { value: '3.3.2', disabled: true },
                    {
                        value: '3.3.3',
                        open: false,
                        disabled: true,
                        children: [{ value: '3.3.3.1', disabled: true }],
                    },
                    { value: '3.3.4', disabled: true },
                ],
            },
            { value: '3.4' },
        ],
    },
    { value: 4 },
    {
        value: 5,
        open: false,
        children: [
            { value: '5.1' },
            { value: '5.2' },
        ],
    },
];

const OPENED_TREE: SelectionTreeStruct = [
    { value: 1 },
    { value: 2 },
    {
        value: 3,
        open: true,
        children: [
            { value: '3.1' },
            { value: '3.2' },
            {
                value: '3.3',
                disabled: true,
                open: true,
                children: [
                    { value: '3.3.1', disabled: true },
                    { value: '3.3.2', disabled: true },
                    {
                        value: '3.3.3',
                        open: true,
                        disabled: true,
                        children: [{ value: '3.3.3.1', disabled: true }],
                    },
                    { value: '3.3.4', disabled: true },
                ],
            },
            { value: '3.4' },
        ],
    },
    { value: 4 },
    {
        value: 5,
        open: true,
        children: [
            { value: '5.1' },
            { value: '5.2' },
        ],
    },
];

const INDETERMINATE_NODES_TREE: SelectionTreeStruct = [
    { value: 1 },
    {
        value: 2,
        checked: true,
        indeterminate: true,
        children: [
            {
                value: '2.2',
                checked: true,
                indeterminate: true,
                children: [
                    { value: '2.2.1' },
                    { value: '2.2.2' },
                    {
                        value: '2.2.3',
                        checked: true,
                    },
                ],
            },
            {
                value: '2.3',
                children: [
                    { value: '2.3.1' },
                    { value: '2.3.2' },
                    { value: '2.3.3' },
                ],
            },
            { value: '2.4' },
        ],
    },
    { value: 3 },
    { value: 4 },
];

const INDETERMINATE_NODES: SelectionTreeNodeStruct[] = [
    {
        value: '2.2',
        checked: true,
        indeterminate: true,
        children: [
            { value: '2.2.1' },
            { value: '2.2.2' },
            {
                value: '2.2.3',
                checked: true,
            },
        ],
    },
    {
        value: 2,
        checked: true,
        indeterminate: true,
        children: [
            {
                value: '2.2',
                checked: true,
                indeterminate: true,
                children: [
                    { value: '2.2.1' },
                    { value: '2.2.2' },
                    {
                        value: '2.2.3',
                        checked: true,
                    },
                ],
            },
            {
                value: '2.3',
                children: [
                    { value: '2.3.1' },
                    { value: '2.3.2' },
                    { value: '2.3.3' },
                ],
            },
            { value: '2.4' },
        ],
    },
];

const INDETERMINATE_VALUES: SelectionRegistryNodeValue[] = ['2.2', 2];

const PARTIALLY_CHECKED_TREE = {
    tree: <SelectionTreeStruct>[
        { value: 1 },
        {
            value: 2,
            checked: true,
            indeterminate: true,
            children: [
                {
                    value: '2.2',
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '2.2.1' },
                        { value: '2.2.2' },
                        { value: '2.2.3', checked: true },
                    ],
                },
                {
                    value: '2.3',
                    children: [
                        { value: '2.3.1', checked: true },
                        { value: '2.3.2' },
                        { value: '2.3.3' },
                    ],
                },
                { value: '2.4', checked: true },
            ],
        },
        { value: 3, checked: true, disabled: true },
        { value: 4 },
    ],
    checked: <SelectionTreeNodeStruct[]>[
        { value: '2.2.3', checked: true },
        { value: '2.3.1', checked: true },
        { value: '2.4', checked: true },
        { value: 3, checked: true, disabled: true },
    ],
    withIndeterminate: <SelectionTreeNodeStruct[]>[
        { value: '2.2.3', checked: true },
        {
            value: '2.2',
            checked: true,
            indeterminate: true,
            children: [{ value: '2.2.1' }, { value: '2.2.2' }, { value: '2.2.3', checked: true }],
        },
        { value: '2.3.1', checked: true },
        { value: '2.4', checked: true },
        {
            value: 2,
            checked: true,
            indeterminate: true,
            children: [
                {
                    value: '2.2',
                    checked: true,
                    indeterminate: true,
                    children: [{ value: '2.2.1' }, { value: '2.2.2' }, { value: '2.2.3', checked: true }],
                },
                {
                    value: '2.3',
                    children: [{ value: '2.3.1', checked: true }, { value: '2.3.2' }, { value: '2.3.3' }],
                },
                { value: '2.4', checked: true },
            ],
        },
        { value: 3, checked: true, disabled: true },
    ],
    checkedValues: <SelectionRegistryNodeValue[]>['2.2.3', '2.3.1', '2.4', 3],
    withIndeterminateValues: <SelectionRegistryNodeValue[]>['2.2.3', '2.2', '2.3.1', '2.4', 2, 3],
};

const RESET_STUB_TREE = {
    initial: <SelectionTreeStruct>[
        { value: 1, checked: true },
        {
            value: 2,
            checked: true,
            indeterminate: true,
            children: [
                { value: '2.1' },
                { value: '2.2' },
                {
                    value: '2.3',
                    checked: true,
                    children: [
                        { value: '2.3.1', checked: true },
                        { value: '2.3.2', checked: true },
                    ],
                },
                { value: '2.4' },
            ],
        },
        {
            value: 3,
            checked: true,
            indeterminate: true,
            children: [
                {
                    value: '3.1',
                    disabled: true,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '3.1.1', checked: true, disabled: true },
                        { value: '3.1.2', disabled: true },
                    ],
                },
                { value: '3.2' },
            ],
        },
        { value: 4 },
    ],
    handled: <SelectionTreeStruct>[
        { value: 1, checked: false, indeterminate: false },
        {
            value: 2,
            checked: false,
            indeterminate: false,
            children: [
                { value: '2.1', checked: false, indeterminate: false },
                { value: '2.2', checked: false, indeterminate: false },
                {
                    value: '2.3',
                    checked: false,
                    indeterminate: false,
                    children: [
                        { value: '2.3.1', checked: false, indeterminate: false },
                        { value: '2.3.2', checked: false, indeterminate: false },
                    ],
                },
                { value: '2.4', checked: false, indeterminate: false },
            ],
        },
        {
            value: 3,
            checked: true,
            indeterminate: true,
            children: [
                {
                    value: '3.1',
                    disabled: true,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '3.1.1', checked: true, disabled: true },
                        { value: '3.1.2', disabled: true },
                    ],
                },
                { value: '3.2', checked: false, indeterminate: false },
            ],
        },
        { value: 4, checked: false, indeterminate: false },
    ],
    handledWithOmitDisabled: <SelectionTreeStruct>[
        { value: 1, checked: false, indeterminate: false },
        {
            value: 2,
            checked: false,
            indeterminate: false,
            children: [
                { value: '2.1', checked: false, indeterminate: false },
                { value: '2.2', checked: false, indeterminate: false },
                {
                    value: '2.3',
                    checked: false,
                    indeterminate: false,
                    children: [
                        { value: '2.3.1', checked: false, indeterminate: false },
                        { value: '2.3.2', checked: false, indeterminate: false },
                    ],
                },
                { value: '2.4', checked: false, indeterminate: false },
            ],
        },
        {
            value: 3,
            checked: false,
            indeterminate: false,
            children: [
                {
                    value: '3.1',
                    disabled: true,
                    checked: false,
                    indeterminate: false,
                    children: [
                        { value: '3.1.1', checked: false, indeterminate: false, disabled: true },
                        { value: '3.1.2', checked: false, indeterminate: false, disabled: true },
                    ],
                },
                { value: '3.2', checked: false, indeterminate: false },
            ],
        },
        { value: 4, checked: false, indeterminate: false },
    ],
};

const SELECT_ALL_STUB_TREE = {
    initial: <SelectionTreeStruct>[
        { value: 1, checked: true },
        {
            value: 2,
            checked: true,
            indeterminate: true,
            children: [
                { value: '2.1' },
                { value: '2.2' },
                {
                    value: '2.3',
                    checked: true,
                    children: [
                        { value: '2.3.1', checked: true },
                        { value: '2.3.2', checked: true },
                    ],
                },
                { value: '2.4' },
            ],
        },
        {
            value: 3,
            checked: true,
            indeterminate: true,
            children: [
                {
                    value: '3.1',
                    disabled: true,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '3.1.1', checked: true, disabled: true },
                        { value: '3.1.2', disabled: true },
                    ],
                },
                { value: '3.2' },
            ],
        },
        { value: 4 },
    ],
    handled: <SelectionTreeStruct>[
        { value: 1, checked: true, indeterminate: false },
        {
            value: 2,
            checked: true,
            indeterminate: false,
            children: [
                { value: '2.1', checked: true, indeterminate: false },
                { value: '2.2', checked: true, indeterminate: false },
                {
                    value: '2.3',
                    checked: true,
                    indeterminate: false,
                    children: [
                        { value: '2.3.1', checked: true, indeterminate: false },
                        { value: '2.3.2', checked: true, indeterminate: false },
                    ],
                },
                { value: '2.4', checked: true, indeterminate: false },
            ],
        },
        {
            value: 3,
            checked: true,
            indeterminate: true,
            children: [
                {
                    value: '3.1',
                    disabled: true,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '3.1.1', checked: true, disabled: true },
                        { value: '3.1.2', disabled: true },
                    ],
                },
                { value: '3.2', checked: true, indeterminate: false },
            ],
        },
        { value: 4, checked: true, indeterminate: false },
    ],
    handledWithOmitDisabled: <SelectionTreeStruct>[
        { value: 1, checked: true, indeterminate: false },
        {
            value: 2,
            checked: true,
            indeterminate: false,
            children: [
                { value: '2.1', checked: true, indeterminate: false },
                { value: '2.2', checked: true, indeterminate: false },
                {
                    value: '2.3',
                    checked: true,
                    indeterminate: false,
                    children: [
                        { value: '2.3.1', checked: true, indeterminate: false },
                        { value: '2.3.2', checked: true, indeterminate: false },
                    ],
                },
                { value: '2.4', checked: true, indeterminate: false },
            ],
        },
        {
            value: 3,
            checked: true,
            indeterminate: false,
            children: [
                {
                    value: '3.1',
                    disabled: true,
                    checked: true,
                    indeterminate: false,
                    children: [
                        { value: '3.1.1', checked: true, indeterminate: false, disabled: true },
                        { value: '3.1.2', checked: true, indeterminate: false, disabled: true },
                    ],
                },
                { value: '3.2', checked: true, indeterminate: false },
            ],
        },
        { value: 4, checked: true, indeterminate: false },
    ],
};

const DEFAULT_VALS = {
    checked: false,
    indeterminate: false,
    open: false,
    disabled: false,
};
const wD = (node: SelectionTreeNodeStruct): SelectionTreeNodeStruct => ({
    ...DEFAULT_VALS,
    ...node,
});
const NORMALIZED_TREE_STUB = {
    initial: <SelectionTreeStruct>[
        // check top-level without children
        { value: 1 },
        { value: 2, indeterminate: true },
        { value: 3, checked: true },
        { value: 4, open: true },
        { value: 5, disabled: true, indeterminate: true },
        { value: 6, disabled: true, checked: true },

        // check bottom-level without children
        {
            value: 7,
            children: [
                { value: '7.1' },
                {
                    value: '7.2',
                    children: [
                        { value: '7.2.1' },
                        { value: '7.2.2', indeterminate: true },
                        { value: '7.2.3', checked: true },
                        { value: '7.2.4', open: true },
                        { value: '7.2.5', disabled: true, indeterminate: true },
                        { value: '7.2.6', disabled: true, checked: true },
                    ],
                },
            ],
        },

        // check disabled normalize
        {
            value: 8,
            disabled: true,
            children: [
                { value: '8.1' },
                { value: '8.2' },
            ],
        },
        {
            value: 9,
            children: [
                { value: '9.1' },
                { value: '9.2' },
                {
                    value: '9.3',
                    disabled: true,
                    children: [
                        { value: '9.3.1' },
                        {
                            value: '9.3.2',
                            children: [{ value: '9.3.2.1' }],
                        },
                        { value: '9.3.3' },
                    ],
                },
            ],
        },

        // check checked & children & !disabled
        {
            value: 10,
            children: [
                { value: '10.1' },
                {
                    value: '10.2',
                    indeterminate: true,
                    children: [
                        { value: '10.2.1' },
                        {
                            value: '10.2.2',
                            children: [
                                { value: '10.2.2.1' },
                                { value: '10.2.2.2' },
                            ],
                        },
                    ],
                },
                { value: '10.3' },
            ],
        },
        {
            value: 11,
            children: [
                { value: '11.1' },
                {
                    value: '11.2',
                    checked: true,
                    children: [
                        { value: '11.2.1' },
                        {
                            value: '11.2.2',
                            children: [
                                { value: '11.2.2.1' },
                                { value: '11.2.2.2' },
                            ],
                        },
                    ],
                },
                { value: '11.3' },
            ],
        },

        // check checked & children & disabled
        {
            value: 10,
            children: [
                { value: '10.1' },
                {
                    value: '10.2',
                    indeterminate: true,
                    children: [
                        { value: '10.2.1', disabled: true },
                        {
                            value: '10.2.2',
                            children: [
                                { value: '10.2.2.1' },
                                { value: '10.2.2.2' },
                            ],
                        },
                    ],
                },
                { value: '10.3' },
            ],
        },
        {
            value: 11,
            children: [
                { value: '11.1' },
                {
                    value: '11.2',
                    checked: true,
                    children: [
                        { value: '11.2.1', disabled: true, indeterminate: true },
                        {
                            value: '11.2.2',
                            children: [
                                { value: '11.2.2.1' },
                                { value: '11.2.2.2' },
                            ],
                        },
                    ],
                },
                { value: '11.3' },
            ],
        },
    ],
    handled: <SelectionTreeStruct>[
        // check top-level without children
        wD({ value: 1 }),
        wD({ value: 2 }),
        wD({ value: 3, checked: true }),
        wD({ value: 4, open: true }),
        wD({ value: 5, disabled: true }),
        wD({ value: 6, disabled: true, checked: true }),

        // check bottom-level without children
        wD({
            value: 7,
            checked: true,
            indeterminate: true,
            children: [
                wD({ value: '7.1' }),
                wD({
                    value: '7.2',
                    checked: true,
                    indeterminate: true,
                    children: [
                        wD({ value: '7.2.1' }),
                        wD({ value: '7.2.2' }),
                        wD({ value: '7.2.3', checked: true }),
                        wD({ value: '7.2.4', open: true }),
                        wD({ value: '7.2.5', disabled: true }),
                        wD({ value: '7.2.6', disabled: true, checked: true }),
                    ],
                }),
            ],
        }),

        // check disabled normalize
        wD({
            value: 8,
            disabled: true,
            children: [
                wD({ value: '8.1', disabled: true }),
                wD({ value: '8.2', disabled: true }),
            ],
        }),
        wD({
            value: 9,
            children: [
                wD({ value: '9.1' }),
                wD({ value: '9.2' }),
                wD({
                    value: '9.3',
                    disabled: true,
                    children: [
                        wD({ value: '9.3.1', disabled: true }),
                        wD({
                            value: '9.3.2',
                            disabled: true,
                            children: [wD({ value: '9.3.2.1', disabled: true })],
                        }),
                        wD({ value: '9.3.3', disabled: true }),
                    ],
                }),
            ],
        }),

        // check checked & children & !disabled
        wD({
            value: 10,
            children: [
                wD({ value: '10.1' }),
                wD({
                    value: '10.2',
                    children: [
                        wD({ value: '10.2.1' }),
                        wD({
                            value: '10.2.2',
                            children: [
                                wD({ value: '10.2.2.1' }),
                                wD({ value: '10.2.2.2' }),
                            ],
                        }),
                    ],
                }),
                wD({ value: '10.3' }),
            ],
        }),
        wD({
            value: 11,
            checked: true,
            indeterminate: true,
            children: [
                wD({ value: '11.1' }),
                wD({
                    value: '11.2',
                    checked: true,
                    children: [
                        wD({ value: '11.2.1', checked: true }),
                        wD({
                            value: '11.2.2',
                            checked: true,
                            children: [
                                wD({ value: '11.2.2.1', checked: true }),
                                wD({ value: '11.2.2.2', checked: true }),
                            ],
                        }),
                    ],
                }),
                wD({ value: '11.3' }),
            ],
        }),

        // check checked & children & disabled
        wD({
            value: 10,
            children: [
                wD({ value: '10.1' }),
                wD({
                    value: '10.2',
                    children: [
                        wD({
                            value: '10.2.1',
                            disabled: true,
                        }),
                        wD({
                            value: '10.2.2',
                            children: [
                                wD({ value: '10.2.2.1' }),
                                wD({ value: '10.2.2.2' }),
                            ],
                        }),
                    ],
                }),
                wD({ value: '10.3' }),
            ],
        }),
        wD({
            value: 11,
            checked: true,
            indeterminate: true,
            children: [
                wD({ value: '11.1' }),
                wD({
                    value: '11.2',
                    checked: true,
                    indeterminate: false,
                    children: [
                        wD({
                            value: '11.2.1',
                            disabled: true,
                            checked: true,
                        }),
                        wD({
                            value: '11.2.2',
                            checked: true,
                            children: [
                                wD({ value: '11.2.2.1', checked: true }),
                                wD({ value: '11.2.2.2', checked: true }),
                            ],
                        }),
                    ],
                }),
                wD({ value: '11.3' }),
            ],
        }),
    ],
    withoutNormalize: <SelectionTreeStruct>[
        // check top-level without children
        wD({ value: 1 }),
        wD({ value: 2, indeterminate: true }),
        wD({ value: 3, checked: true }),
        wD({ value: 4, open: true }),
        wD({ value: 5, disabled: true, indeterminate: true }),
        wD({ value: 6, disabled: true, checked: true }),

        // check bottom-level without children
        wD({
            value: 7,
            children: [
                wD({ value: '7.1' }),
                wD({
                    value: '7.2',
                    children: [
                        wD({ value: '7.2.1' }),
                        wD({ value: '7.2.2', indeterminate: true }),
                        wD({ value: '7.2.3', checked: true }),
                        wD({ value: '7.2.4', open: true }),
                        wD({ value: '7.2.5', disabled: true, indeterminate: true }),
                        wD({ value: '7.2.6', disabled: true, checked: true }),
                    ],
                }),
            ],
        }),

        // check disabled normalize
        wD({
            value: 8,
            disabled: true,
            children: [
                wD({ value: '8.1' }),
                wD({ value: '8.2' }),
            ],
        }),
        wD({
            value: 9,
            children: [
                wD({ value: '9.1' }),
                wD({ value: '9.2' }),
                wD({
                    value: '9.3',
                    disabled: true,
                    children: [
                        wD({ value: '9.3.1' }),
                        wD({
                            value: '9.3.2',
                            children: [wD({ value: '9.3.2.1' })],
                        }),
                        wD({ value: '9.3.3' }),
                    ],
                }),
            ],
        }),

        // check checked & children & !disabled
        wD({
            value: 10,
            children: [
                wD({ value: '10.1' }),
                wD({
                    value: '10.2',
                    indeterminate: true,
                    children: [
                        wD({ value: '10.2.1' }),
                        wD({
                            value: '10.2.2',
                            children: [
                                wD({ value: '10.2.2.1' }),
                                wD({ value: '10.2.2.2' }),
                            ],
                        }),
                    ],
                }),
                wD({ value: '10.3' }),
            ],
        }),
        wD({
            value: 11,
            children: [
                wD({ value: '11.1' }),
                wD({
                    value: '11.2',
                    checked: true,
                    children: [
                        wD({ value: '11.2.1' }),
                        wD({
                            value: '11.2.2',
                            children: [
                                wD({ value: '11.2.2.1' }),
                                wD({ value: '11.2.2.2' }),
                            ],
                        }),
                    ],
                }),
                wD({ value: '11.3' }),
            ],
        }),

        // check checked & children & disabled
        wD({
            value: 10,
            children: [
                wD({ value: '10.1' }),
                wD({
                    value: '10.2',
                    indeterminate: true,
                    children: [
                        wD({ value: '10.2.1', disabled: true }),
                        wD({
                            value: '10.2.2',
                            children: [
                                wD({ value: '10.2.2.1' }),
                                wD({ value: '10.2.2.2' }),
                            ],
                        }),
                    ],
                }),
                wD({ value: '10.3' }),
            ],
        }),
        wD({
            value: 11,
            children: [
                wD({ value: '11.1' }),
                wD({
                    value: '11.2',
                    checked: true,
                    children: [
                        wD({ value: '11.2.1', disabled: true, indeterminate: true }),
                        wD({
                            value: '11.2.2',
                            children: [
                                wD({ value: '11.2.2.1' }),
                                wD({ value: '11.2.2.2' }),
                            ],
                        }),
                    ],
                }),
                wD({ value: '11.3' }),
            ],
        }),
    ],
};

export const UTILS_STUBS = {
    SIMPLE_TREE,
    CALLING_SIMPLE_TREE_NODES_ORDER,
    CHECKED_SIMPLE_TREE,
    IDENTICAL_SAME_TREE_LEVEL_KEYS,
    IDENTICAL_DIFFERENT_TREE_LEVELS_KEYS,
    OPENED_TREE,
    CLOSED_TREE,
    INDETERMINATE_NODES_TREE,
    INDETERMINATE_NODES,
    INDETERMINATE_VALUES,
    PARTIALLY_CHECKED_TREE,
    RESET_STUB_TREE,
    SELECT_ALL_STUB_TREE,
    NORMALIZED_TREE_STUB,
};
