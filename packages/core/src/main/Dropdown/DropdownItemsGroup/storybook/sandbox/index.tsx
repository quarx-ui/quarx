import { Story } from '@storybook/react/types-6-0';
import { DropdownItemsGroup, DropdownItemsGroupProps, DropdownItemSize } from '@core';
import { createTemplateChildren } from '../template';

const Template: Story<DropdownItemsGroupProps> = ({ title, size, ...props }) => (
    <DropdownItemsGroup
        title={title}
        size={size}
        {...props}
    >
        {createTemplateChildren(size as DropdownItemSize)}
    </DropdownItemsGroup>
);

export const SandboxStory: Story<DropdownItemsGroupProps> = Template.bind({});
SandboxStory.storyName = 'Компонент';
