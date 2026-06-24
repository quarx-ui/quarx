import { StoryFn } from '@storybook/react-vite';
import { RadioButton, RadioButtonProps } from '@core';
import { Fragment } from 'react';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: StoryFn<RadioButtonProps> = ({ checked, ...props }) => (
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
