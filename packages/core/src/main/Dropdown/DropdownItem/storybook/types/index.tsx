import { Story } from '@storybook/react/types-6-0';
import { DROPDOWN_ITEM_TYPE, DropdownItem, DropdownItemProps, DropdownItemType } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';

const TYPES: DropdownItemType[] = Object.values(DROPDOWN_ITEM_TYPE);

export const TypesStory: Story<DropdownItemProps> = (storyProps) => DisplayVariants({
    property: 'type',
    values: TYPES,
    componentProps: storyProps,
    component: DropdownItem,
});
TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
