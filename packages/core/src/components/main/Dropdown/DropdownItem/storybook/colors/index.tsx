import { Story } from '@storybook/react/types-6-0';
import {
    DROPDOWN_ITEM_TYPE,
    DropdownItem,
    DropdownItemProps,
    PALETTE_COLORS,
    PaletteColor,
} from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';

const COLORS: PaletteColor[] = Object.values(PALETTE_COLORS);

export const ColorsStory: Story<DropdownItemProps> = (storyProps) => DisplayVariants({
    property: 'color',
    values: COLORS,
    component: DropdownItem,
    componentProps: {
        ...storyProps,
        type: DROPDOWN_ITEM_TYPE.checkbox,
    },
});

ColorsStory.storyName = 'Цвета';
ColorsStory.argTypes = excludeProp(['color', 'type']);
