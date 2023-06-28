import { RefObject, useEffect, useState } from 'react';
import { Position } from '@core';
import { getBoundingClientRect, isPosition } from '@core/utils/hooks/useFloating/utils';
import { DROPDOWN_WIDTH_PRESETS } from '../constants';
import { DropdownWidth } from '../types';

export interface DropdownWidths {
    /** Ширина Dropdown */
    width: number | string;

    /** Минимальная ширина Dropdown */
    minWidth: number | string;

    /** Максимальная ширина Dropdown */
    maxWidth: number | string;
}

export const DEFAULT_DROPDOWN_WIDTHS: DropdownWidths = {
    width: 'fit-content',
    minWidth: 'fit-content',
    maxWidth: 512,
};

const getElementWidth = (element: HTMLElement): number => (
    getBoundingClientRect(element).width
);

const calcDropdownPresetWidth = (
    anchor: RefObject<HTMLElement> | Position,
    width: DropdownWidth,
): DropdownWidths => {
    const positionedAnchor = isPosition(anchor);
    const isElement = !positionedAnchor && anchor.current;
    const isDefaultPreset = width === DROPDOWN_WIDTH_PRESETS.default;
    const isAnchorObservationPreset = width === DROPDOWN_WIDTH_PRESETS.anchor_observation;

    if (isElement && isDefaultPreset) {
        const anchorWidth = getElementWidth(anchor.current);
        return {
            width: 'fit-content',
            minWidth: anchorWidth,
            maxWidth: 512,
        };
    }

    if (isElement && isAnchorObservationPreset) {
        const anchorWidth = getElementWidth(anchor.current);
        return {
            width: anchorWidth,
            minWidth: anchorWidth,
            maxWidth: anchorWidth,
        };
    }

    return DEFAULT_DROPDOWN_WIDTHS;
};

const calcDropdownWidth = (
    anchor: RefObject<HTMLElement> | Position,
    width: number | DropdownWidth,
): DropdownWidths => {
    const isNumberPreset = typeof width === 'number';

    return !isNumberPreset
        ? calcDropdownPresetWidth(anchor, width)
        : {
            width,
            minWidth: width,
            maxWidth: width,
        };
};

export const useAdaptiveDropdownWidth = (
    anchor: RefObject<HTMLElement> | Position,
    width: number | DropdownWidth,
): DropdownWidths => {
    const [widths, setWidths] = useState<DropdownWidths>(DEFAULT_DROPDOWN_WIDTHS);

    useEffect(() => {
        const handler = () => {
            const actualWidths = calcDropdownWidth(anchor, width);
            setWidths(actualWidths);
        };

        if (!isPosition(anchor) && anchor.current) {
            const observer = new ResizeObserver(handler);
            observer.observe(anchor.current);
            return () => { observer.disconnect(); };
        }

        handler();
        return () => undefined;
    }, [
        width,
        anchor,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        (anchor as any)?.current,
    ]);

    return widths;
};
