import { Story } from '@storybook/react/types-6-0';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { StackProps } from '../../types';
import { Stack } from '../../Stack';
import description from './description.md';

export const WithDividerStory: Story<StackProps> = (props) => (
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
