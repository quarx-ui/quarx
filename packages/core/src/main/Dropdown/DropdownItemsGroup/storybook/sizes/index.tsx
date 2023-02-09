import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import {
    DropdownItemsGroup,
    DropdownItemsGroupProps,
    Stack,
} from '@core';
import { Title } from '@core/storybook/DisplayVariants/styledComponents';
import { createTemplateChildren } from '../template';

export const SizesStory: Story<DropdownItemsGroupProps> = (props) => (
    <Stack direction="column">
        <Stack direction="column">
            <Title size="primary">small</Title>
            <DropdownItemsGroup
                {...props}
                size="small"
            >
                {createTemplateChildren('small')}
            </DropdownItemsGroup>
        </Stack>
        <Stack direction="column">
            <Title size="primary">medium</Title>
            <DropdownItemsGroup
                {...props}
                size="medium"
            >
                {createTemplateChildren('medium')}
            </DropdownItemsGroup>
        </Stack>
        <Stack direction="column">
            <Title size="primary">large</Title>
            <DropdownItemsGroup
                {...props}
                size="large"
            >
                {createTemplateChildren('large')}
            </DropdownItemsGroup>
        </Stack>
    </Stack>
);

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
