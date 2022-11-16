import { KeysFromUseStyles, makeStyles, typography } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { HeaderBlockStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { size }: HeaderBlockStyleParams,
) => ({
    root: [
        {
            display: 'flex',
            justifyContent: 'space-between',
            color: palette.text.main,
        },

        paramsToCss(size)({
            small: {
                padding: '20px 24px',
            },
            medium: {
                padding: '24px 32px 20px',
            },
        }),
    ],

    content: {},

    title: paramsToCss(size)({
        small: typography.Headline.S.Semibold,
        medium: typography.Headline.M.Semibold,
    }),

    subTitle: paramsToCss(size)({
        small: typography.Text.L.Regular,
        medium: typography.Text.XL.Regular,
    }),

    closeButton: {
        marginLeft: 8,
        color: palette.colors.secondary.default,
    },
}));

export type HeaderBlockStyleKeys = KeysFromUseStyles<typeof useStyles>
export type { HeaderBlockStyleParams };
