import { Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '@core';
import { useState } from 'react';
import { DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';

export const BooleanParamsStory: Story<CheckboxProps> = (props) => {
    const [bool, setBool] = useState(false);
    return DisplayVariantsMap({
        variants: {
            disabled: [true],
            indeterminate: [true],
        },
        direction: 'vertical',
        optionTitle: {
            isShown: false,
        },
        component: Checkbox,
        componentProps: {
            ...props,
            checked: bool,
            children: bool.toString(),
            onChange: (e) => setBool(e.currentTarget.checked),
        },
    });
};

BooleanParamsStory.storyName = 'Boolean параметры';
BooleanParamsStory.argTypes = excludeProp(['disabled', 'indeterminate']);
