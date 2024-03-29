import { Story } from '@storybook/react/types-6-0';
import { Accordion, AccordionSize, AccordionProps } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const SIZES: AccordionSize[] = [
    QX_SIZE.xSmall,
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
];

export const SizesStory: Story<AccordionProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    containerAlign: 'unset',
    direction: 'vertical',
    component: Accordion,
    componentProps: { ...props,
        // @ts-expect-error
        css: { width: '100%' },
    },
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['size'],
});
