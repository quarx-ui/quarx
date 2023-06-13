import { KeysFromUseStyles, makeStyles, paramsToCss, typography } from '@core';
import { BodyStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { size }: BodyStyleParams,
) => ({
    root: {
        width: '100%',
    },
    texts: {},
    title: paramsToCss(size)({
        small: typography.Text.M.Semibold,
        large: typography.Text.L.Semibold,
    }),
    description: [
        {
            textAlign: 'justify',
            margin: 0,
            color: palette.text.secondary,
        },
        paramsToCss(size)({
            small: typography.Text.M.Regular,
            large: typography.Text.L.Regular,
        }),
    ],

    actions: paramsToCss(size)({
        small: { marginTop: 16 },
        large: { marginTop: 20 },
    }),
}));

export type BodyStyleKeys = KeysFromUseStyles<typeof useStyles>;
