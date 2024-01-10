import { Meta } from '@storybook/react';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { Collapse, CollapseProps, DEFAULT_ENTER_ANIMATION_FUNCTION, DEFAULT_EXIT_ANIMATION_FUNCTION } from '..';

export default {
    title: STORY_PATHS.core.components.system('Collapse'),
    component: Collapse,
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
        ...excludeProp(['open', 'children']),
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
} as Meta<CollapseProps>;

export { SandboxStory } from './sandbox';
export { OrientationStory } from './orientation';
export { CollapsedSizeStory } from './collapsedSize';
