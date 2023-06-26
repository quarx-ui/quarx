import { KeysFromUseStyles, makeStyles, OffsetDayStyleParams, rgbToHex } from '@core';
import { useMemo } from 'react';
import { DATE_PICKER_DAY_SIZE_PX, OFFSET_DAYS,
    getCustomHover,
    inlineSVGHover,
} from '../../utils';

export const useStyles = makeStyles(({ palette },
    { size, isLarge, isDayInPeriod, isDayLastInPeriod, isEqualDays, isHoveredPeriod, isWeekdayName,
        isDayInPeriodLarge, useBigPressScope }: Required<OffsetDayStyleParams>) => {
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
            useBigPressScope && {
                marginTop: 4,
                marginLeft: 4,
            },
            ((isLarge ? isDayInPeriodLarge : isDayInPeriod) || isDayLastInPeriod)
            && !isEqualDays && !isWeekdayName && (isHoveredPeriod ? {
                backgroundImage: inlineSVGHover(sizeDay, OFFSET_DAYS[size], palette.border.secondary),
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
