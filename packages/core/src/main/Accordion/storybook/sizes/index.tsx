import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@core/storybook/utils';
import { Accordion, AccordionSize, AccordionProps } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
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
    componentProps: { ...props, css: { width: '100%' } },
});

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
SizesStory.parameters = createStoryDescription(description);
