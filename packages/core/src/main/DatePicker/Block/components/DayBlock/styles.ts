import { DATE_PICKER_TIME_TYPES, KeysFromUseStyles, makeStyles, Palette } from '@core';
import { useMemo } from 'react';
import {
    getActiveDayStyles, getCommonAfter,
    getCommonBefore,
    DATE_PICKER_DAY_SIZE_PX, MONTH_TYPOGRAPHY } from '../../utils';
import { DayStylesParams } from '..';

const getBorderRadiusDayContainer = (numDay: number, borderRadius: number) => {
    switch (numDay) {
        case 0:
            return `${borderRadius}px 0px 0px ${borderRadius}px`;
        case 6:
            return `0px ${borderRadius}px ${borderRadius}px 0px`;
        default:
            return 0;
    }
};

const getBorderDayContainer = (numDay: number, palette: Palette) => {
    switch (numDay) {
        case 0:
            return { borderLeft: `1px dashed ${palette.border.secondary}` };
        case 6:
            return { borderRight: `1px dashed ${palette.border.secondary}` };
        default:
            return {};
    }
};

export const useStyles = makeStyles(({ palette, borderRadii },
    { size, borderRadius, numDay, isDayInPeriod, isDayTrusted, type, isLarge, isDayInPeriodLarge,
        isHoveredPeriod, isDayInHoveredPeriod, isEqualDays, isDayLastInPeriod, isDayFirstInPeriod, isPeriodSelected,
        isDayInViewableMonth, isDaySelected, isDayHovered, isSecondPickInPeriod, useIncreasedScopeDay,
    }: Required<DayStylesParams>) => {
    const sizeDay = useMemo(() => DATE_PICKER_DAY_SIZE_PX[size], [size]);

    const borderRadiusForDay = useMemo(() => (borderRadius === 'max' ? sizeDay / 2
        : +borderRadii[borderRadius].replace(/\D/g, '')), [borderRadii, borderRadius, sizeDay]);
    const borderRadiusForDashedPseudos = ['small', 'xSmall'].includes(borderRadius) ? borderRadiusForDay / 2
        : borderRadiusForDay;

    return ({
        dayPressContainer: useIncreasedScopeDay ? {
            padding: 4,
            width: '100%',
            ':hover': {
                cursor: 'pointer',
            },
        } : {},
        dayContainer: [
            {
                display: 'flex',
                height: sizeDay,
                width: sizeDay,
                boxSizing: 'border-box',
                borderRadius: getBorderRadiusDayContainer(numDay, borderRadiusForDay),
            },
            ((isLarge ? isDayInPeriodLarge : isDayInPeriod)) && isDayTrusted && (isHoveredPeriod ? {
                borderTop: `1px dashed ${palette.border.secondary}`,
                borderBottom: `1px dashed ${palette.border.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...getBorderDayContainer(numDay, palette),
            } : {
                backgroundColor: palette.colors.brand.surface,
            }),
            isDayInHoveredPeriod && !isEqualDays && !(isLarge && !isDayInViewableMonth) && (isDayLastInPeriod
                ? getCommonBefore(palette, borderRadiusForDay, sizeDay, {
                    borderTop: `1px dashed ${palette.border.secondary}`,
                    borderBottom: `1px dashed ${palette.border.secondary}`,
                    width: borderRadiusForDashedPseudos,
                }) : isDayFirstInPeriod && getCommonAfter(palette, borderRadiusForDay, sizeDay, {
                    borderTop: `1px dashed ${palette.border.secondary}`,
                    borderBottom: `1px dashed ${palette.border.secondary}`,
                    width: borderRadiusForDashedPseudos,
                    marginLeft: sizeDay - borderRadiusForDashedPseudos,
                })),
            isPeriodSelected && type === DATE_PICKER_TIME_TYPES.PERIOD && (isDayFirstInPeriod
                ? getCommonAfter(palette, borderRadiusForDay, sizeDay, {
                    backgroundColor: palette.colors.brand.surface,
                    border: 'none',
                }) : !isEqualDays && getCommonBefore(palette, borderRadiusForDay, sizeDay, {
                    backgroundColor: palette.colors.brand.surface,
                    border: 'none',
                })),
        ],
        day: [
            {
                width: sizeDay,
                height: sizeDay,
                background: 'none',
                border: 'none',
                boxSizing: 'border-box',
                zIndex: 100,
                borderRadius: borderRadii[borderRadius],
                ...MONTH_TYPOGRAPHY[size],
            },
            // eslint-disable-next-line no-nested-ternary
            !isDayInViewableMonth ? (isLarge ? {
                visibility: 'hidden',
            } : {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: palette.text.tertiary,
            }) : isDayTrusted ? {
                color: palette.text.main,
                ':hover': {
                    cursor: 'pointer',
                },
                '&:active': {
                    ...getActiveDayStyles(palette),
                },
            } : {
                color: palette.text.tertiary,
            },
            isDaySelected && {
                ...getActiveDayStyles(palette),
            },
            isDayHovered && (isSecondPickInPeriod ? {
                background: palette.colors.brand.alpha[8],
                color: palette.text.main,
            } : {
                background: palette.background.main,
                color: palette.text.main,
                border: `1px solid ${palette.border.secondary}`,
            }),
            isDayInPeriod && !isHoveredPeriod && {
                color: palette.text.main,
            },
        ],
    });
});

export type DayStyleKeys = KeysFromUseStyles<typeof useStyles>
