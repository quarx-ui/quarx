import React, { useRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Div } from '@storybook/components';
import { DATE_PICKER_ARG_TYPES } from '@core/components/experimental/DatePicker/components/Block/storybook/utils';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { Button, useBooleanState } from '@core';
import { STORYBOOK_VIEWPORTS } from '@quarx-ui/core/storybook/constants';
import { PeriodSelectedDates, DATE_PICKER_DISPLAY_TYPES } from '../../../../index';
import { DatePickerProps } from '../types';
import { DatePicker } from '..';

type StoryType = Omit<DatePickerProps<PeriodSelectedDates>, 'onChange' | 'selected'>;

const defaultArgs: Omit<StoryType, 'anchor' | 'open'> = {
    display: DATE_PICKER_DISPLAY_TYPES.SINGLE,
    borderRadius: 'small',
    size: 'small',
    disableYearChanging: true,
    withTime: true,
};

export default {
    title: STORY_PATHS.core.components.experimental('DatePicker/wrappers/Popup'),
    component: DatePicker,
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
    parameters: STORYBOOK_VIEWPORTS,
};

export const Sandbox: Story<StoryType> = (props) => {
    const [pickedDates, setPickedDates] = useState<PeriodSelectedDates | undefined>(undefined);
    const [isOpen, { setFalse: close, setTrue: open }] = useBooleanState(false);
    const anchor = useRef<HTMLButtonElement>(null);
    return (
        <Div style={{ height: 500 }}>
            {pickedDates && Object.values(pickedDates).map((date) => `${(date as Date).toString()}\n`)}
            <Button ref={anchor} onClick={open}>Открыть календарь</Button>
            <DatePicker
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

setStoryParams(Sandbox, {
    title: 'Всплывающий DatePicker',
});
