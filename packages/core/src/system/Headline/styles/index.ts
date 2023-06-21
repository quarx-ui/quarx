import { KeysFromUseStyles, makeStyles, PaletteTextKey, typographyWeightToNumber } from '@core/styles';
import { HeadlineStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, typography },
    {
        size,
        fontWeight,
        color,
    }: HeadlineStyleParams,
) => ({
    root: [
        typography.base.headline[size],
        {
            fontWeight: typeof fontWeight === 'string' ? typographyWeightToNumber[fontWeight] : fontWeight,
            color: palette.text[color as PaletteTextKey] ?? color,
        },

    ],
}));

export type HeadlineStyleKeys = KeysFromUseStyles<typeof useStyles>;
