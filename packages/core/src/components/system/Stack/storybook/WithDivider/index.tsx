import { StoryFn } from '@storybook/react-vite';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { StackProps } from '../../types';
import { Stack } from '../../Stack';
import description from './description.md?raw';

export const WithDividerStory: StoryFn<StackProps> = (props) => (
    <Stack>
        <Stack {...props} direction="row" divider>
            <div>Главная</div>
            <div>Профиль</div>
            <div>Настройки</div>
        </Stack>
        <Stack {...props} direction="row" divider="•">
            <div>Главная</div>
            <div>Профиль</div>
            <div>Настройки</div>
        </Stack>
        <Stack {...props} direction="row" divider={<div>|</div>}>
            <div>Главная</div>
            <div>Профиль</div>
            <div>Настройки</div>
        </Stack>
    </Stack>
);

setStoryParams(WithDividerStory, {
    title: 'Разделитель',
    description,
    excludeArgs: ['divider'],
});
