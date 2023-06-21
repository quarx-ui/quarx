import { KeysFromUseStyles, makeStyles, PaletteTextKey, typographyWeightToNumber } from '@core/styles';
import { TextStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, typography },
    {
        size,
        fontWeight,
        color,
    }: TextStyleParams,
) => ({
    root: [
        typography.base.text[size],
        {
            fontWeight: typeof fontWeight === 'string' ? typographyWeightToNumber[fontWeight] : fontWeight,
            color: palette.text[color as PaletteTextKey] ?? color,
        },

    ],
}));

export type BaseTypographyStyleKeys = KeysFromUseStyles<typeof useStyles>;
