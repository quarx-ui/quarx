import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Stack } from '..';
import { defaultArgs } from './defaultArgs';

export default {
    title: STORY_PATHS.core.components.system('Stack'),
    component: Stack,
    parameters: { actions: { disable: true } },
    args: defaultArgs,
    argTypes: {
        component: {
            control: false,
            type: {
                required: false,
            },
        },
        divider: {
            control: false,
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
};

export { SandboxStory } from './sandbox';
export { DirectionAndOrderStory } from './DirectionAndOrder';
export { WithDividerStory } from './WithDivider';
export { CustomComponentStory } from './CustomComponent';
export { defaultArgs } from './defaultArgs';
