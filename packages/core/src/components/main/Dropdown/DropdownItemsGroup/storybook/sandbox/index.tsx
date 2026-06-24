import { StoryFn } from '@storybook/react-vite';
import { DropdownItemsGroup, DropdownItemsGroupProps, DropdownItemSize } from '@core';
import { createTemplateChildren } from '../template';

export const SandboxStory: StoryFn<DropdownItemsGroupProps> = ({ title, size, ...props }) => (
    <DropdownItemsGroup
        title={title}
        size={size}
        {...props}
    >
        {createTemplateChildren(size as DropdownItemSize)}
    </DropdownItemsGroup>
);
SandboxStory.storyName = 'Компонент';
