import { Story } from '@storybook/react/types-6-0';
import { RadioButton, RadioButtonProps } from '@core';
import { Fragment } from 'react';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

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

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
