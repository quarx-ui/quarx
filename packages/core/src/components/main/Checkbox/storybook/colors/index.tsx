import { Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps, PALETTE_COLORS } from '@core';
import { useState } from 'react';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const ColorsParamsStory: Story<CheckboxProps> = (props) => {
    const [bool, setBool] = useState(false);
    return DisplayVariants({
        property: 'color',
        values: Object.values(PALETTE_COLORS),
        component: Checkbox,
        componentProps: {
            ...props,
            checked: bool,
            children: bool.toString(),
            onChange: (e) => setBool(e.currentTarget.checked),
        },
    });
};

setStoryParams(ColorsParamsStory, {
    title: 'Цвета',
    excludeArgs: ['color'],
});
