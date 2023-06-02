import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@core/storybook/templateParams';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Meta } from '@storybook/react';
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
