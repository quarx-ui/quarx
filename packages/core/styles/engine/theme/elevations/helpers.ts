import { CSSObject } from '@emotion/react';
import { changeOpacity, valuesFromShadow } from '@core/styles/engine/utils';
import { CreateElevationArg, ElevationOption, ElevationOptions, ElevationStrings } from './types';

export const getPx = (value?: string | number) => typeof value === 'string' ? value : `${value ?? 0}px`;

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

export const getShadowsObj = (options: Required<CreateElevationArg>, color: string, inset?: boolean): ElevationStrings => ({
    xSmall: getShadows(options.xSmall, color, inset),
    small: getShadows(options.small, color, inset),
    medium: getShadows(options.medium, color, inset),
    large: getShadows(options.large, color, inset),
    xLarge: getShadows(options.xLarge, color, inset),
})

export const getShadowFromColor = (color: CSSObject['color'], option: ElevationOptions, paletteColor: string, inset?: boolean) => {
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
