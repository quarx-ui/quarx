import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { createStoryDescription } from '@quarx-ui/core/storybook/utils';
import { DropdownItemsGroup, DropdownItemsGroupProps, DropdownItemSize, Stack } from '@core';
import { Title } from '@quarx-ui/core/storybook/DisplayVariants/styledComponents';
import { createTemplateChildren } from '../template';
import description from './description.md';

export const LimitersStory: Story<DropdownItemsGroupProps> = ({
    title,
    size,
    ...props
}) => (
    <Stack direction="column">
        <Stack direction="column">
            <Title size="primary">75</Title>
            <DropdownItemsGroup
                {...props}
                limiter={75}
                title={title}
                size={size}
            >
                {createTemplateChildren(size as DropdownItemSize)}
            </DropdownItemsGroup>
        </Stack>
        <Stack direction="column">
            <Title size="primary">150</Title>
            <DropdownItemsGroup
                {...props}
                limiter={150}
                title={title}
                size={size}
            >
                {createTemplateChildren(size as DropdownItemSize)}
            </DropdownItemsGroup>
        </Stack>
        <Stack direction="column">
            <Title size="primary">Infinity</Title>
            <DropdownItemsGroup
                {...props}
                limiter={Infinity}
                title={title}
                size={size}
            >
                {createTemplateChildren(size as DropdownItemSize)}
            </DropdownItemsGroup>
        </Stack>
    </Stack>
);

LimitersStory.storyName = 'Лимиты';
LimitersStory.parameters = createStoryDescription(description);
LimitersStory.argTypes = excludeProp(['limiter']);
