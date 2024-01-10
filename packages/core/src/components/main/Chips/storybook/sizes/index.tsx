import { Chips, ChipsProps, ChipsSize, QX_SIZE } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const SIZES: ChipsSize[] = [QX_SIZE.small, QX_SIZE.medium];

export const SizesStory: Story<ChipsProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Chips,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
