import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { SelectionGroup, SelectionGroupProps } from '..';
import { TemplateSelectionGroupProps } from './utils';

const defaultArgs: Partial<TemplateSelectionGroupProps> = {
    title: 'Группа',
    description: 'Выберите вариант',
    helperText: 'Выберите вариант ответа',
    children: 'tree',
};

export default {
    title: STORY_PATHS.core.components.main('Selections/SelectionGroup'),
    component: SelectionGroup,
    parameters: {
        layout: 'fullscreen',
    },
    args: defaultArgs,
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
} as Meta<SelectionGroupProps>;

export { SandboxStory } from './sandbox';
export { TypesStory } from './types';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
