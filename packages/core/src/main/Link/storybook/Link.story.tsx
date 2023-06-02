/* eslint-disable jsx-a11y/anchor-is-valid */
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { DEMONSTRATION_ALERT } from '@core/storybook/constants';
import { Meta } from '@storybook/react';
import { LinkProps } from '@core';
import { Link } from '../Link';
import { defaultLinkArgs } from './constants';

export default {
    title: STORY_PATHS.core.components.main('Link'),
    component: Link,
    args: defaultLinkArgs,
    argTypes: {
        component: {
            control: false,
            type: {
                required: false,
                name: 'other',
                value: '',
            },
        },
        ...defineCategory('Для демонстрации', {
            showLeftItem: {
                description: `Показать левый элемент.${DEMONSTRATION_ALERT}`,
                control: { type: 'boolean' },
            },
            showRightItem: {
                description: `Показать правый элемент.${DEMONSTRATION_ALERT}`,
                control: { type: 'boolean' },
            },
        }),
        ...defineCategory('Стилизация', {
            underline: {
                control: { type: 'select' },
            },
            color: {
                control: { type: 'select' },
            },
            size: {
                control: { type: 'select' },
            },
            disabled: {},
        }),
        ...defineCategory('Внутренние элементы', {
            children: {},
            leftItem: {
                control: false,
            },
            rightItem: {
                control: false,
            },
        }),
        ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
    },
} as Meta<LinkProps>;

export { SandboxStory } from './sandbox';
export { ColorsStory } from './colors';
export { CustomComponentStory } from './customComponent';
export { CustomTextStylesStory } from './customTextStyles';
export { IconAsLinkStory } from './iconAsLink';
export { SizesStory } from './sizes';
export { UnderlinesStory } from './underlines';
export { UseInTextStory } from './useInText';
