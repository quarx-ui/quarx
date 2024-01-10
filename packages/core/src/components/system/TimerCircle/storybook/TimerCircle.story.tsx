import { Meta } from '@storybook/react';
import { TimerCircle, TimerCircleProps } from '@core';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { defineCategory } from '@quarx-ui/core/storybook/templateParams';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';

const defaultArgs: TimerCircleProps = {
    circleSegments: 10,
    value: 5,
};

export default {
    title: STORY_PATHS.core.components.system('TimerCircle'),
    component: TimerCircle,
    args: defaultArgs,
    argTypes: {
        circleSegments: {},
        value: {},
        ...defineCategory('Внутренний таймер', {
            startTime: {},
            endTime: {},
            interval: {},
            disabled: {},
            onStart: {},
            onFinish: {},
        }),
        ...BASE_ARG_TYPES,
    },
} as Meta<TimerCircleProps>;

export { SandboxStory } from './sandbox';
export { TimerStory } from './timer';
export { CircleSegmentsStory } from './circleSegments';
