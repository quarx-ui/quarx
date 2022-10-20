import { KeysFromUseStyles, makeStyles } from '@core';
import { ModalFooterStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { direction, size }: ModalFooterStyleParams,
) => ({
    root: [
        {
            padding: 32,
            display: 'flex',
            color: palette.text.main,
        },

        direction === 'vertical' && {
            flexDirection: 'column',

            '& button:not(:last-of-type)': {
                marginBottom: 16,
            },
        },

        size === 'small' && {
            padding: 24,
        },
    ],
    successButtons: {
        display: 'flex',
        marginLeft: 'auto',

        'button + &': {
            paddingLeft: 16,
        },

        '& button:not(:last-of-type)': {
            marginRight: 16,
        },
    },
}), { name: 'QxModalFooter' });

export type ModalFooterStyleKeys = KeysFromUseStyles<typeof useStyles>
export type { ModalFooterStyleParams };
