import { OverScreenAppearance, OverScreenOrigin, OverScreenProps, TransitionProps } from '@core';
import { useMemo } from 'react';

interface OffsetType {
    x: string,
    y: string,
}

const getMapOriginToSlideStyles = (offsetX: string, offsetY: string): Record<OverScreenOrigin, string> => ({
    top: `translate(${offsetX}, -100%)`,
    bottom: `translate(${offsetX}, 100%)`,
    right: `translate(100%, ${offsetY})`,
    left: `translate(-100%, ${offsetY})`,
});

const getSlideStyles = (
    origin: OverScreenOrigin,
    offsetX: string,
    offsetY: string,
): TransitionProps['mapStatusToStyles'] => {
    const exitedTranslate = getMapOriginToSlideStyles(offsetX, offsetY)[origin];
    const enteredTranslate = `translate(${offsetX}, ${offsetY})`;

    return ({
        exited: {
            transform: exitedTranslate,
            zIndex: -1,
            width: 0,
            height: 0,
        },
        exiting: { transform: exitedTranslate },
        entered: { transform: enteredTranslate },
        entering: { transform: enteredTranslate },
    });
};

const getMapTypeToStyles = (
    origin: OverScreenOrigin,
    offsetX: string,
    offsetY: string,
): Partial<Record<OverScreenAppearance, TransitionProps['mapStatusToStyles']>> => ({
    slide: getSlideStyles(origin, offsetX, offsetY),
});

const getMapTypeToDefaultStyles = (
    origin: OverScreenOrigin,
    offsetX: string,
    offsetY: string,
): Record<OverScreenAppearance, TransitionProps['styles']> => ({
    slide: {
        opacity: 1,
        transform: getMapOriginToSlideStyles(offsetX, offsetY)[origin],
    },
    fade: {
        transform: `translate(${offsetX}, ${offsetY})`,
    },
    none: {
        transform: `translate(${offsetX}, ${offsetY})`,
    },
});

export const convertOffsets = (value: string | number): OffsetType => {
    const [x = '0', y] = typeof value === 'string'
        ? value
            .replace(/(,? )|(, ?)|(, )/g, ' ')
            .split(' ')
        : [String(value)];

    return {
        x,
        y: y ?? x,
    };
};

export const useMapStyles = (
    origin: OverScreenOrigin,
    appearance: OverScreenAppearance,
    offset: OverScreenProps['offset'] = 0,
) => {
    const convertedOffset: OffsetType = useMemo(() => convertOffsets(offset), [offset]);

    const offsetX = `${convertedOffset.x}px`;
    const offsetY = `${convertedOffset.y}px`;

    const mapStatusToStyles = useMemo(() => getMapTypeToStyles(
        origin,
        offsetX,
        offsetY,
    )[appearance], [appearance, offsetX, offsetY, origin]);

    const transitionStyles = useMemo(() => getMapTypeToDefaultStyles(
        origin,
        offsetX,
        offsetY,
    )[appearance], [appearance, offsetX, offsetY, origin]);

    return {
        mapStatusToStyles,
        transitionStyles,
    };
};
