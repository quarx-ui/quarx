import { SelectionTreeStruct } from '@core';

const VISIBILITY_TREE_STUB = {
    initial: <SelectionTreeStruct>[
        { value: 1 },
        {
            value: 2,
            children: [
                { value: '2.1' },
                {
                    value: '2.2',
                    open: true,
                    children: [
                        { value: '2.2.1' },
                        { value: '2.2.2' },
                        { value: '2.2.3' },
                        { value: '2.2.4' },
                    ],
                },
                { value: '2.3' },
                { value: '2.4' },
            ],
        },
        {
            value: 3,
            open: true,
            children: [{ value: '3.3' }],
        },
        {
            value: 4,
            children: [
                { value: '4.1' },
                {
                    value: '4.2',
                    children: [
                        { value: '4.2.1' },
                        { value: '4.2.2' },
                        { value: '4.2.3' },
                        { value: '4.2.4' },
                    ],
                },
                { value: '4.3' },
                { value: '4.4' },
            ],
        },
        { value: 5 },
    ],
    handled: <SelectionTreeStruct>[
        { value: 1 },
        {
            value: 2,
            children: [
                { value: '2.1' },
                {
                    value: '2.2',
                    open: false,
                    children: [
                        { value: '2.2.1' },
                        { value: '2.2.2' },
                        { value: '2.2.3' },
                        { value: '2.2.4' },
                    ],
                },
                { value: '2.3' },
                { value: '2.4' },
            ],
        },
        {
            value: 3,
            open: true,
            children: [{ value: '3.3' }],
        },
        {
            value: 4,
            children: [
                { value: '4.1' },
                {
                    value: '4.2',
                    children: [
                        { value: '4.2.1' },
                        { value: '4.2.2' },
                        { value: '4.2.3' },
                        { value: '4.2.4' },
                    ],
                },
                { value: '4.3' },
                { value: '4.4' },
            ],
        },
        { value: 5 },
    ],
    openWithSync: <SelectionTreeStruct>[
        { value: 1 },
        {
            value: 2,
            children: [
                { value: '2.1' },
                {
                    value: '2.2',
                    open: true,
                    children: [
                        { value: '2.2.1' },
                        { value: '2.2.2' },
                        { value: '2.2.3' },
                        { value: '2.2.4' },
                    ],
                },
                { value: '2.3' },
                { value: '2.4' },
            ],
        },
        {
            value: 3,
            open: true,
            children: [{ value: '3.3' }],
        },
        {
            value: 4,
            children: [
                { value: '4.1' },
                {
                    value: '4.2',
                    open: true,
                    children: [
                        { value: '4.2.1' },
                        { value: '4.2.2' },
                        { value: '4.2.3' },
                        { value: '4.2.4' },
                    ],
                },
                { value: '4.3' },
                { value: '4.4' },
            ],
        },
        { value: 5 },
    ],
    closeWithSync: <SelectionTreeStruct>[
        { value: 1 },
        {
            value: 2,
            children: [
                { value: '2.1' },
                {
                    value: '2.2',
                    open: false,
                    children: [
                        { value: '2.2.1', open: false },
                        { value: '2.2.2', open: false },
                        { value: '2.2.3', open: false },
                        { value: '2.2.4', open: false },
                    ],
                },
                { value: '2.3' },
                { value: '2.4' },
            ],
        },
        {
            value: 3,
            open: true,
            children: [{ value: '3.3' }],
        },
        {
            value: 4,
            children: [
                { value: '4.1' },
                {
                    value: '4.2',
                    children: [
                        { value: '4.2.1' },
                        { value: '4.2.2' },
                        { value: '4.2.3' },
                        { value: '4.2.4' },
                    ],
                },
                { value: '4.3' },
                { value: '4.4' },
            ],
        },
        { value: 5 },
    ],
};

