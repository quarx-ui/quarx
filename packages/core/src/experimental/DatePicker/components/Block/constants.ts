import { valuesAsKeysFromArray } from '@core';

export const DEFAULT_TEXTS = {
    start: 'Начало',
    end: 'Конец',
    time: 'Время',
    errorValidateCalendarTime: 'Некорректное время',
};

export const DATE_PICKER_TIME_TYPES = valuesAsKeysFromArray(['PERIOD', 'PICKER']);
export const DATE_PICKER_DISPLAY_TYPES = valuesAsKeysFromArray(['SINGLE', 'DOUBLE']);
export const EDITABLE_PERIOD_PARTS = valuesAsKeysFromArray(['START', 'END']);
export const PERIOD_CHANGING_FLOW = valuesAsKeysFromArray(
    ['AFTER_DAY', 'AFTER_TIME_BADGE', 'AFTER_EACH', 'DEFAULT'] as const,
);
