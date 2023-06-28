import { KeysFromUseStyles, makeStyles } from '@core';
import { MONTH_TYPOGRAPHY, OFFSET_DAYS, DATE_PICKER_DAY_SIZE_PX, OFFSET_MONTH_BLOCK, WIDTH_BY_SIZE } from '../../utils';
import { DropdownDatePickerStyleParams } from './types';

export const useStyles = makeStyles(({ palette },
    { size, countWeeksInMonth }: Required<DropdownDatePickerStyleParams>) => {
    const sizeDay = DATE_PICKER_DAY_SIZE_PX[size];
    return ({
        root: {
            position: 'sticky',
            display: 'flex',
            top: 0,
            left: 0,
            backgroundColor: palette.background.main,
            flexDirection: 'column',
            height: (countWeeksInMonth + 1) * sizeDay + countWeeksInMonth * OFFSET_DAYS[size]
                + OFFSET_MONTH_BLOCK[size] * 2,
            width: WIDTH_BY_SIZE(size), // todo нестабильно, протестить
            zIndex: 100,
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },

        dropdownItem: {
            ...MONTH_TYPOGRAPHY[size],
            margin: `0 ${OFFSET_MONTH_BLOCK[size]}px`,
            padding: '8px 0',
            '&:not(:first-of-type)': {
                borderTop: `1px solid ${palette.border.secondary}`,
            },
        },
    });
});

export type DropdownDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
