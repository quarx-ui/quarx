import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { DatePickerBlock, PickerSelectedDate } from '@core/src/experimental';
import { addDays } from 'date-fns';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { DatePickerStoryType } from '../types';
import description from './description.md';

export const AllowedDatesStory: Story<DatePickerStoryType> = (props) => {
    const [selected, setSelected] = useState<PickerSelectedDate | undefined>(undefined);
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
        }}
        >
            <DatePickerBlock
                allowedDates={{
                    start: addDays(new Date(), -7),
                    end: addDays(new Date(), 7),
                }}
                {...props}
                selected={selected}
                onChange={setSelected}
            />
            <DatePickerBlock
                allowedDates={{
                    start: addDays(new Date(), -7),
                }}
                {...props}
                selected={selected}
                onChange={setSelected}
            />
            <DatePickerBlock
                allowedDates={{
                    end: addDays(new Date(), 7),
                }}
                {...props}
                selected={selected}
                onChange={setSelected}
            />
        </div>
    );
};

setStoryParams(AllowedDatesStory, {
    title: 'Возможность выбора даты только в разрешенном периоде',
    description,
});
