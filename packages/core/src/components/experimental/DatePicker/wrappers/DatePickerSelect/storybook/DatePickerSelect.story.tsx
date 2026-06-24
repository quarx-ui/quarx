import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { defineCategory } from '@quarx-ui/core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { STORYBOOK_VIEWPORTS } from '@quarx-ui/core/storybook/constants';
import { PeriodSelectedDates, DATE_PICKER_DISPLAY_TYPES } from '@core/components/experimental';
import { Div } from 'storybook/internal/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
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
    title: 'core/components/experimental/DatePicker/wrappers/DatePickerSelect',
    tags: ['autodocs'],
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

const SelectedPreviewer = ({ selected }: {selected: PeriodSelectedDates}) => (
    <React.Fragment>
        {selected && Object.entries(selected)
            .map(([key, date]) => `${key}: ${(date as Date)?.toString()}\n`)}
    </React.Fragment>
);

export const Sandbox: StoryFn<StoryType> = (props) => {
    const [selectedPeriod, setSelectedPeriod] = useState<PeriodSelectedDates>({});
    return (
        <Div style={{ height: 1000 }}>
            <SelectedPreviewer selected={selectedPeriod} />
            <DatePickerSelect
                {...props}
                selected={selectedPeriod}
                onChange={setSelectedPeriod}
            />
        </Div>
    );
};

setStoryParams(Sandbox, {
    title: 'DatePicker c полем ввода значений',
});
