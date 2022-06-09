import {
    CreateElevationArg,
    CreateElevations,
    ElevationsCreateFc,
    ElevationOption,
    ElevationOptions,
    ElevationStrings
} from '@core/styles/engine/theme/elevations/types';
import { changeOpacity, valuesFromShadow } from '../../utils';
import { DARKEST } from '../palette';

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

export const getShadow = (options: ElevationOption | string, paletteColor: string) => {
    if (typeof options === 'string') {
        return options;
    }

    const {
        color = changeOpacity(paletteColor, 0.12),
    } = options;

    const x = getPx(options.x);
    const y = getPx(options.y);
    const b = getPx(options.b);
    const s = getPx(options.s);
    const inset = options.inset ? 'inset' : '';

    return [x, y, b, s, color, inset].join(' ');
}

export const getShadows = (options: ElevationOptions, color: string) => {
    if (Array.isArray(options)) {
        return options
            .map((option) => getShadow(option, color))
            .join(', ')
    }

    return getShadow(options, color);
}

const getShadowsObj = (options: Required<CreateElevationArg>, color: string): ElevationStrings => ({
    xSmall: getShadows(options.xSmall, color),
    small: getShadows(options.small, color),
    medium: getShadows(options.medium, color),
    large: getShadows(options.large, color),
    xLarge: getShadows(options.xLarge, color),
})

export const DEFAULT_ELEVATIONS = getShadowsObj(DEFAULT_ELEVATIONS_OBJ, DARKEST);

const getShadowFromColor = (color: string, option: ElevationOptions, paletteColor: string) => {
    if (typeof option === 'string') {
        return getShadow({ ...valuesFromShadow(option), color }, paletteColor);
    }

    if (Array.isArray(option)) {
        return option
            .map((optionItem) => getShadow({ ...optionItem, color }, paletteColor))
            .join(', ');
    }

    return getShadow({ ...option, color }, paletteColor);
}

export const createElevations: CreateElevations = (elevationsOps, palette) => {
    const paletteColor = (palette?.type === 'light'
        ? palette.text
        : palette?.background) ?? DARKEST

    const defaultOps = {
        ...DEFAULT_ELEVATIONS_OBJ,
        ...(elevationsOps ?? {}),
    }

    const create: ElevationsCreateFc = (color) => ({
        xSmall: getShadowFromColor(color, defaultOps.xSmall, paletteColor),
        small: getShadowFromColor(color, defaultOps.small, paletteColor),
        medium: getShadowFromColor(color, defaultOps.medium, paletteColor),
        large: getShadowFromColor(color, defaultOps.large, paletteColor),
        xLarge: getShadowFromColor(color, defaultOps.xLarge, paletteColor),
    });

    const elevations = getShadowsObj(defaultOps, paletteColor)

    return {
        create,
        ...DEFAULT_ELEVATIONS,
        ...elevations,
    }
}

export const elevations = createElevations();
