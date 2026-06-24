import { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { SwitcherProps } from '../../types';
import { Switcher } from '../../Switcher';

export const DisabledParamStory: StoryFn<SwitcherProps> = (props) => {
    const [checked, setChecked] = useState(false);

    return DisplayVariants({
        property: 'disabled',
        title: {
            type: 'value',
            isShown: true,
            size: 'primary',
        },
        values: [false, true],
        component: Switcher,
        componentProps: {
            ...props,
            checked,
            onChange: (e) => setChecked(e.currentTarget.checked),
            children: 'Switcher',
        },
    });
};

setStoryParams(DisabledParamStory, {
    title: 'Disabled параметр',
    excludeArgs: ['disabled'],
});
