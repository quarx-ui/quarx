import { Story } from '@storybook/react/types-6-0';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { StackProps } from '../../types';
import { Stack } from '../../Stack';
import description from './description.md';

export const CustomComponentStory: Story<StackProps> = (props) => (
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
