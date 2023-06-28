import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { getDateFnsLocale } from '@core';
import { PeriodSelectedDates, DatePickerBlock } from '@core/src/experimental';
import { createStoryDescription } from '@core/storybook/utils';
import { DatePickerStoryType } from '../types';
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
