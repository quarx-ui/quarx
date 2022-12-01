import { DelayedMounter, DelayedMounterProps } from '@core';

const defaultArgs: Partial<DelayedMounterProps> = {
    disableTimeout: false,
    timeout: 250,
};

export default {
    title: 'core/DelayedMounter',
    component: DelayedMounter,
    argTypes: {
        mounted: {},
        timeout: {},
        disableTimeout: {},
    },
    parameters: {
        actions: { disable: true },
        design: { disable: true },
    },
    args: defaultArgs,
};

export {
    Sandbox,
    Timeout,
    DisableTimout,
} from './common';
