import { StoryFn } from '@storybook/react';
import { TimerCircle, TimerCircleProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import description from './description.md';

export const CircleSegmentsStory: StoryFn<TimerCircleProps> = (props) => DisplayVariantsMap({
    component: TimerCircle,
    variants: { startTime: [10, 50] },
    optionTitle: {
        isShown: false,
    },
    shownTitle: false,
    componentProps: {
        ...props,
        value: undefined,
        circleSegments: 10,
    },
});

setStoryParams(CircleSegmentsStory, {
    title: 'Количество сегментов в круге',
    description,
});
