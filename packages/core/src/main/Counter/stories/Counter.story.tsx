import React from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Counter, CounterColor, CounterProps, CounterSize, CounterType } from '..';

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
    argTypes: {
        children: {},
        size: {},
        type: {},
        color: {},
        maxDigits: {},
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<CounterProps> = (props) => <Counter {...props} />;

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

const TYPES: CounterType[] = ['filled', 'ghosted', 'white'];
const COLORS: CounterColor[] = ['brand', 'secondary', 'warning', 'danger', 'info', 'text'];
const SIZES: CounterSize[] = ['small', 'medium', 'large'];

export const Types: Story<CounterProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Counter,
    componentProps: props,
});

Types.storyName = 'Типы';
Types.argTypes = excludeProp(['type']);

export const Colors: Story<CounterProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLORS,
    component: Counter,
    componentProps: props,
});

Colors.storyName = 'Цвета';
Colors.argTypes = excludeProp(['color']);

export const Sizes: Story<CounterProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Counter,
    componentProps: props,
});

Sizes.storyName = 'Размеры';
Sizes.argTypes = excludeProp(['size']);

const variantsArray = [
    Types,
    Colors,
    Sizes,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});
