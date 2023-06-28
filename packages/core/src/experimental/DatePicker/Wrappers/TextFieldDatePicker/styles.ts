import { KeysFromUseStyles, makeStyles } from '@core';

export const useStyles = makeStyles(() => ({
    splittedTextFields: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
}), { name: 'TextFieldDatePicker' });

export type TextFieldDatePickerStyleKeys = KeysFromUseStyles<typeof useStyles>;