const UPDATE_TREE_STATE_STUB = {
    workWithoutDisabled: {
        toCheckedTopLevelNode: {
            initial: <SelectionTreeStruct>[
                { value: 1 },
            ],
            expected: <SelectionTreeStruct>[
                { value: 1, checked: true, indeterminate: false },
            ],
        },
        toUncheckedTopLevelNode: {
            initial: <SelectionTreeStruct>[
                { value: 1, checked: true },
            ],
            expected: <SelectionTreeStruct>[
                { value: 1, checked: false, indeterminate: false },
            ],
        },
        toCheckedMiddleLevelNode: {
            initial: <SelectionTreeStruct>[
                { value: 1 },
                {
                    value: 2,
                    children: [
                        { value: '2.1' },
                        {
                            value: '2.2',
                            children: [
                                { value: '2.2.1' },
                                { value: '2.2.2' },
                                { value: '2.2.3' },
                            ],
                        },
                        { value: '2.3' },
                    ],
                },
            ],
            expected: <SelectionTreeStruct>[
                { value: 1, indeterminate: false },
                {
                    value: 2,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '2.1', indeterminate: false },
                        {
                            value: '2.2',
                            checked: true,
                            indeterminate: false,
                            children: [
                                { value: '2.2.1', checked: true, indeterminate: false },
                                { value: '2.2.2', checked: true, indeterminate: false },
                                { value: '2.2.3', checked: true, indeterminate: false },
                            ],
                        },
                        { value: '2.3', indeterminate: false },
                    ],
                },
            ],
        },
        toUncheckedMiddleLevelNode: {
            initial: <SelectionTreeStruct>[
                { value: 1, indeterminate: false },
                {
                    value: 2,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '2.1', indeterminate: false },
                        {
                            value: '2.2',
                            checked: true,
                            indeterminate: false,
                            children: [
                                { value: '2.2.1', checked: true, indeterminate: false },
                                { value: '2.2.2', checked: true, indeterminate: false },
                                { value: '2.2.3', checked: true, indeterminate: false },
                            ],
                        },
                        { value: '2.3', indeterminate: false },
                    ],
                },
            ],
            expected: <SelectionTreeStruct>[
                { value: 1, indeterminate: false },
                {
                    value: 2,
                    checked: false,
                    indeterminate: false,
                    children: [
                        { value: '2.1', indeterminate: false },
                        {
                            value: '2.2',
                            checked: false,
                            indeterminate: false,
                            children: [
                                { value: '2.2.1', checked: false, indeterminate: false },
                                { value: '2.2.2', checked: false, indeterminate: false },
                                { value: '2.2.3', checked: false, indeterminate: false },
                            ],
                        },
                        { value: '2.3', indeterminate: false },
                    ],
                },
            ],
        },
        toCheckedBottomLevelNode: {
            initial: <SelectionTreeStruct>[
                { value: 1, indeterminate: false },
                {
                    value: 2,
                    checked: false,
                    indeterminate: false,
                    children: [
                        { value: '2.1', indeterminate: false },
                        {
                            value: '2.2',
                            checked: false,
                            indeterminate: false,
                            children: [
                                { value: '2.2.1', checked: false, indeterminate: false },
                                { value: '2.2.2', checked: false, indeterminate: false },
                                { value: '2.2.3', checked: false, indeterminate: false },
                            ],
                        },
                        { value: '2.3', indeterminate: false },
                    ],
                },
            ],
            expected: <SelectionTreeStruct>[
                { value: 1, indeterminate: false },
                {
                    value: 2,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '2.1', indeterminate: false },
                        {
                            value: '2.2',
                            checked: true,
                            indeterminate: true,
                            children: [
                                { value: '2.2.1', checked: false, indeterminate: false },
                                { value: '2.2.2', checked: true, indeterminate: false },
                                { value: '2.2.3', checked: false, indeterminate: false },
                            ],
                        },
                        { value: '2.3', indeterminate: false },
                    ],
                },
            ],
        },
        toUncheckedBottomLevelNode: {
            initial: <SelectionTreeStruct>[
                { value: 1, indeterminate: false },
                {
                    value: 2,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '2.1', indeterminate: false },
                        {
                            value: '2.2',
                            checked: true,
                            indeterminate: true,
                            children: [
                                { value: '2.2.1', checked: false, indeterminate: false },
                                { value: '2.2.2', checked: true, indeterminate: false },
                                { value: '2.2.3', checked: false, indeterminate: false },
                            ],
                        },
                        { value: '2.3', indeterminate: false },
                    ],
                },
            ],
            expected: <SelectionTreeStruct>[
                { value: 1, indeterminate: false },
                {
                    value: 2,
                    checked: false,
                    indeterminate: false,
                    children: [
                        { value: '2.1', indeterminate: false },
                        {
                            value: '2.2',
                            checked: false,
                            indeterminate: false,
                            children: [
                                { value: '2.2.1', checked: false, indeterminate: false },
                                { value: '2.2.2', checked: false, indeterminate: false },
                                { value: '2.2.3', checked: false, indeterminate: false },
                            ],
                        },
                        { value: '2.3', indeterminate: false },
                    ],
                },
            ],
        },
        toAllCheckedFromMiddleLevelNode: {
            initial: <SelectionTreeStruct>[
                {
                    value: 1,
                    checked: true,
                    indeterminate: true,
                    children: [
                        { value: '1.1', checked: true },
                        { value: '1.2', checked: true },
                        {
                            value: '1.3',
                            checked: true,
                            indeterminate: true,
                            children: [
                                { value: '1.3.1', checked: true },
                                { value: '1.3.2', checked: false },
                            ],
                        },
                        { value: '1.4', checked: true },
                    ],
                },
            ],
            expected: <SelectionTreeStruct>[
                {
                    value: 1,
                    checked: true,
                    indeterminate: false,
                    children: [
                        { value: '1.1', checked: true, indeterminate: false },
                        { value: '1.2', checked: true, indeterminate: false },
                        {
                            value: '1.3',
                            checked: true,
                            indeterminate: false,
                            children: [
                                { value: '1.3.1', checked: true, indeterminate: false },
                                { value: '1.3.2', checked: true, indeterminate: false },
                            ],
                        },
                        { value: '1.4', checked: true, indeterminate: false },
                    ],
                },
            ],
        },
        tryToResetAll: {
            initial: <SelectionTreeStruct>[
                {
                    value: 1,
                    checked: true,
                    indeterminate: false,
                    children: [
                        { value: '1.1', checked: true },
                        { value: '1.2', checked: true },
                        {
                            value: '1.3',
                            checked: true,
                            indeterminate: false,
                            children: [
                                { value: '1.3.1', checked: true },
                                { value: '1.3.2', checked: true },
                            ],
                        },
                        { value: '1.4', checked: true },
                    ],
                },
            ],
            expected: <SelectionTreeStruct>[
                {
                    value: 1,
                    checked: false,
                    indeterminate: false,
                    children: [
                        { value: '1.1', checked: false, indeterminate: false },
                        { value: '1.2', checked: false, indeterminate: false },
                        {
                            value: '1.3',
                            checked: false,
                            indeterminate: false,
                            children: [
                                { value: '1.3.1', checked: false, indeterminate: false },
                                { value: '1.3.2', checked: false, indeterminate: false },
                            ],
                        },
                        { value: '1.4', checked: false, indeterminate: false },
                    ],
                },
            ],
        },
        tryToSelectAll: {
            initial: <SelectionTreeStruct>[
                {
                    value: 1,
                    checked: false,
                    indeterminate: false,
                    children: [
                        { value: '1.1', checked: false },
                        { value: '1.2', checked: false },
                        {
                            value: '1.3',
                            checked: false,
                            indeterminate: false,
                            children: [
                                { value: '1.3.1', checked: false },
                                { value: '1.3.1', checked: false },
                            ],
                        },
                        { value: '1.4', checked: false },
                    ],
                },
            ],
            expected: <SelectionTreeStruct>[
                {
                    value: 1,
                    checked: true,
                    indeterminate: false,
                    children: [
                        { value: '1.1', checked: true, indeterminate: false },
                        { value: '1.2', checked: true, indeterminate: false },
                        {
                            value: '1.3',
                            checked: true,
                            indeterminate: false,
                            children: [
                                { value: '1.3.1', checked: true, indeterminate: false },
                                { value: '1.3.1', checked: true, indeterminate: false },
                            ],
                        },
                        { value: '1.4', checked: true, indeterminate: false },
                    ],
                },
            ],
        },
    },

    workWithDisabled: {
        toCheckedDisabledTopLevelNode: {
            tree: <SelectionTreeStruct>[
                { value: 1, disabled: true },
            ],
        },
        toUncheckedDisabledTopLevelNode: {
            tree: <SelectionTreeStruct>[
                { value: 1, disabled: true },
            ],
        },
        noneDisabledChecked: {
            toIndeterminate: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        children: [
                            { value: '1.1' },
                            {
                                value: '1.2',
                                disabled: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: true, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
            },
            trySelectAll: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        children: [
                            { value: '1.1' },
                            {
                                value: '1.2',
                                disabled: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: true, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
            },
            tryToReset: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: true },
                            {
                                value: '1.2',
                                disabled: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: false,
                        indeterminate: false,
                        children: [
                            { value: '1.1', checked: false, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        someDisabledChecked: {
            toIndeterminate: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1' },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: true, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
            },
            trySelectAll: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1' },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: true, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
            },
            tryToReset: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: true, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: false, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: true,
                                children: [
                                    { value: '1.2.1', disabled: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        allDisabledChecked: {
            toIndeterminate: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: false,
                        children: [
                            { value: '1.1', checked: true, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: false,
                                children: [
                                    { value: '1.2.1', disabled: true, checked: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true, checked: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: false, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: false,
                                children: [
                                    { value: '1.2.1', disabled: true, checked: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true, checked: true },
                                ],
                            },
                        ],
                    },
                ],
            },
            trySelectAll: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: false, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: false,
                                children: [
                                    { value: '1.2.1', disabled: true, checked: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true, checked: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: false,
                        children: [
                            { value: '1.1', checked: true, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: false,
                                children: [
                                    { value: '1.2.1', disabled: true, checked: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true, checked: true },
                                ],
                            },
                        ],
                    },
                ],
            },
            tryToReset: {
                initial: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: false,
                        children: [
                            { value: '1.1', checked: true, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: false,
                                children: [
                                    { value: '1.2.1', disabled: true, checked: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true, checked: true },
                                ],
                            },
                        ],
                    },
                ],
                expected: <SelectionTreeStruct>[
                    {
                        value: 1,
                        checked: true,
                        indeterminate: true,
                        children: [
                            { value: '1.1', checked: false, indeterminate: false },
                            {
                                value: '1.2',
                                disabled: true,
                                checked: true,
                                indeterminate: false,
                                children: [
                                    { value: '1.2.1', disabled: true, checked: true },
                                    { value: '1.2.2', disabled: true, checked: true },
                                    { value: '1.2.3', disabled: true, checked: true },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
};

export const UPDATES_STUB = {
    VISIBILITY_TREE_STUB,
    UPDATE_TREE_STATE_STUB,
};
