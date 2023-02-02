import { Story } from '@storybook/react/types-6-0';
import { RadioButton, RadioButtonProps } from '@core';
import { Fragment } from 'react';

export const SandboxStory: Story<RadioButtonProps> = ({ checked, ...props }) => (
    <Fragment>
        <RadioButton
            checked={checked}
            {...props}
        >
            <Fragment>{checked?.toString()}</Fragment>
        </RadioButton>
    </Fragment>
);
SandboxStory.storyName = 'Компонент';
