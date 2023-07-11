import { DatePickerSize } from '@core/src/experimental';
import {
    DATE_PICKER_DAY_SIZE_PX,
    OFFSET_MONTH_BLOCK,
    OFFSET_ROOT,
} from '@core/src/experimental/DatePicker/components/Block/utils/constants';
import { Typography } from '@core/styles/engine/theme/typography';
import { CSSProperties } from 'react';

export const getHeaderTypography = (typography: Typography): Record<DatePickerSize, CSSProperties> => ({
    small: typography.base.headline.medium,
    medium: typography.base.headline.large,
    large: typography.base.headline.xLarge,
});

export const getMonthTypography = (typography: Typography): Record<DatePickerSize, CSSProperties> => ({
    small: typography.base.text.medium,
    medium: typography.base.text.large,
    large: typography.base.text.xLarge,
});

export const OFFSET_DAYS: Record<DatePickerSize, number> = {
    small: 4,
    medium: 10,
    large: 12,
};

export const WIDTH_BY_SIZE = (size: DatePickerSize) => DATE_PICKER_DAY_SIZE_PX[size] * 7 + OFFSET_DAYS[size] * 6
    + (OFFSET_MONTH_BLOCK[size] - OFFSET_ROOT[size]) * 2;
