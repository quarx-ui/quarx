import { Story } from '@storybook/react/types-6-0';
import { RadioButton, RadioButtonProps } from '@core';
import { useState } from 'react';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SizesStory: Story<RadioButtonProps> = (props) => {
    const [bool, setBool] = useState(false);

    return DisplayVariants({
        property: 'size',
        values: ['small', 'medium', 'large'],
        component: RadioButton,
        componentProps: {
            ...props,
            checked: bool,
            onChange: () => setBool((prev) => !prev),
        },
    });
};

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
