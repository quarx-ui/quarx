import { Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '@core';
import { useState } from 'react';
import { DisplayVariantsMap } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

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

setStoryParams(BooleanParamsStory, {
    title: 'Boolean параметры',
    excludeArgs: ['disabled', 'indeterminate'],
});
