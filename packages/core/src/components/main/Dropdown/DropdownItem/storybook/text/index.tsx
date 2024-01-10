import { Story } from '@storybook/react/types-6-0';
import { DropdownItem, DropdownItemProps, Stack } from '@core';
import { Title } from '@quarx-ui/core/storybook/DisplayVariants/styledComponents';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';

export const TextStory: Story<DropdownItemProps> = (props) => (
    <Stack direction="column">
        <Title size="primary">
            With title
        </Title>
        <DropdownItem
            {...props}
            title="SuperDelivery"
            description=""
        />
        <Title size="primary">
            With title & description
        </Title>
        <DropdownItem
            {...props}
            title="SuperDelivery"
            description="Онлайн магазин с доставкой за 15 минут"
        />
    </Stack>
);
TextStory.storyName = 'Текст';
TextStory.argTypes = excludeProp(['title', 'description']);
