import React from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { designParams, excludeProp } from '@core/storybook/templateParams';
import { Counter, CounterColor, CounterProps, CounterSize, CounterType } from '.';
import { DisplayVariants } from '../../storybook/DisplayVariants';

const defaultArgs: CounterProps = {
    children: 9,
    size: 'large',
    type: 'outline',
    color: 'color1',
    maxDigits: 2,
};

export default {
    title: 'core/Counter',
    component: Counter,
    argTypes: {
        children: {
            description: 'Числовое значение',
        },
        size: {
            description: 'Размер компонента',
        },
        type: {
            description: 'Тип компонента',
        },
        color: {
            description: 'Цвет компонента',
        },
        maxDigits: {
            description: 'Максимальное количество цифр в счетчике,'
                + 'после превышения этого значения выводятся девятки со знаком "+" на конце',
        },
        ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
    },
    parameters: {
        design: designParams('https://www.figma.com/file/kqled9AjBtDMRhWKovsgYf/3.1%E3%83%BBControls?node-id=10341%3A159262'),
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<CounterProps> = (props) => <Counter {...props} />;

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

const TYPES: CounterType[] = ['filled', 'outline'];
const COLORS: CounterColor[] = ['color1', 'color2', 'warning', 'critical'];
const SIZES: CounterSize[] = ['small', 'large'];

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
