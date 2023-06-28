import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { SwitcherProps } from '../../types';
import { Switcher } from '../../Switcher';

export const SizesStory: Story<SwitcherProps> = (props) => {
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
