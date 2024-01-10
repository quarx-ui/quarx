import {
    OverScreenAppearance,
    OverScreenOrigin,
    OverScreenProps,
} from '@core';
import { convertOffsets } from './convertOffsets';
import { getMapStatusToStyles } from './mapStatusToStyles';
import { getOriginPositions } from './originPositions';
import { getDefaultTransitionStyles } from './mapToDefaultStyles';

export const getMapStyles = (
    node: HTMLElement | null,
    origin: OverScreenOrigin,
    appearance: OverScreenAppearance,
    offset: OverScreenProps['offset'] = 0,
) => {
    const originPositions = getOriginPositions(node);
    const convertedOffset = convertOffsets(offset);

    const mapStatusToStyles = getMapStatusToStyles(
        origin,
        convertedOffset,
        originPositions,
        appearance,
    );

    const transitionStyles = getDefaultTransitionStyles(
        origin,
        convertedOffset,
        originPositions,
        appearance,
    );

    return {
        mapStatusToStyles,
        transitionStyles,
    };
};
