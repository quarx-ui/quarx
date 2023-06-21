import { KeysFromUseStyles, makeStyles, PaletteTextKey, typographyWeightToNumber } from '@core/styles';
import { BaseTypographyStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, typography },
    {
        type,
        size,
        fontWeight,
        color,
    }: BaseTypographyStyleParams,
) => ({
    root: [
        typography.base[type][size],
        {
            fontWeight: typeof fontWeight === 'string' ? typographyWeightToNumber[fontWeight] : fontWeight,
            color: palette.text[color as PaletteTextKey] ?? color,
        },

    ],
}));

export type BaseTypographyStyleKeys = KeysFromUseStyles<typeof useStyles>;
