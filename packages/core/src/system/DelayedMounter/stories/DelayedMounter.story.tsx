import { DelayedMounter, DelayedMounterProps } from '@core';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';

const defaultArgs: Partial<DelayedMounterProps> = {
    disableTimeout: false,
    timeout: 250,
};

export default {
    title: STORY_PATHS.core.components.system('DelayedMounter'),
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
