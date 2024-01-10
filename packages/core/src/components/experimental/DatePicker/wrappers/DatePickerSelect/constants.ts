import { Values, valuesAsKeysFromArray } from '@core';

export const ACTIVE_FIELD_TYPE = valuesAsKeysFromArray(['START', 'END']);

export type ActiveFieldType = Values<typeof ACTIVE_FIELD_TYPE>;

export const DEFAULT_TEXTS = {
    errorByDisallowedPickerDate: 'Выбранная дата вне разрешенного диапазона',
    errorByValidateFirstDate: 'Некорректная дата начала периода',
    errorByValidateLastDate: 'Некорректная дата конца периода',
    errorByValidateSelectedPickerDate: 'Некорректная дата',
    errorByEndDateBeforeStartDate: 'Дата конца периода раньше начала периода',
    errorByDisallowedStartDate: 'Дата начала вне разрешенного диапазона',
    errorByDisallowedEndDate: 'Дата конца вне разрешенного диапазона',
};
