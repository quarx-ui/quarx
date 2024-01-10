import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@quarx-ui/core/storybook/utils';
import { DropdownItemsGroup, DropdownItemsGroupProps, DropdownItemSize, Stack } from '@core';
import { Title } from '@quarx-ui/core/storybook/DisplayVariants/styledComponents';
import { createTemplateChildren } from '../template';
import description from './description.md';

export const DividersStory: Story<DropdownItemsGroupProps> = ({
    title,
    size,
    ...props
}) => (
    <Stack direction="column">
        <Stack direction="column">
            <Title size="primary">Разделители между двумя группами (в конце первого компонента)</Title>
            <DropdownItemsGroup
                {...props}
                limiter={75}
                title={title}
                size={size}
            >
                {createTemplateChildren(size as DropdownItemSize)}
            </DropdownItemsGroup>
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
            <Title size="primary">Прокрутите, чтобы увидеть разделитель под заголовком</Title>
            <DropdownItemsGroup
                {...props}
                limiter={150}
                title={title}
                size={size}
            >
                {createTemplateChildren(size as DropdownItemSize)}
            </DropdownItemsGroup>
        </Stack>
    </Stack>
);

DividersStory.storyName = 'Разделители';
DividersStory.parameters = createStoryDescription(description);
