import { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { SwitcherProps } from '../../types';
import { Switcher } from '../../Switcher';

export const SizesStory: StoryFn<SwitcherProps> = (props) => {
    const [checked, setChecked] = useState(false);

    return DisplayVariants({
        property: 'size',
        values: ['small', 'medium', 'large'],
        component: Switcher,
        componentProps: {
            ...props,
            checked,
            onChange: (e) => setChecked(e.currentTarget.checked),
            children: 'Switcher',
        },
    });
};

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
