import { StoryFn } from '@storybook/react-vite';
import React, { useState } from 'react';
import { getDateFnsLocale } from '@core';
import { PeriodSelectedDates, DatePickerBlock } from '@core/components/experimental';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { DatePickerStoryType } from '../types';
import description from './description.md?raw';

export const FrenchDatePickerStory: StoryFn<DatePickerStoryType> = (props) => {
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

setStoryParams(FrenchDatePickerStory, {
    title: 'Возможность передачи locale из date-fns',
    description,
});
