import { KeysFromUseStyles, makeStyles, paramsToCss } from '@core';
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

        (direction === 'vertical' || direction === 'vertical-reverse') && {
            flexDirection: 'column',

            '& button:not(:last-of-type)': {
                marginBottom: 16,
            },
        },

        size === 'small' && {
            padding: 24,
        },
    ],
    successButtons: [
        {
            display: 'flex',

            'button + &': {
                paddingLeft: 16,
            },

            '& button:not(:last-of-type)': {
                marginRight: 16,
            },
        },
        paramsToCss(direction)({
            horizontal: {
                marginLeft: 'auto',
            },
            'horizontal-reverse': {
                marginRight: 'auto',
            },
        }),
    ],
}));

export type FooterBlockStyleKeys = KeysFromUseStyles<typeof useStyles>
export type { FooterBlockStyleParams };
