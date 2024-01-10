import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import {
    DATE_PICKER_TIME_TYPES, DatePickerBlock, PeriodSelectedDates, PickerSelectedDate,
} from '@core/components/experimental';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { DatePickerStoryType } from '../types';
import description from './description.md';

export const BorderRadiusOnVariousTypesStory: Story<DatePickerStoryType> = (props) => {
    const [periodSelectedDates, setPeriodSelectedDates] = useState<PeriodSelectedDates>({});
    const [selectedDate, setSelectedDate] = useState<PickerSelectedDate>(undefined);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div>
                <h3 style={{ textAlign: 'center' }}>PERIOD</h3>
                {DisplayVariants({
                    property: 'borderRadius',
                    values: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
                    component: DatePickerBlock,
                    direction: 'vertical',
                    componentProps: {
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setPeriodSelectedDates,
                        selected: periodSelectedDates,
                    },
                })}
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>PICKER</h3>
                {DisplayVariants({
                    property: 'borderRadius',
                    values: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
                    component: DatePickerBlock,
                    direction: 'vertical',
                    componentProps: ({
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PICKER,
                        onChange: setSelectedDate,
                        selected: selectedDate,
                    }),
                })}
            </div>
        </div>
    );
};

setStoryParams(BorderRadiusOnVariousTypesStory, {
    title: 'Радиусы и типы выбора дат',
    description,
});
