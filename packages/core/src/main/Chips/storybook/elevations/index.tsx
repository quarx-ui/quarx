import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { Chips, ChipsProps } from '@core';

const ELEVATIONS: boolean[] = [true, false];
export const ElevationsStory: Story<ChipsProps> = (props) => DisplayVariants({
    property: 'elevation',
    values: ELEVATIONS,
    component: Chips,
    componentProps: props,
});

ElevationsStory.storyName = 'Тени';
ElevationsStory.argTypes = excludeProp(['elevation']);
