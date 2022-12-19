import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Button } from '@core';
import { Case, Switch, SwitchProps } from '..';

export default {
    // title: STORY_PATHS.core.components.system('Switch'),
    // component: Switch,
    // argTypes: {
    //     value: {
    //         description: 'Текущий выбранный элемент. Каждому Case передается свой уникальный',
    //         options: ['false', 'true'],
    //         control: { type: 'select' },
    //     },
    // },
    // parameters: {
    //     actions: { disable: true },
    // },
    // args: { value: 'false' },
};

const Template: Story<SwitchProps> = ({ value }) => (
    <Button>
        <Switch value={value}>
            <Case value="false">
                <span>Текст при false</span>
            </Case>
            <Case value="true">
                <span>Текст при true</span>
            </Case>
        </Switch>
    </Button>
);

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';
