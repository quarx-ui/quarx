/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants/STORYBOOK_VIEWPORTS';
import { addDays } from 'date-fns';
import { getDateFnsLocale } from '@core';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { PopupDatePicker } from '@core/src/main/DatePicker/Wrappers/PopupDatePicker';
import { DatePickerBlock,
    DATE_PICKER_DISPLAY_TYPES,
    DATE_PICKER_TIME_TYPES,
    DatePickerProps, PeriodTypeDates,
    PickerTypeDates,
} from '../../../Block';

type StoryType = Omit<DatePickerProps, 'onChange' | 'pickedDates'>;

const defaultArgs: StoryType = {
    type: DATE_PICKER_TIME_TYPES.PERIOD,
    display: DATE_PICKER_DISPLAY_TYPES.SINGLE,
    borderRadius: 'small',
    size: 'small',
    disableYearChange: true,
    withTime: true,
};

export default {
    title: STORY_PATHS.core.components.main('DatePicker/wrappers/Popup'),
    component: DatePickerBlock,
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
            type: {
                control: { type: 'radio' },
            },
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
        ...STORYBOOK_VIEWPORTS(),
    },
};

export const Sandbox: Story<StoryType> = (props) => {
    const [pickedDates, setPickedDates] = useState<PeriodTypeDates | undefined>(undefined);
    return (
        <React.Fragment>
            {pickedDates && Object.values(pickedDates).map((date) => `${(date as Date).toString()}\n`)}
            <PopupDatePicker<'PERIOD', PeriodTypeDates>
                pickedDates={pickedDates}
                onChange={setPickedDates}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                type={DATE_PICKER_TIME_TYPES.PERIOD}
                {...props}
            />
        </React.Fragment>
    );
};
