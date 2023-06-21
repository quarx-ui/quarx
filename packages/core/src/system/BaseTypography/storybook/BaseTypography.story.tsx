import { Meta } from '@storybook/react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { BASE_TYPOGRAPHY_TYPES, PALETTE_TEXT_KEYS, QX_SIZE, TYPOGRAPHY_WEIGHT } from '@core';
import { BaseTypography, BaseTypographyProps } from '..';

const defaultArgs: Partial<BaseTypographyProps> = {
    type: BASE_TYPOGRAPHY_TYPES.text,
    children: 'Пример текста',
    color: PALETTE_TEXT_KEYS.main,
    size: QX_SIZE.medium,
    fontWeight: TYPOGRAPHY_WEIGHT.normal,
};

export default {
    title: STORY_PATHS.core.components.system('BaseTypography'),
    component: BaseTypography,
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Основное', {
            type: {},
            children: {},
        }),
        ...defineCategory('Стилизация', {
            size: {},
            color: {},
            fontWeight: { control: 'select', options: Object.values(TYPOGRAPHY_WEIGHT) },
            component: { control: false },
        }),
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
} as Meta<BaseTypographyProps>;

export { SandboxStory } from './sandbox';
export { TypesStory } from './typography-types';
export { SizesStory } from './sizes';
export { ColorsStory } from './colors';
