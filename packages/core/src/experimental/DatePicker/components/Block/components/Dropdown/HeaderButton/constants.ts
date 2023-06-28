import { DatePickerSize } from '@core/src/experimental';
import { CSSProperties } from 'react';

export const ARROW_SIZES: Record<DatePickerSize, Required<Pick<CSSProperties, 'width' | 'height'>>> = {
    small: {
        width: 16,
        height: 16,
    },
    medium: {
        width: 24,
        height: 24,
    },
    large: {
        width: 24,
        height: 24,
    },
};
