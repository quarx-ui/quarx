import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { SwitcherProps } from '../../types';
import { Switcher } from '../../Switcher';

export const DisabledParamStory: Story<SwitcherProps> = (props) => {
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

DisabledParamStory.storyName = 'Disabled параметр';
DisabledParamStory.argTypes = excludeProp(['disabled']);
