import { StoryFn } from '@storybook/react-vite';
import { HeadlineColor, Headline, HeadlineProps, PALETTE_TEXT_KEYS } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

const COLORS: HeadlineColor[] = [
    PALETTE_TEXT_KEYS.main,
    PALETTE_TEXT_KEYS.secondary,
    PALETTE_TEXT_KEYS.tertiary,
    'rgb(100, 100, 100)',
    '#bcbcbc',
    'crimson',
];

export const ColorsStory: StoryFn<HeadlineProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLORS,
    component: Headline,
    componentProps: props,
});

setStoryParams(ColorsStory, {
    title: 'Цвета',
    description,
    excludeArgs: ['color'],
});
