import { OverScreenOrigin, ownerWindow } from '@core';

const getNegativePos = (offset: number, size: number) => `-${(offset + size)}px`;
const getPositivePos = (size: number, offset: number) => `${size - offset}px`;

export const getOriginPositions = (node?: HTMLElement | null): Record<OverScreenOrigin, string> => {
    const container = ownerWindow(node);

    const containerWidth = container.innerWidth;
    const containerHeight = container.innerHeight;

    const width = node?.clientWidth ?? 0;
    const height = node?.clientHeight ?? 0;
    const offsetLeft = node?.offsetLeft;
    const offsetTop = node?.offsetTop;

    return {
        top: getNegativePos(offsetTop ?? containerHeight, height),
        left: getNegativePos(offsetLeft ?? containerWidth, width),
        right: getPositivePos(containerWidth, offsetLeft ?? 0),
        bottom: getPositivePos(containerHeight, offsetTop ?? 0),
    };
};
