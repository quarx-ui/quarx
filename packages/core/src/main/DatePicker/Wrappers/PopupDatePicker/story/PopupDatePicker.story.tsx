/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants';
import { Button, PeriodSelectedDates, useBooleanState } from '@core';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { PopupDatePicker } from '@core/src/main/DatePicker/Wrappers/PopupDatePicker';
import { Div } from '@storybook/components';
import {
    DATE_PICKER_DISPLAY_TYPES,
    DatePickerProps,
} from '../../../Block';

type StoryType = Omit<DatePickerProps<PeriodSelectedDates>, 'onChange' | 'selected'>;

const defaultArgs: StoryType = {
    display: DATE_PICKER_DISPLAY_TYPES.SINGLE,
    borderRadius: 'small',
    size: 'small',
    disableYearChange: true,
    withTime: true,
};

export default {
    title: STORY_PATHS.core.components.main('DatePicker/wrappers/Popup'),
    component: PopupDatePicker,
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
        ...STORYBOOK_VIEWPORTS(),
    },
};

export const Sandbox: Story<StoryType> = (props) => {
    const [pickedDates, setPickedDates] = useState<PeriodSelectedDates | undefined>(undefined);
    const { state: isOpen, setFalse: close, setTrue: open } = useBooleanState(false);
    const anchor = useRef<HTMLButtonElement>(null);
    return (
        <Div style={{ height: 500 }}>
            {pickedDates && Object.values(pickedDates).map((date) => `${(date as Date).toString()}\n`)}
            <Button ref={anchor} onClick={open}>Открыть календарь</Button>
            <PopupDatePicker
                {...props}
                open={isOpen}
                anchor={anchor}
                onClickAway={close}
                selected={pickedDates}
                onChange={setPickedDates}
            />
        </Div>
    );
};
