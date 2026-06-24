import { StoryFn } from '@storybook/react-vite';
import { Accordion, AccordionSize, AccordionProps } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

const SIZES: AccordionSize[] = [
    QX_SIZE.xSmall,
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
];

export const SizesStory: StoryFn<AccordionProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    containerAlign: 'unset',
    direction: 'vertical',
    component: Accordion,
    componentProps: { ...props,
        // @ts-expect-error DisplayVariants passes css through componentProps for story layout.
        css: { width: '100%' },
    },
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['size'],
});
