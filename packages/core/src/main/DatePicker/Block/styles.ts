import { KeysFromUseStyles, makeStyles, DatePickerStyleParams } from '@core';
import { useMemo } from 'react';
import { MONTH_TYPOGRAPHY, OFFSET_DAYS, OFFSET_MONTH_BLOCK } from './utils';
import {
    BORDER_SIZE_ROOT, DATE_PICKER_DAY_SIZE_PX,
} from './utils/constants';

// 12px 32px 8px 32px 8px 32px 8px 32px 8px 32px 8px 32px 8px 32px 12px gridTemplateColumns
// 32px 8px 32px 8px 32px 8px 32px 8px 32px 8px 32px 8px 32px weekGridTemplateColumns

export const useStyles = makeStyles((
    { palette, elevations, borderRadii },
    { isLarge, borderRadius, size, useIncreasedScopeDay }: Required<DatePickerStyleParams>,
) => {
    const sizeDay = useMemo(() => DATE_PICKER_DAY_SIZE_PX[size] + (useIncreasedScopeDay ? 4 : 0), [size,
        useIncreasedScopeDay]);
    const widthRoot = useMemo(() => {
        const oneMonthWidth = 7 * sizeDay + 6 * OFFSET_DAYS[size] + 2 * BORDER_SIZE_ROOT + 2 * OFFSET_MONTH_BLOCK[size];
        return isLarge ? 2 * oneMonthWidth : oneMonthWidth;
    }, [isLarge, size, sizeDay]);
    return ({
        root: {
            borderRadius: borderRadius === 'max' ? borderRadii.xLarge : borderRadii[borderRadius],
            boxSizing: 'border-box',
            background: palette.background.main,
            boxShadow: elevations.medium,
            width: widthRoot,
            ...MONTH_TYPOGRAPHY[size],
        },

        content: {
            display: 'flex',
            flexDirection: 'row',
        },
    });
}, { name: 'SxDatePicker' });

export type DatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
