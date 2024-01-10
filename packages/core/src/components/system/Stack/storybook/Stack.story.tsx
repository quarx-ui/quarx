import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { defineCategory, excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { Stack, StackProps } from '..';
import { defaultArgs } from './defaultArgs';

export default {
    title: STORY_PATHS.core.components.system('Stack'),
    component: Stack,
    args: defaultArgs,
    argTypes: {
        component: {
            control: false,
            type: {
                required: false,
                name: 'other',
                value: '',
            },
        },
        divider: {
            control: 'boolean',
        },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
        children: {
            control: false,
        },
        ...defineCategory('Выравнивание', {
            justifyContent: {
                control: { type: 'select' },
            },
            alignItems: {
                control: { type: 'select' },
            },
        }),
    },
} as Meta<StackProps>;

export { SandboxStory } from './sandbox';
export { DirectionAndOrderStory } from './DirectionAndOrder';
export { WithDividerStory } from './WithDivider';
export { CustomComponentStory } from './CustomComponent';
export { defaultArgs } from './defaultArgs';
