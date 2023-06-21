import { Story } from '@storybook/react/types-6-0';
import { BaseTypography, BaseTypographyColor, BaseTypographyProps, PALETTE_TEXT_KEYS } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

const COLORS: BaseTypographyColor[] = [
    PALETTE_TEXT_KEYS.main,
    PALETTE_TEXT_KEYS.secondary,
    PALETTE_TEXT_KEYS.tertiary,
    'rgb(100, 100, 100)',
    '#bcbcbc',
    'crimson',
];

export const ColorsStory: Story<BaseTypographyProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLORS,
    component: BaseTypography,
    componentProps: props,
});

setStoryParams(ColorsStory, {
    title: 'Цвета',
    description,
    excludeArgs: ['color'],
});
