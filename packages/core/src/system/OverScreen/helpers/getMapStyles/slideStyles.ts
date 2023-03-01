import { OverScreenOrigin, TransitionProps } from '@core';
import { OffsetType } from './types';

export const getMapOriginToSlideStyles = (
    offset: OffsetType,
    originPositions: Record<OverScreenOrigin, string>,
): Record<OverScreenOrigin, string> => {
    const { x, y } = offset;
    const {
        top,
        bottom,
        left,
        right,
    } = originPositions;

    return ({
        top: `translate(${x}, ${top})`,
        bottom: `translate(${x}, ${bottom})`,
        right: `translate(${right}, ${y})`,
        left: `translate(${left}, ${y})`,
    });
};

export const getSlideStylesByOrigin = (
    offset: OffsetType,
    originPositions: Record<OverScreenOrigin, string>,
    origin: OverScreenOrigin,
) => getMapOriginToSlideStyles(offset, originPositions)[origin];

export const getSlideStyles = (
    origin: OverScreenOrigin,
    offset: OffsetType,
    originPositions: Record<OverScreenOrigin, string>,
): TransitionProps['mapStatusToStyles'] => {
    const exitedTranslate = getSlideStylesByOrigin(offset, originPositions, origin);
    const enteredTranslate = `translate(${offset.x}, ${offset.y})`;

    const enteredStyles = { transform: enteredTranslate };
    const exitedStyles = { transform: exitedTranslate };

    return ({
        exited: {
            ...exitedStyles,
            opacity: 0,
            zIndex: -1,
        },
        exiting: exitedStyles,
        entered: enteredStyles,
        entering: enteredStyles,
    });
};

export const getDefaultSlideStyles = (
    origin: OverScreenOrigin,
    offset: OffsetType,
    originPositions: Record<OverScreenOrigin, string>,
) => ({
    opacity: 1,
    transform: getSlideStylesByOrigin(offset, originPositions, origin),
});
