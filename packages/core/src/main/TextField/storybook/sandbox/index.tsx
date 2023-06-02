import { useRef } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { TextField } from '../..';
import { defaultTextFieldStoryArgs } from '../args';
import { StoryTextFieldProps } from '../utils';

export const SandboxStory: Story<StoryTextFieldProps> = ({
    leftIconShown,
    rightIconShown,
    leftItem,
    rightItem,
    ...props
}) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <TextField
            {...props}
            leftItem={leftIconShown ? leftItem : undefined}
            rightItem={rightIconShown ? rightItem : undefined}
            inputRef={ref}
        />
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
    args: {
        ...defaultTextFieldStoryArgs,
        leftIconShown: true,
        rightIconShown: true,
    },
});
