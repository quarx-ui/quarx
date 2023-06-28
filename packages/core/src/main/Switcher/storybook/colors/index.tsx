import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { PALETTE_COLORS } from '@core/styles';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { SwitcherProps } from '../../types';
import { Switcher } from '../../Switcher';

export const ColorsStory: Story<SwitcherProps> = (props) => {
    const [checked, setChecked] = useState(false);

    return DisplayVariants({
        property: 'color',
        values: Object.values(PALETTE_COLORS),
        component: Switcher,
        componentProps: {
            ...props,
            checked,
            onChange: (e) => setChecked(e.currentTarget.checked),
            children: 'Switcher',
        },
    });
};

setStoryParams(ColorsStory, {
    title: 'Цветовая палитра',
    excludeArgs: ['color'],
});
