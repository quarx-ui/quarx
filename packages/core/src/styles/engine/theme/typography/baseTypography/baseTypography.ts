import { QX_SIZE } from '@core';
import { deepmerge } from '../../../utils';
import { createGetTypographyVariant } from '../helpers';
import { BaseTypography, CreateBaseTypographyOptions } from './types';
import {
    BASE_TYPOGRAPHY_TYPES,
    DEFAULT_FONT_SIZE,
    DEFAULT_HEADLINE_FONT_FAMILY,
    DEFAULT_TEXT_FONT_FAMILY,
} from './constants';

export const createBaseTypographyOptions: CreateBaseTypographyOptions = {
    fontFamily: {
        text: DEFAULT_TEXT_FONT_FAMILY,
        headline: DEFAULT_HEADLINE_FONT_FAMILY,
    },
    defaultFontSize: DEFAULT_FONT_SIZE,
};

export const createBaseTypography = (
    { overwrites, ...options }: Partial<CreateBaseTypographyOptions> = {},
): BaseTypography => {
    const {
        fontFamily: { text: textFF, headline: headlineFF },
        defaultFontSize,
    } = <CreateBaseTypographyOptions>deepmerge(createBaseTypographyOptions, options, { skipUndefined: true });

    const getTextVariant = createGetTypographyVariant(textFF, defaultFontSize);
    const getHeadlineVariant = createGetTypographyVariant(headlineFF, defaultFontSize);

    return deepmerge({
        [BASE_TYPOGRAPHY_TYPES.text]: {
            [QX_SIZE.xSmall]: getTextVariant(11, 1.45, 0.2),
            [QX_SIZE.small]: getTextVariant(12, 1.33, 0.2),
            [QX_SIZE.medium]: getTextVariant(14, 1.43),
            [QX_SIZE.large]: getTextVariant(16, 1.5, -0.1),
            [QX_SIZE.xLarge]: getTextVariant(20, 1.4, -0.2),
        },
        [BASE_TYPOGRAPHY_TYPES.headline]: {
            [QX_SIZE.xSmall]: getHeadlineVariant(20, 1.4),
            [QX_SIZE.small]: getHeadlineVariant(24, 1.33),
            [QX_SIZE.medium]: getHeadlineVariant(32, 1.25, -0.2),
            [QX_SIZE.large]: getHeadlineVariant(40, 1.2, -0.2),
            [QX_SIZE.xLarge]: getHeadlineVariant(48, 1.17, -0.4),
        },
    }, overwrites);
};

export const baseTypography: BaseTypography = createBaseTypography();
