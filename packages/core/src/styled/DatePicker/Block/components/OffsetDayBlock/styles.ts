import { KeysFromUseStyles, makeStyles, OffsetDayStyleParams } from '@core';
import { useMemo } from 'react';
import { DATE_PICKER_DAY_SIZE_PX, OFFSET_DAYS,
    getCustomHover,
    inlineSVGHover,
} from '../../utils';

export const useStyles = makeStyles(({ palette },
    { size, isLarge, isDayInPeriod, isDayLastInPeriod, isEqualDays, isHoveredPeriod, isWeekdayName,
        isDayInPeriodLarge, useIncreasedScopeDay }: Required<OffsetDayStyleParams>) => {
    const sizeDay = useMemo(() => DATE_PICKER_DAY_SIZE_PX[size], [size]);
    return ({
        offsetDayInPeriod: {
            backgroundColor: palette.colors.brand.surface,
        },
        offsetDay: [
            {
                height: sizeDay,
                width: '100%',
            },
            useIncreasedScopeDay && {
                marginTop: 4,
                marginLeft: 4,
            },
            ((isLarge ? isDayInPeriodLarge : isDayInPeriod) || isDayLastInPeriod)
            && !isEqualDays && !isWeekdayName && (isHoveredPeriod ? {
                backgroundImage: inlineSVGHover(sizeDay, OFFSET_DAYS[size]),
                ...getCustomHover(isLarge),
            } : {
                backgroundColor: palette.colors.brand.surface,
            }),
        ],
        offsetWeekdayName: {
            height: sizeDay,
            width: '100%',
        },
    });
}, { name: 'OffsetDayBlock' });

export type OffsetDayStyleKeys = KeysFromUseStyles<typeof useStyles>
