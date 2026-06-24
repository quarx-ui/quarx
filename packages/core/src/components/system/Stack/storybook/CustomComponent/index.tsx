import { StoryFn } from '@storybook/react-vite';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { StackProps } from '../../types';
import { Stack } from '../../Stack';
import description from './description.md?raw';

export const CustomComponentStory: StoryFn<StackProps> = (props) => (
    <Stack {...props} component="ol">
        <li>Главная</li>
        <li>Профиль</li>
        <li>Настройки</li>
    </Stack>
);

setStoryParams(CustomComponentStory, {
    title: 'Кастомный компонент',
    description,
    excludeArgs: ['component'],
});
