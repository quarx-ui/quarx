import { Story } from '@storybook/react/types-6-0';
import { DatePickerStoryType } from '@core/src/main/DatePicker/Block/storybook/types';
import React, { useState } from 'react';
import { Button, DatePickerBlock, isPicker, SelectedDates } from '@core';
import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

export const Sandbox: Story<DatePickerStoryType> = ({ ...props }) => {
    const [selected, setSelected] = useState<SelectedDates>(undefined);
    return (
        <React.Fragment>
            <Button
                onClick={() => (isPicker(selected) ? setSelected({}) : setSelected(undefined))}
                size="small"
            >
                {`Изменить тип на ${isPicker(selected) ? 'PERIOD' : 'PICKER'}`}
            </Button>
            {selected && (
                isPicker(selected)
                    ? `Selected date: ${selected.toString()}`
                    : Object.entries(selected).map(([key, date]) => `Date ${key}: ${date?.toString()}\n`)
            )}
            <DatePickerBlock
                {...props}
                selected={selected}
                onChange={setSelected}
            />
        </React.Fragment>
    );
};

Sandbox.storyName = 'Компонент';
Sandbox.parameters = {
    ...STORYBOOK_VIEWPORTS,
};
Sandbox.parameters = createStoryDescription(description);
