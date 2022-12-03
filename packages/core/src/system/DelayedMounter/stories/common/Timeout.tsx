import { Story } from '@storybook/react/types-6-0';
import { DelayedMounterProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { timeoutDescription } from './descriptions';
import { StoryDelayedMounterProps } from './types';
import { Sandbox } from './Sandbox';

const TIMEOUTS = [250, 1000, 3000];

export const Timeout: Story<DelayedMounterProps> = (props) => DisplayVariants({
    component: Sandbox,
    title: {
        isShown: false,
    },
    componentProps: (_, value) => ({
        ...props,
        buttonText: value,
    } as StoryDelayedMounterProps),
    containerAlign: 'flex-start',
    property: 'timeout',
    values: TIMEOUTS,
});

Timeout.storyName = 'Продолжительность';
Timeout.parameters = {
    docs: {
        description: { story: timeoutDescription },
    },
};
