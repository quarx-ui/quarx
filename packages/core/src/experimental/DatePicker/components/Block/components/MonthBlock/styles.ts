import { KeysFromUseStyles, makeStyles } from '@core';
import { DATE_PICKER_DAY_SIZE_PX, OFFSET_MONTH_BLOCK, MONTH_TYPOGRAPHY, OFFSET_DAYS } from '../../utils';
import { MonthBlockStyleProps } from './types';

export const useStyles = makeStyles(({ palette },
    { size }: Required<MonthBlockStyleProps>) => {
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
            ...MONTH_TYPOGRAPHY[size],
        },
    });
});

export type MonthBlockStyleKeys = KeysFromUseStyles<typeof useStyles>
