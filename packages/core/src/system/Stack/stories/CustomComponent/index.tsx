import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { StackProps } from '../../types';
import { Stack } from '../../Stack';
import description from './description.md';

export const CustomComponent: Story<StackProps> = (props) => (
    <Stack {...props} component="ol">
        <li>Главная</li>
        <li>Профиль</li>
        <li>Настройки</li>
    </Stack>
);

CustomComponent.storyName = 'Кастомный компонент';
CustomComponent.argTypes = excludeProp(['component']);
CustomComponent.parameters = {
    docs: {
        description: { story: description },
    },
};
