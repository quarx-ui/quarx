import { changeOpacity, makeStyles } from '@core';
import {
    DATE_PICKER_DAY_SIZE_PX, getHeaderTypography,
    OFFSET_DAYS,
    OFFSET_MONTH_BLOCK,
    OFFSET_ROOT,
} from '../../../utils';
import { DatePickerRightSectionStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, typography },
    { size, countWeeksInMonth }: DatePickerRightSectionStyleParams,
) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        borderLeft: `1px solid ${palette.border.main}`,
    },
    badges: {
        margin: OFFSET_MONTH_BLOCK[size],
        maxHeight: (countWeeksInMonth + 1) * DATE_PICKER_DAY_SIZE_PX[size] + (countWeeksInMonth * OFFSET_DAYS[size]),
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    header: {
        padding: OFFSET_ROOT[size],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${palette.border.main}`,
        margin: 0,
    },
    headerText: {
        padding: '5px 10px',
        ...getHeaderTypography(typography)[size],
    },
    badge: {
        height: DATE_PICKER_DAY_SIZE_PX[size],
        '&:not(:last-of-type)': {
            marginBottom: OFFSET_DAYS[size],
        },
        '&:hover': {
            backgroundColor: changeOpacity(palette.colors.brand.hover, 0.08),
            cursor: 'pointer',
        },
    },
    badgeBackground: {
        backgroundColor: 'transparent',
    },
}));
