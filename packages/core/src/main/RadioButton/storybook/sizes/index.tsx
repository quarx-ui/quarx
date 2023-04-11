import { Story } from '@storybook/react/types-6-0';
import { RadioButton, RadioButtonProps } from '@core';
import { useState } from 'react';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';

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
SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
