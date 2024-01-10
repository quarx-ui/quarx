import { KeysFromUseStyles, makeStyles, TYPOGRAPHY_WEIGHT } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { HeaderBlockStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, typography },
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

    title: [
        paramsToCss(size)({
            small: typography.base.headline.small,
            medium: typography.base.headline.medium,
        }),
        { fontWeight: TYPOGRAPHY_WEIGHT.semibold },
    ],

    subTitle: paramsToCss(size)({
        small: typography.base.text.large,
        medium: typography.base.text.xLarge,
    }),

    closeButton: {
        marginLeft: 8,
        color: palette.colors.secondary.default,
    },
}));

export type HeaderBlockStyleKeys = KeysFromUseStyles<typeof useStyles>
export type { HeaderBlockStyleParams };
