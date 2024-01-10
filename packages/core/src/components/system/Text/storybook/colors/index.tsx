import { Story } from '@storybook/react/types-6-0';
import { Text, TextColor, TextProps, PALETTE_TEXT_KEYS } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const COLORS: TextColor[] = [
    PALETTE_TEXT_KEYS.main,
    PALETTE_TEXT_KEYS.secondary,
    PALETTE_TEXT_KEYS.tertiary,
    'rgb(100, 100, 100)',
    '#bcbcbc',
    'crimson',
];

export const ColorsStory: Story<TextProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLORS,
    component: Text,
    componentProps: props,
});

setStoryParams(ColorsStory, {
    title: 'Цвета',
    description,
    excludeArgs: ['color'],
});
