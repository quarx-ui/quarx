import { KeysFromUseStyles, makeStyles } from '@core';
import { useMemo } from 'react';
import { MONTH_TYPOGRAPHY, OFFSET_DAYS, DATE_PICKER_DAY_SIZE_PX, OFFSET_MONTH_BLOCK } from '../../utils';
import { DropdownStyleParams } from './types';

export const useStyles = makeStyles(({ palette }, { size, countWeeksInMonth }: Required<DropdownStyleParams>) => {
    const sizeDay = useMemo(() => DATE_PICKER_DAY_SIZE_PX[size], [size]);
    return ({
        dropdown: {
            position: 'sticky',
            display: 'flex',
            top: 0,
            left: 0,
            backgroundColor: palette.background.main,
            flexDirection: 'column',
            height: (countWeeksInMonth + 1) * sizeDay + countWeeksInMonth * OFFSET_DAYS[size]
                + OFFSET_MONTH_BLOCK[size] * 2,
            width: '100%',
            zIndex: 100,
            overflow: 'auto',
            /* This is the magic bit for Firefox */
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                /* This is the magic bit for WebKit */
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
}, { name: 'DropdownDatePicker' });

export type DropdownDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>
