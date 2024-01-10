import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { DATE_PICKER_TIME_TYPES, DatePickerBlock, PeriodSelectedDates } from '@core/components/experimental';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { DatePickerStoryType } from '../types';
import description from './description.md';

export const DisableYearStory: Story<DatePickerStoryType> = (props) => {
    const [selected, setSelected] = useState<PeriodSelectedDates | undefined>(undefined);
    return (
        <div>
            {DisplayVariants({
                property: 'disableYearChanging',
                values: [false, true],
                component: DatePickerBlock,
                componentProps: {
                    ...props,
                    type: DATE_PICKER_TIME_TYPES.PERIOD,
                    onChange: setSelected,
                    selected,
                },
            })}
        </div>
    );
};

setStoryParams(DisableYearStory, {
    title: 'Возможность изменения года',
    description,
});
