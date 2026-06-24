import { Chips, ChipsProps, ChipsSize, QX_SIZE } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const SIZES: ChipsSize[] = [QX_SIZE.small, QX_SIZE.medium];

export const SizesStory: StoryFn<ChipsProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Chips,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
