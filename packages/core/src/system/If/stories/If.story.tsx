import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import styled from '@emotion/styled';
/* import { STORY_PATHS } from '@quarx-ui/storybook/utils'; */
import { If, IfProps } from '..';

/*
export default {
    title: STORY_PATHS.core.components.system('If'),
    component: If,
    argTypes: {
        condition: {
            description: 'Условие отображения',
            control: 'boolean',
        },
    },
    args: { condition: true },
    parameters: {
        actions: { disable: true },
    },
};
*/

const Div = styled('div')({
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
});

const Template: Story<IfProps> = ({ ...props }) => (
    <Div>
        <If {...props}>
            <span>Hello, World!</span>
        </If>
    </Div>
);

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';
