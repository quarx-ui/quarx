import { KeysFromUseStyles, makeStyles, paramsToCss } from '@core';
import { BodyStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, typography },
    { size }: BodyStyleParams,
) => ({
    root: {
        width: '100%',
    },
    texts: {},
    title: [
        paramsToCss(size)({
            small: typography.base.text.medium,
            large: typography.base.text.large,
        }),
        {
            wordBreak: 'break-word',
            fontWeight: 600,
        },
    ],
    description: [
        {
            wordBreak: 'break-word',
            margin: 0,
            color: palette.text.secondary,
        },
        paramsToCss(size)({
            small: typography.base.text.medium,
            large: typography.base.text.large,
        }),
    ],

    actions: paramsToCss(size)({
        small: { marginTop: 16 },
        large: { marginTop: 20 },
    }),
}));

export type BodyStyleKeys = KeysFromUseStyles<typeof useStyles>;
