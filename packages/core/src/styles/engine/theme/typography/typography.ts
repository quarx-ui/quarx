import { CreateTypographyArg, Typography } from './types';
import { createBaseTypography } from './baseTypography';
import { deepmerge } from '../../utils';

export function createTypography({
    fontFamily,
    defaultFontSize,
    overwrites,
}: Partial<CreateTypographyArg> = {}): Typography {
    return deepmerge({
        base: createBaseTypography({
            defaultFontSize,
            fontFamily: typeof fontFamily === 'string'
                ? { text: fontFamily, headline: fontFamily }
                : fontFamily,
        }),
    }, overwrites);
}

export const typography = createTypography();
