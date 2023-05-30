import { Story } from '@storybook/react/types-6-0';
import { DropdownItemsGroup, DropdownItemsGroupProps, DropdownItemSize } from '@core';
import { createTemplateChildren } from '../template';

export const SandboxStory: Story<DropdownItemsGroupProps> = ({ title, size, ...props }) => (
    <DropdownItemsGroup
        title={title}
        size={size}
        {...props}
    >
        {createTemplateChildren(size as DropdownItemSize)}
    </DropdownItemsGroup>
);
SandboxStory.storyName = 'Компонент';
