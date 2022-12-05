import { Story } from '@storybook/react/types-6-0';
import { DelayedMounterProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Sandbox } from './Sandbox';
import { StoryDelayedMounterProps } from './types';

export const DisableTimout: Story<DelayedMounterProps> = (props) => DisplayVariants({
    component: Sandbox,
    title: {
        isShown: false,
    },
    componentProps: (property, value) => ({
        ...props,
        buttonText: value ? property : 'default',
    } as StoryDelayedMounterProps),
    property: 'disableTimeout',
    containerAlign: 'flex-start',
    values: [true, false],
});

DisableTimout.storyName = 'Отключение задержки';
