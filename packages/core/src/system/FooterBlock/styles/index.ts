import { KeysFromUseStyles, makeStyles } from '@core';
import { FooterBlockStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { direction, size }: FooterBlockStyleParams,
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
}), { name: 'QxFooterBlock' });

export type FooterBlockStyleKeys = KeysFromUseStyles<typeof useStyles>
export type { FooterBlockStyleParams };
