import { Chips, CHIPS_VARIANT, ChipsProps, ChipsVariant } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';

const VARIANTS: ChipsVariant[] = Object.values(CHIPS_VARIANT);
export const VariantsStory: Story<ChipsProps> = (props) => DisplayVariants({
    property: 'variant',
    values: VARIANTS,
    component: Chips,
    componentProps: props,
});

VariantsStory.storyName = 'Варианты';
VariantsStory.argTypes = excludeProp(['variant']);
