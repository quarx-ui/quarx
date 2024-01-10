import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { DropdownItem, DropdownItemProps, DropdownItemSize, QX_SIZE } from '@core';

const SIZES: DropdownItemSize[] = Object.values([
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
]);

export const SizesStory: Story<DropdownItemProps> = (storyProps) => DisplayVariants({
    property: 'size',
    values: SIZES,
    componentProps: storyProps,
    component: DropdownItem,
});

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
