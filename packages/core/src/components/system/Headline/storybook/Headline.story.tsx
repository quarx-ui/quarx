import { Meta } from '@storybook/react';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { defineCategory, excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { PALETTE_TEXT_KEYS, QX_SIZE, TYPOGRAPHY_WEIGHT } from '@core';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { Headline, HeadlineProps } from '..';

const defaultArgs: Partial<HeadlineProps> = {
    children: 'Пример текста',
    color: PALETTE_TEXT_KEYS.main,
    size: QX_SIZE.medium,
    fontWeight: TYPOGRAPHY_WEIGHT.normal,
};

export default {
    title: STORY_PATHS.core.components.system('typography/Headline'),
    component: Headline,
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Основное', {
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
} as Meta<HeadlineProps>;

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
export { ColorsStory } from './colors';
