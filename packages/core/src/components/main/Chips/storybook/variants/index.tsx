import { Chips, CHIPS_VARIANT, ChipsProps, ChipsVariant } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const VARIANTS: ChipsVariant[] = Object.values(CHIPS_VARIANT);
export const VariantsStory: StoryFn<ChipsProps> = (props) => DisplayVariants({
    property: 'variant',
    values: VARIANTS,
    component: Chips,
    componentProps: props,
});

setStoryParams(VariantsStory, {
    title: 'Варианты',
    excludeArgs: ['variant'],
});
