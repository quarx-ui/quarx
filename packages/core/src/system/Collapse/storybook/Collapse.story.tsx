import { Meta } from '@storybook/react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { Collapse, CollapseProps, DEFAULT_ENTER_ANIMATION_FUNCTION, DEFAULT_EXIT_ANIMATION_FUNCTION } from '..';

export default {
    title: STORY_PATHS.core.components.system('Collapse'),
    component: Collapse,
    parameters: { open: { disable: true }, children: { disable: true } },
    args: {
        open: false,
        easing: {
            enter: DEFAULT_ENTER_ANIMATION_FUNCTION,
            exit: DEFAULT_EXIT_ANIMATION_FUNCTION,
        },
        timeout: 200,
        orientation: 'vertical',
        collapsedSize: 0,
        TransitionProps: {},
    },
    argTypes: {
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
        open: {
            table: {
                disable: true,
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<CollapseProps>;

export { SandboxStory } from './sandbox';
export { OrientationStory } from './orientation';
export { CollapsedSizeStory } from './collapsedSize';
