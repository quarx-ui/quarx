import { withUnit } from '@core/styles/engine/utils';
import {
    CreateElevationArg,
    ElevationItemsWithType,
    ElevationOption,
    ElevationOptions,
    ElevationOptionsWithSize,
} from './types';

export const getShadowItem = (options: ElevationOption | string, paletteColor: string, inset?: boolean) => {
    if (typeof options === 'string') {
        return options;
    }

    const {
        color = paletteColor,
    } = options;

    const x = withUnit(options.x);
    const y = withUnit(options.y);
    const b = withUnit(options.b);
    const s = withUnit(options.s);
    const localInset = (inset ?? options.inset) ? 'inset' : '';

    return [x, y, b, s, color, localInset]
        .filter(Boolean)
        .join(' ');
};

interface GetShadowsOptions {
    color: string;
    inset?: boolean;
    background?: string;
    border?: string;
}

export const getShadowsForSize = (
    defaultOptions: ElevationOptions,
    options: GetShadowsOptions,
) => {
    const {
        color,
        inset,
        border,
        background,
    } = options ?? {};

    const shadowItem = {
        boxShadow: '',
        border,
        background,
    };

    if (typeof defaultOptions === 'string') {
        shadowItem.boxShadow = getShadowItem(defaultOptions, color, inset);

        return shadowItem;
    }

    shadowItem.background = defaultOptions.backgroundColor ?? background;
    shadowItem.border = defaultOptions.border ?? border;

    if (Array.isArray(defaultOptions.shadow)) {
        shadowItem.boxShadow = defaultOptions.shadow
            .map((option) => getShadowItem(option, color, inset))
            .join(', ');
    } else {
        shadowItem.boxShadow = getShadowItem(defaultOptions.shadow, color, inset);
    }

    return shadowItem;
};

/* xSmall: getShadows(el.main.xSmall, options),
 * small: getShadows(el.main.small, options),
 * medium: getShadows(el.main.medium, options),
 * large: getShadows(el.main.large, options),
 * xLarge: getShadows(el.main.xLarge, options), */
const getShadowsBySizes = (defaultElevations: ElevationOptionsWithSize, options: GetShadowsOptions) => Object
    .entries(defaultElevations)
    .reduce((acc, [size, el]) => ({
        ...acc,
        [size]: getShadowsForSize(el, options),
    }), {});

/* main: getShadowsBySizes(elevationsWithSize, options),,
 * secondary: getShadowsBySizes(elevationsWithSize, options), */
export const getShadowsObj = (defaultOptions: CreateElevationArg, options: GetShadowsOptions): ElevationItemsWithType => Object
    .entries(defaultOptions)
    .reduce((acc, [type, elevationsWithSize]) => ({
        ...acc,
        [type]: getShadowsBySizes(elevationsWithSize, options),
    }), {} as ElevationItemsWithType);
