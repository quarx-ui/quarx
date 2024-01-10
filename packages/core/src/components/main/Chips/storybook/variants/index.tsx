import { Chips, CHIPS_VARIANT, ChipsProps, ChipsVariant } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const VARIANTS: ChipsVariant[] = Object.values(CHIPS_VARIANT);
export const VariantsStory: Story<ChipsProps> = (props) => DisplayVariants({
    property: 'variant',
    values: VARIANTS,
    component: Chips,
    componentProps: props,
});

setStoryParams(VariantsStory, {
    title: 'Варианты',
    excludeArgs: ['variant'],
});
