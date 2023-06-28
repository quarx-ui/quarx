import React, { useRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants';
import { PeriodSelectedDates, DATE_PICKER_DISPLAY_TYPES } from '@core/src/experimental';
import { Button, useBooleanState } from '@core';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Div } from '@storybook/components';
import { DATE_PICKER_ARG_TYPES } from '@core/src/experimental/DatePicker/components/Block/storybook/utils';
import { PopupDatePickerProps } from '../types';
import { PopupDatePicker } from '..';

type StoryType = Omit<PopupDatePickerProps<PeriodSelectedDates>, 'onChange' | 'selected'>;

const defaultArgs: Omit<StoryType, 'anchor' | 'open'> = {
    display: DATE_PICKER_DISPLAY_TYPES.SINGLE,
    borderRadius: 'small',
    size: 'small',
    disableYearChanging: true,
    withTime: true,
};

export default {
    title: STORY_PATHS.core.components.experimental('DatePicker/wrappers/Popup'),
    component: PopupDatePicker,
    args: defaultArgs,
    argTypes: {
        popupProps: {
            table: {
                type: {
                    summary: 'PopupProps',
                    detail: `Описано в ${STORY_PATHS.core.components.system('Popup')}`,
                },
            },
            control: { type: 'none' },
        },
        ...DATE_PICKER_ARG_TYPES,
    },
    parameters: {
        actions: { disable: true },
        ...STORYBOOK_VIEWPORTS,
    },
};

export const Sandbox: Story<StoryType> = (props) => {
    const [pickedDates, setPickedDates] = useState<PeriodSelectedDates | undefined>(undefined);
    const [isOpen, { setFalse: close, setTrue: open }] = useBooleanState(false);
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
