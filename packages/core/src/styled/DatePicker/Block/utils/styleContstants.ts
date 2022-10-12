import { DatePickerSize, typography } from '@core';

export const DROPDOWN_TYPOGRAPHY: Record<DatePickerSize, Record<string, string | number>> = {
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
