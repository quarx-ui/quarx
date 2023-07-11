import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Button } from '@core';
import { DatePickerBlock, SelectedDates } from '@core/src/experimental';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { DatePickerStoryType } from '../types';
import { isPicker } from '../../types';
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

setStoryParams(Sandbox, {
    title: 'Компонент',
    description,
});
