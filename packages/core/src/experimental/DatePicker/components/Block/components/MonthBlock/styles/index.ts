import { makeStyles } from '@core';
import {
    DATE_PICKER_DAY_SIZE_PX,
    OFFSET_MONTH_BLOCK,
    OFFSET_DAYS,
    getMonthTypography,
} from '../../../utils';
import { MonthBlockStyleParams } from './types';

export const useStyles = makeStyles(({ palette, typography },
    { size }: Required<MonthBlockStyleParams>) => {
    const sizeDay = DATE_PICKER_DAY_SIZE_PX[size];

    const weekGrid = `${sizeDay}px${` ${OFFSET_DAYS[size]}px ${sizeDay}px`.repeat(6)}`;

    return ({
        root: {
            display: 'grid',
            rowGap: OFFSET_DAYS[size],
            gridTemplateColumns: weekGrid,
            maxWidth: 'max-content',
            padding: OFFSET_MONTH_BLOCK[size],
            height: 'fit-content',
        },
        weekdayContainer: {
            width: sizeDay,
            height: sizeDay,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: palette.text.tertiary,
            ...getMonthTypography(typography)[size],
        },
    });
});
