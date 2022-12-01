import { OverScreenAppearance, OverScreenOrigin, TransitionProps } from '@core';
import { getDefaultSlideStyles } from './slideStyles';
import { OffsetType } from './types';

export const getMapTypeToDefaultStyles = (
    origin: OverScreenOrigin,
    offset: OffsetType,
    originPositions: Record<OverScreenOrigin, string>,
): Record<OverScreenAppearance, TransitionProps['styles']> => {
    const commonStyles = {
        transform: `translate(${offset.x}, ${offset.y})`,
    };

    return ({
        slide: getDefaultSlideStyles(origin, offset, originPositions),
        fade: commonStyles,
        none: commonStyles,
    });
};

export const getDefaultTransitionStyles = (
    origin: OverScreenOrigin,
    offset: OffsetType,
    originPositions: Record<OverScreenOrigin, string>,
    appearance: OverScreenAppearance,
) => getMapTypeToDefaultStyles(origin, offset, originPositions)[appearance];
