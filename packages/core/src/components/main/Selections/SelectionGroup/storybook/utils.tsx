import { useEffect, useState } from 'react';
import {
    SelectionListStruct,
    SelectionTreeStruct,
    SelectionGroupProps,
    SelectionTree,
    SelectionList,
    SELECTION_TREE_UTILS,
    SELECTION_LIST_UTILS,
    SelectionTreeNodeStruct,
    SelectionListNodeStruct,
} from '@core';

export interface TemplateSelectionGroupProps extends Omit<SelectionGroupProps, 'children'> {
    children: 'tree' | 'list';
}

interface SelectionGroupChildrenTemplateState {
    nodes: SelectionListStruct | SelectionTreeStruct;
    setNodes(update: SelectionTreeNodeStruct[] | SelectionListNodeStruct[]): void;
}

type GetTemplateChildren =
    & TemplateSelectionGroupProps
    & SelectionGroupChildrenTemplateState;

export const list: SelectionListStruct = [
    { value: 0, title: 'Value #1' },
    { value: 1, title: 'Value #2' },
    { value: 2, checked: true, title: 'Value #3' },
    { value: 3, disabled: true, title: 'Value #4' },
    { value: 4, title: 'Value #5' },
];

export const tree: SelectionTreeStruct = [
    { value: 0, title: 'Value #0' },
    { value: 1, title: 'Value #1' },
    { value: 2, title: 'Value #2' },
    {
        value: 3,
        title: 'Value #3',
        children: [
            { value: '3.1', title: 'Value #3.1' },
            {
                value: '3.2',
                title: 'Value #3.2',
                disabled: true,
                children: [
                    { value: '3.2.1', title: 'Value #3.2.1' },
                    { value: '3.2.2', title: 'Value #3.2.2' },
                ],
            },
        ],
    },
    { value: 4, title: 'Value #4' },
];

export const useTemplateChildren = (props: TemplateSelectionGroupProps): SelectionGroupChildrenTemplateState => {
    const [nodes, setNodes] = useState(list);

    useEffect(() => {
        switch (props.children) {
            case 'list':
                setNodes(setListDefaultValues(list));
                break;
            case 'tree':
                setNodes(setTreeDefaultValues(tree));
                break;
            default:
                setNodes([]);
        }
    }, [props.children]);

    return { nodes, setNodes };
};

const { setDefaultValues: setListDefaultValues } = SELECTION_LIST_UTILS;
const { setDefaultValues: setTreeDefaultValues } = SELECTION_TREE_UTILS;
export const getTemplateChildren = ({
    nodes,
    setNodes,
    children,
    ...props
}: GetTemplateChildren) => {
    if (children === 'tree') {
        return (
            <SelectionTree
                nodes={nodes}
                onUpdate={setNodes}
                {...props}
            />
        );
    }

    return (
        <SelectionList
            nodes={nodes}
            onUpdate={setNodes}
            {...props}
        />
    );
};
