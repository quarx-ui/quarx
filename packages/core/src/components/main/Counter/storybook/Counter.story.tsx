import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { Counter, CounterProps } from '..';

const defaultArgs: CounterProps = {
    children: 9,
    size: 'large',
    type: 'filled',
    color: 'brand',
    maxDigits: 2,
};

export default {
    title: STORY_PATHS.core.components.main('Counter'),
    component: Counter,
    args: defaultArgs,
    argTypes: {
        children: {},
        size: {},
        type: {},
        color: {},
        maxDigits: {},
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
} as Meta<CounterProps>;

export { SandboxStory } from './sandbox';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
export { TypesStory } from './types';
