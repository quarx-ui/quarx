import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { defineCategory, excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { DEMONSTRATION_ALERT } from '@quarx-ui/core/storybook/constants';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { Badge, BadgeProps } from '..';

const defaultArgs: BadgeProps = {
    children: 'Статус',
    size: 'large',
    borderRadius: 'max',
    color: 'brand',
    type: 'contained',
    counter: 999,
};

export default {
    title: STORY_PATHS.core.components.main('Badge'),
    component: Badge,
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Стилизация', {
            size: {},
            borderRadius: {},
            type: {},
            color: {},
        }),
        ...defineCategory('Внутренние элементы', {
            children: {},
            counter: {},
            counterProps: { },
            rightItem: {
                control: false,
            },
            leftItem: {
                control: false,
            },
        }),
        ...defineCategory('Для демонстрации', {
            counterShown: {
                description: `Включить/выключить counter.${DEMONSTRATION_ALERT}`,
            },
            leftItemShown: {
                description: `Включить/выключить левый элемент.${DEMONSTRATION_ALERT}`,
            },
            rightItemShown: {
                description: `Включить/выключить правый элемент.${DEMONSTRATION_ALERT}`,
            },
        }),
        ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
    },
} as Meta<BadgeProps>;

export { SandboxStory } from './sandbox';
export { BorderRadiusStory } from './borderRadius';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
export { TypesStory } from './types/index';
