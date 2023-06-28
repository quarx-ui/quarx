import { KeysFromUseStyles, makeStyles } from '@core';
import { OffsetDayStyleParams } from '@core/src/experimental';
import { DATE_PICKER_DAY_SIZE_PX, OFFSET_DAYS,
    getCustomHover,
    inlineSVGHover,
} from '../../utils';

export const useStyles = makeStyles(({ palette },
    { size, isLarge, isDayInPeriod, isDayLastInPeriod, isEqualDays, isHoveredPeriod, isWeekdayName,
        isDayInPeriodLarge, bigPressScope }: Required<OffsetDayStyleParams>) => {
    const sizeDay = DATE_PICKER_DAY_SIZE_PX[size];
    const stableOffset = isWeekdayName && !isLarge;
    return ({
        root: [
            {
                height: sizeDay,
                width: '100%',
            },
            !stableOffset && bigPressScope && {
                marginTop: 4,
                marginLeft: 4,
            },
            !stableOffset && ((isLarge ? isDayInPeriodLarge : isDayInPeriod) || isDayLastInPeriod)
            && !isEqualDays && !isWeekdayName && (isHoveredPeriod ? {
                backgroundImage: inlineSVGHover(sizeDay, OFFSET_DAYS[size], palette.border.secondary),
                ...getCustomHover(isLarge),
            } : !stableOffset && {
                backgroundColor: palette.colors.brand.surface,
            }),
        ],
    });
});

export type OffsetDayStyleKeys = KeysFromUseStyles<typeof useStyles>
