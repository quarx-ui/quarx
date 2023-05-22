import { DatePickerSize, typography } from '@core';
import {
    DATE_PICKER_DAY_SIZE_PX,
    OFFSET_MONTH_BLOCK,
    OFFSET_ROOT,
} from '@core/src/main/DatePicker/components/Block/utils/constants';

export const HEADER_TYPOGRAPHY: Record<DatePickerSize, Record<string, string | number>> = {
    small: typography.Text.M.Medium,
    medium: typography.Text.L.Medium,
    large: typography.Text.XL.Medium,
};

export const MONTH_TYPOGRAPHY: Record<DatePickerSize, Record<string, string | number>> = {
    small: typography.Text.M.Regular,
    medium: typography.Text.L.Regular,
    large: typography.Text.XL.Regular,
};

export const OFFSET_DAYS: Record<DatePickerSize, number> = {
    small: 4,
    medium: 10,
    large: 12,
};

export const WIDTH_BY_SIZE = (size: DatePickerSize) => DATE_PICKER_DAY_SIZE_PX[size] * 7 + OFFSET_DAYS[size] * 6 + (OFFSET_MONTH_BLOCK[size] - OFFSET_ROOT[size]) * 2;
