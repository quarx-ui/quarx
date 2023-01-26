import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { StackProps } from '../../types';
import { Stack } from '../../Stack';
import description from './description.md';

export const WithDivider: Story<StackProps> = (props) => (
    <Stack>
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

WithDivider.storyName = 'Разделитель';
WithDivider.argTypes = excludeProp(['divider']);
WithDivider.parameters = {
    docs: {
        description: { story: description },
    },
};
