import { StoryFn } from '@storybook/react-vite';
import { Checkbox, CheckboxProps } from '@core';
import { useState } from 'react';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const BorderRadiusStory: StoryFn<CheckboxProps> = (props) => {
    const [bool, setBool] = useState(false);
    return DisplayVariants({
        property: 'borderRadius',
        values: ['medium', 'max'],
        component: Checkbox,
        componentProps: {
            ...props,
            checked: bool,
            children: bool.toString(),
            onChange: (e) => setBool(e.currentTarget.checked),
        },
    });
};

setStoryParams(BorderRadiusStory, {
    title: 'Скругления',
    excludeArgs: ['borderRadius'],
});
