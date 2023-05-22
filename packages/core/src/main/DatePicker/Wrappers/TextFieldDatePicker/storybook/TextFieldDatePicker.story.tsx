/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants';
import { PeriodSelectedDates, DATE_PICKER_DISPLAY_TYPES,
    DatePickerProps } from '@core';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Div } from '@storybook/components';
import { TextFieldDatePicker } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker';

type StoryType = Omit<DatePickerProps<PeriodSelectedDates>, 'onChange' | 'selected'>;

const defaultArgs: StoryType = {
    display: DATE_PICKER_DISPLAY_TYPES.SINGLE,
    borderRadius: 'small',
    size: 'small',
    disableYearChanging: false,
    withTime: true,
};

export default {
    title: STORY_PATHS.core.components.main('DatePicker/wrappers/TextFieldDatePicker'),
    component: TextFieldDatePicker,
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
    parameters: {
        actions: { disable: true },
        ...STORYBOOK_VIEWPORTS,
    },
};

export const Sandbox: Story<StoryType> = (props) => {
    const [selectedPeriod, setSelectedPeriod] = useState<PeriodSelectedDates>({});
    // const [selectedPicker, setSelectedPicker] = useState<PickerSelectedDate>(undefined);
    return (
        <Div style={{ height: 1000 }}>
            {selectedPeriod && Object.values(selectedPeriod).map((date) => `${(date as Date)?.toString()}\n`)}
            <TextFieldDatePicker
                {...props}
                selected={selectedPeriod}
                onChange={setSelectedPeriod}
            />
            {/* {selectedPicker && selectedPicker?.toString()} */}
            {/* <TextFieldDatePicker */}
            {/*    {...props} */}
            {/*    selected={selectedPicker} */}
            {/*    onChange={setSelectedPicker} */}
            {/* /> */}
        </Div>
    );
};
