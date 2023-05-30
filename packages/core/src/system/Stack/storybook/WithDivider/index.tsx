import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
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

WithDividerStory.storyName = 'Разделитель';
WithDividerStory.argTypes = excludeProp(['divider']);
WithDividerStory.parameters = createStoryDescription(description);
