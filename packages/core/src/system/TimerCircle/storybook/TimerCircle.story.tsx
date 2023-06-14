import { Meta } from '@storybook/react';
import { TimerCircle, TimerCircleProps } from '@core';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { defineCategory } from '@core/storybook/templateParams';

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
