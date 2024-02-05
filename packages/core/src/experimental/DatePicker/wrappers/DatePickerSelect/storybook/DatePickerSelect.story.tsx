import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants';
import { PeriodSelectedDates, DATE_PICKER_DISPLAY_TYPES, SelectedDates } from '@core/src/experimental';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Div } from '@storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';
import {
    isMultiple,
    isPeriod,
    isPicker,
    MultipleSelectedDates,
} from '@core/src/experimental/DatePicker/components/Block/types';
import { endOfMonth, isSameDay } from 'date-fns';
import { DatePickerSelectProps } from '../types';
import { DatePickerSelect } from '../DatePickerSelect';

type StoryType = Omit<DatePickerSelectProps<PeriodSelectedDates>, 'onChange' | 'selected'>;

const defaultArgs: StoryType = {
    display: DATE_PICKER_DISPLAY_TYPES.SINGLE,
    borderRadius: 'small',
    size: 'small',
    disableYearChanging: false,
    withTime: true,
    splittedPeriod: false,
    useTimeBadges: false,
    useExperimentalDateFieldValidation: false,
};

export default {
    title: STORY_PATHS.core.components.experimental('DatePicker/wrappers/DatePickerSelect'),
    component: DatePickerSelect,
    args: defaultArgs,
    argTypes: {
        component: {
            control: false,
            type: {
                required: false,
            },
        },
        ...defineCategory('Стилизация', {
            size: {
                control: { type: 'select' },
            },
            borderRadius: {
                control: { type: 'select' },
            },
        }),
        ...defineCategory('Функциональные параметры', {
            display: {
                control: { type: 'radio' },
            },
            withTime: {
                control: { type: 'boolean' },
            },
        }),
        ...BASE_ARG_TYPES,
    },
    parameters: STORYBOOK_VIEWPORTS,
};

const SelectedPreviewer = ({ selected }: {selected: SelectedDates}) => (
    <React.Fragment>
        {isPeriod(selected) && selected && Object.entries(selected)
            .map(([key, date]) => `${key}: ${(date as Date)?.toString()}\n`)}
        {isMultiple(selected) && selected.map((date) => date.toDateString())}
        {isPicker(selected) && selected}
    </React.Fragment>
);

export const Sandbox: Story<StoryType> = (props) => {
    const [selectedPeriod, setSelectedPeriod] = useState<MultipleSelectedDates>([]);
    // const [selectedPicker, setSelectedPicker] = useState<PickerSelectedDate>();
    return (
        <Div style={{ height: 1000 }}>
            <SelectedPreviewer selected={selectedPeriod} />
            <DatePickerSelect
                {...props}
                selected={selectedPeriod}
                onChange={setSelectedPeriod}
                allowedDates={(day) => isSameDay(day, endOfMonth(day))}
            />
            {/* <DatePickerSelect */}
            {/*    {...props} */}
            {/*    selected={selectedPicker} */}
            {/*    onChange={setSelectedPicker} */}
            {/*    allowedDates={{ */}
            {/*        start: new Date(2023, 7, 10), */}
            {/*        end: new Date(2023, 7, 20), */}
            {/*    }} */}
            {/* /> */}
        </Div>
    );
};

setStoryParams(Sandbox, {
    title: 'DatePicker c полем ввода значений',
});
