import {
    CreateElevationArg,
    CreateElevations,
    ElevationsColorFc,
    ElevationOption,
    ElevationOptions,
    ElevationStrings
} from '@core/styles/engine/theme/elevations/types';
import { changeOpacity, valuesFromShadow } from '../../utils';
import { DARKEST } from '../palette';
import { CSSObject } from '@emotion/react';

const getDefaultColor = (opacity: number) => changeOpacity(DARKEST, opacity / 100)

export const DEFAULT_ELEVATIONS_OBJ: Required<CreateElevationArg> = {
    xSmall: {
        b: 1,
    },
    small: [
        {
            y: 1,
            b: 1,
            color: getDefaultColor(8),
        },
        {
            b: 1,
        },
    ],
    medium: [
        {
            y: 2,
            b: 2,
            color: getDefaultColor(8),
        },
        {
            y: 4,
            b: 12,
            color: getDefaultColor(4),
        },
    ],
    large: [
        {
            y: 8,
            b: 8,
            color: getDefaultColor(4),
        },
        {
            y: 4,
            b: 12,
            color: getDefaultColor(8),
        },
    ],
    xLarge: [
        {
            y: 2,
            b: 4,
            color: getDefaultColor(4),
        },
        {
            y: 12,
            b: 16,
        }
    ]
}

const getPx = (value?: string | number) => typeof value === 'string' ? value : `${value ?? 0}px`;

export const getShadow = (options: ElevationOption | string, paletteColor: CSSObject['color'], inset?: boolean) => {
    if (typeof options === 'string') {
        return options;
    }

    const {
        color = changeOpacity(paletteColor as string, 0.12),
    } = options;

    const x = getPx(options.x);
    const y = getPx(options.y);
    const b = getPx(options.b);
    const s = getPx(options.s);
    const localInset = (inset ?? options.inset) ? 'inset' : '';

    return [x, y, b, s, color, localInset]
        .filter((el) => el)
        .join(' ');
}

export const getShadows = (options: ElevationOptions, color: string, inset?: boolean) => {
    if (Array.isArray(options)) {
        return options
            .map((option) => getShadow(option, color, inset))
            .join(', ')
    }

    return getShadow(options, color, inset);
}

const getShadowsObj = (options: Required<CreateElevationArg>, color: string, inset?: boolean): ElevationStrings => ({
    xSmall: getShadows(options.xSmall, color, inset),
    small: getShadows(options.small, color, inset),
    medium: getShadows(options.medium, color, inset),
    large: getShadows(options.large, color, inset),
    xLarge: getShadows(options.xLarge, color, inset),
})

export const DEFAULT_ELEVATIONS = getShadowsObj(DEFAULT_ELEVATIONS_OBJ, DARKEST);

const getShadowFromColor = (color: CSSObject['color'], option: ElevationOptions, paletteColor: string, inset?: boolean) => {
    if (typeof option === 'string') {
        return getShadow({ ...valuesFromShadow(option), color: color as string }, paletteColor, inset);
    }

    if (Array.isArray(option)) {
        return option
            .map((optionItem) => getShadow({ ...optionItem, color: color as string }, paletteColor, inset))
            .join(', ');
    }

    return getShadow({ ...option, color: color as string }, paletteColor, inset);
}

export const createElevations: CreateElevations = (elevationsOps, palette) => {
    const paletteColor = (palette?.type === 'light'
        ? palette.text
        : palette?.background) ?? DARKEST

    const defaultOps = {
        ...DEFAULT_ELEVATIONS_OBJ,
        ...(elevationsOps ?? {}),
    }

    const setColor: ElevationsColorFc = (color) => ({
        xSmall: getShadowFromColor(color, defaultOps.xSmall, paletteColor),
        small: getShadowFromColor(color, defaultOps.small, paletteColor),
        medium: getShadowFromColor(color, defaultOps.medium, paletteColor),
        large: getShadowFromColor(color, defaultOps.large, paletteColor),
        xLarge: getShadowFromColor(color, defaultOps.xLarge, paletteColor),
        inset: {
            xSmall: getShadowFromColor(color, defaultOps.xSmall, paletteColor, true),
            small: getShadowFromColor(color, defaultOps.small, paletteColor, true),
            medium: getShadowFromColor(color, defaultOps.medium, paletteColor, true),
            large: getShadowFromColor(color, defaultOps.large, paletteColor, true),
            xLarge: getShadowFromColor(color, defaultOps.xLarge, paletteColor, true),
        },
    });

    const elevations = getShadowsObj(defaultOps, paletteColor)

    return {
        setColor,
        ...DEFAULT_ELEVATIONS,
        ...elevations,
        inset: getShadowsObj(defaultOps, paletteColor, true),
    }
}

export const elevations = createElevations();
