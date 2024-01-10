import { OverScreenAppearance, OverScreenOrigin, TransitionProps } from '@core';
import { getSlideStyles } from './slideStyles';
import { OffsetType } from './types';

export const getMapTypeToStyles = (
    origin: OverScreenOrigin,
    offset: OffsetType,
    originPositions: Record<OverScreenOrigin, string>,
): Partial<Record<OverScreenAppearance, TransitionProps['mapStatusToStyles']>> => ({
    slide: getSlideStyles(origin, offset, originPositions),
});

export const getMapStatusToStyles = (
    origin: OverScreenOrigin,
    offset: OffsetType,
    originPositions: Record<OverScreenOrigin, string>,
    appearance: OverScreenAppearance,
) => getMapTypeToStyles(origin, offset, originPositions)[appearance];
