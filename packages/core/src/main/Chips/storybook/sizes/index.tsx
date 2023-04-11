import { Chips, ChipsProps, ChipsSize, QX_SIZE } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';

const SIZES: ChipsSize[] = [QX_SIZE.small, QX_SIZE.medium];

export const SizesStory: Story<ChipsProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Chips,
    componentProps: props,
});

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
