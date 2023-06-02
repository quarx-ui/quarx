import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Chips, ChipsProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';

const ELEVATIONS: boolean[] = [true, false];
export const ElevationsStory: Story<ChipsProps> = (props) => DisplayVariants({
    property: 'elevation',
    values: ELEVATIONS,
    component: Chips,
    componentProps: props,
});

setStoryParams(ElevationsStory, {
    title: 'Тени',
    excludeArgs: ['elevation'],
});
