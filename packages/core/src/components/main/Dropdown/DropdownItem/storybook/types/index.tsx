import { StoryFn } from '@storybook/react-vite';
import { DROPDOWN_ITEM_TYPE, DropdownItem, DropdownItemProps, DropdownItemType } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';

const TYPES: DropdownItemType[] = Object.values(DROPDOWN_ITEM_TYPE);

export const TypesStory: StoryFn<DropdownItemProps> = (storyProps) => DisplayVariants({
    property: 'type',
    values: TYPES,
    componentProps: storyProps,
    component: DropdownItem,
});
TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
