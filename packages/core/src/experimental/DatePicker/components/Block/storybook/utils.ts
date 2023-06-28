import { defineCategory } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { ArgTypes } from '@storybook/react';
import { DatePickerStoryType } from './types';

export const DATE_PICKER_ARG_TYPES: ArgTypes<DatePickerStoryType> = ({
    ...defineCategory<DatePickerStoryType>('Стилизация', {
        size: { control: { type: 'select' } },
        borderRadius: { control: { type: 'select' } },
        bigPressScope: { control: { type: 'boolean' } },
        innerStyles: { control: { type: 'none' } },
    }),
    ...defineCategory<DatePickerStoryType>('Функциональные параметры', {
        display: { control: { type: 'radio' } },
        withTime: { control: { type: 'boolean' } },
        viewingDate: { control: { type: 'date' } },
        allowedDates: {
            table: {
                type: {
                    summary: 'DatePickerAllowedDates',
                    detail: 'start?: Date, // Начало разрешенного периода\n'
                        + 'end?: Date, // Конец разрешенного периода\n',
                },
            },
            control: { type: 'none' },
        },
        yearsArr: { control: { type: 'none' } },
        disableYearChanging: { control: { type: 'boolean' } },
    }),
    ...defineCategory<DatePickerStoryType>('Текстовые параметры', {
        texts: {
            table: {
                type: {
                    summary: 'DatePickerTEXTS',
                    detail: "weekdays?: string[] = ['Пн',...,'Вс'], // Массив названий дней недели\n"
                        + "monthNames?: string[] = ['Январь',...,'Декабрь'], // Массив названий месяцев\n"
                        + 'time?: string = "Время", // Текст времени в footer при активном `withTime` \n'
                        + 'startTime?: string = "Начало", // label для input выбора времени начала периода\n'
                        + 'endTime?: string = "Конец", // label для input выбора времени конца периода\n',
                },
            },
            control: { type: 'none' },
        },
        locale: { control: { type: 'none' } },
    }),
    ...BASE_ARG_TYPES,
});
