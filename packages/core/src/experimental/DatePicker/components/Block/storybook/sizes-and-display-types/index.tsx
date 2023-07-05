import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import {
    DATE_PICKER_DISPLAY_TYPES, DATE_PICKER_TIME_TYPES, DatePickerBlock, PeriodSelectedDates,
} from '@core/src/experimental';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { DatePickerStoryType } from '../types';
import description from './description.md';

export const SizesAndDisplayTypesStory: Story<DatePickerStoryType> = (props) => {
    const [selected, setSelected] = useState<PeriodSelectedDates>();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div>
                <h3 style={{ textAlign: 'center' }}>SINGLE</h3>
                {DisplayVariants({
                    property: 'size',
                    values: ['small', 'medium', 'large'],
                    component: DatePickerBlock,
                    componentProps: {
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setSelected,
                        selected,
                    },
                })}
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>DOUBLE</h3>
                {DisplayVariants({
                    property: 'size',
                    values: ['small', 'medium', 'large'],
                    component: DatePickerBlock,
                    componentProps: {
                        ...props,
                        display: DATE_PICKER_DISPLAY_TYPES.DOUBLE,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setSelected,
                        selected,
                    },
                })}
            </div>
        </div>
    );
};

SizesAndDisplayTypesStory.storyName = 'Размеры и типы отображения календаря';
SizesAndDisplayTypesStory.argTypes = excludeProp(['size', 'types']);
SizesAndDisplayTypesStory.parameters = createStoryDescription(description);