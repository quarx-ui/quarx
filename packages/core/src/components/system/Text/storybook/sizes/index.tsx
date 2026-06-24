import { StoryFn } from '@storybook/react-vite';
import { BaseTypographySize, Text, TextProps } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

const SIZES: BaseTypographySize[] = [
    QX_SIZE.xSmall,
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
    QX_SIZE.xLarge,
];

export const SizesStory: StoryFn<TextProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    componentProps: props,
    component: Text,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['size', 'type', 'children'],
});
