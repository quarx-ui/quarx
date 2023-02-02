import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
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

CustomComponentStory.storyName = 'Кастомный компонент';
CustomComponentStory.argTypes = excludeProp(['component']);
CustomComponentStory.parameters = createStoryDescription(description);
