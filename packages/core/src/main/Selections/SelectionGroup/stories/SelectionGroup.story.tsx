import { useEffect, useState } from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import {
    PALETTE_COLORS,
    QX_SIZE,
    SELECTION_GROUP_TYPE,
    SELECTION_LIST_UTILS,
    SELECTION_TREE_UTILS,
    SelectionList,
    SelectionListStruct,
    SelectionTree,
    SelectionTreeStruct,
} from '@core';
import { StoryDarkerContainer } from '@core/storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { SelectionGroup, SelectionGroupProps } from '..';

const list: SelectionListStruct = [
    { value: 0, title: 'Value #1' },
    { value: 1, title: 'Value #2' },
    { value: 2, checked: true, title: 'Value #3' },
    { value: 3, disabled: true, title: 'Value #4' },
    { value: 4, title: 'Value #5' },
];

const tree: SelectionTreeStruct = [
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

interface TemplateSelectionGroupProps extends Omit<SelectionGroupProps, 'children'> {
    children: 'tree' | 'list';
}

const defaultArgs: Partial<TemplateSelectionGroupProps> = {
    title: 'Группа',
    description: 'Выберите вариант',
    helperText: 'Выберите вариант ответа',
    children: 'tree',
};

export default {
    title: STORY_PATHS.core.components.main('Selections/SelectionGroup'),
    component: SelectionGroup,
    argTypes: {
        title: { description: 'Заголовок компонента' },
        description: { description: 'Описание компонента' },
        helperText: { description: 'Вспомогательный текст компонента' },
        type: { description: 'Тип заливки компонента' },
        color: { description: 'Цветовая схема компонента' },
        size: { description: 'Размер компонента' },
        children: {
            description: 'Список или дерево selection',
            options: ['list', 'tree'],
        },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        layout: 'fullscreen',
        actions: { disable: true },
    },
    args: defaultArgs,
};

const { setDefaultValues: setListDefaultValues } = SELECTION_LIST_UTILS;
const { setDefaultValues: setTreeDefaultValues } = SELECTION_TREE_UTILS;
const Template: Story<TemplateSelectionGroupProps> = ({
    children,
    ...props
}) => {
    const [nodes, setNodes] = useState(list);

    useEffect(() => {
        switch (children) {
            case 'list':
                setNodes(setListDefaultValues(list));
                break;
            case 'tree':
                setNodes(setTreeDefaultValues(tree));
                break;
            default:
                setNodes([]);
        }
    }, [children]);

    const childrenTypes = {
        tree: (
            <SelectionTree
                nodes={nodes}
                onUpdate={setNodes}
            />
        ),
        list: (
            <SelectionList
                nodes={nodes}
                onUpdate={setNodes}
            />
        ),
    };

    return (
        <StoryDarkerContainer>
            <SelectionGroup {...props}>
                {childrenTypes[children]}
            </SelectionGroup>
        </StoryDarkerContainer>
    );
};

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

export const Types: Story<TemplateSelectionGroupProps> = (props) => (
    <StoryDarkerContainer>
        {DisplayVariants({
            property: 'type',
            values: Object.values(SELECTION_GROUP_TYPE),
            component: Template,
            componentProps: props,
        })}
    </StoryDarkerContainer>
);

Types.storyName = 'Типы';
Types.argTypes = excludeProp(['type']);

export const Colors: Story<TemplateSelectionGroupProps> = (props) => (
    <StoryDarkerContainer>
        {DisplayVariants({
            property: 'color',
            values: Object.values(PALETTE_COLORS),
            component: Template,
            componentProps: props,
        })}
    </StoryDarkerContainer>
);

Colors.storyName = 'Цвета';
Colors.argTypes = excludeProp(['color']);

export const Sizes: Story<TemplateSelectionGroupProps> = (props) => (
    <StoryDarkerContainer>
        {DisplayVariants({
            property: 'size',
            values: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
            component: Template,
            componentProps: props,
        })}
    </StoryDarkerContainer>
);

Sizes.storyName = 'Размеры';
Sizes.argTypes = excludeProp(['size']);

const variantsArray = [
    Types,
    Colors,
    Sizes,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});
