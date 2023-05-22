import { Story } from '@storybook/react/types-6-0';
import { DatePickerStoryType } from '@core/src/main/DatePicker/Block/storybook/types';
import React, { useState } from 'react';
import { DatePickerBlock, getDateFnsLocale, PeriodSelectedDates } from '@core';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

export const FrenchDatePickerStory: Story<DatePickerStoryType> = (props) => {
    const [selected, setSelected] = useState<PeriodSelectedDates>();
    return (
        <DatePickerBlock
            {...props}
            selected={selected}
            onChange={setSelected}
            viewingDate={new Date()}
            locale={getDateFnsLocale('fr')}
            texts={{
                startTime: 'Début',
                endTime: 'Fin',
                time: 'Temps',
            }}
        />
    );
};

FrenchDatePickerStory.storyName = 'Возможность передачи locale из date-fns';
FrenchDatePickerStory.parameters = createStoryDescription(description);
