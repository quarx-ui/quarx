import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { DatePickerBlock, PickerSelectedDate } from '@core/src/experimental';
import { addDays } from 'date-fns';
import { createStoryDescription } from '@core/storybook/utils';
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

AllowedDatesStory.storyName = 'Возможность выбора даты только в разрешенном периоде';
AllowedDatesStory.parameters = createStoryDescription(description);
