import { Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '@core';
import { useState } from 'react';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SizesStory: Story<CheckboxProps> = (props) => {
    const [bool, setBool] = useState(false);
    return DisplayVariants({
        property: 'size',
        values: ['small', 'medium', 'large'],
        component: Checkbox,
        componentProps: {
            ...props,
            checked: bool,
            children: bool.toString(),
            onChange: (e) => setBool(e.currentTarget.checked),
        },
    });
};

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
