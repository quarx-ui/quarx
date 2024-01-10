import { Story } from '@storybook/react/types-6-0';
import { BaseTypographySize, Headline, HeadlineProps } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const SIZES: BaseTypographySize[] = [
    QX_SIZE.xSmall,
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
    QX_SIZE.xLarge,
];

export const SizesStory: Story<HeadlineProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    componentProps: props,
    component: Headline,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['size', 'type', 'children'],
});
