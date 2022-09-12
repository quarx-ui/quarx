export const storybookLayout = (componentName: string): string => `import React from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { ${componentName} } from '../${componentName}';
import { ${componentName}Props } from '../types';

const defaultArgs = {};

export default {
    title: 'core/${componentName}',
    component: ${componentName},
    argTypes: {
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<${componentName}Props> = ({ ...props }) => {
    return (
        <${componentName} {...props} />
    );
};

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

const TYPES: [] = [];

export const Types: Story = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: () => <div />,
    componentProps: props,
});

Types.storyName = 'Типы';
Types.argTypes = excludeProp(['type']);

const variantsArray = [
    Types,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});
`;
