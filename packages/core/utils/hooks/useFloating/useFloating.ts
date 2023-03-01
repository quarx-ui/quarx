import deepEqual from 'deep-equal';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Axis, ClientRect, UseFloatingProps, UseFloatingResult } from './types';
import { ARRANGEMENTS, SIDES } from './constants';
import { flip, offset, shift } from './modifiers';
import {
    computeElementRect,
    createParentsList,
    getFloatingPosition,
    getOverflowParents,
    isHTMLElement,
    isPosition,
} from './utils';

const INITIAL_ANCHOR_COMPUTED_POSITION: Partial<ClientRect> = {
    x: undefined,
    y: undefined,
    top: undefined,
    left: undefined,
    height: undefined,
    width: undefined,
};

export const useFloating = ({
    open,
    anchor,
    floatingRef,
    placement = SIDES.bottom,
    arrangement = ARRANGEMENTS.absolute,
    disableOffset = false,
    disableFlip = false,
    disableShift = false,
    modifiersOptions,
    customModifiers,
}: UseFloatingProps): UseFloatingResult => {
    const [floatingPosition, setFloatingPosition] = useState<Record<Axis, number>>({ x: 0, y: 0 });
    const anchorComputedPosition = useRef<Partial<ClientRect>>(INITIAL_ANCHOR_COMPUTED_POSITION);

    const updateCoords = useCallback(() => {
        if (!floatingRef.current) {
            return;
        }

        const anchorIsPosition = isPosition(anchor);

        if (!anchorIsPosition && !anchor.current) {
            return;
        }

        const position = getFloatingPosition({
            placement,
            anchor: !anchorIsPosition ? anchor.current as HTMLElement : anchor,
            floating: floatingRef.current,
            arrangement,
            modifiers: [
                !disableOffset && offset((modifiersOptions ?? {}).offset),
                !disableFlip && flip((modifiersOptions ?? {}).flip),
                !disableShift && shift((modifiersOptions ?? {}).shift),
                ...(customModifiers ?? []),
            ],
        });

        setFloatingPosition(position);
    }, [
        anchor,
        placement,
        arrangement,
        floatingRef,
        disableOffset,
        disableFlip,
        disableShift,
        modifiersOptions,
        customModifiers,
        /* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
        (anchor as any).x,
        (anchor as any).y,
        (anchor as any).current,
        (floatingRef as any).current,
    ]);

    useEffect(() => {
        updateCoords();
    }, [updateCoords]);

    useEffect(() => {
        const rect = isPosition(anchor)
            ? anchor
            : computeElementRect(anchor.current, INITIAL_ANCHOR_COMPUTED_POSITION);

        if (deepEqual(rect, anchorComputedPosition.current)) { return; }
        anchorComputedPosition.current = rect;
        updateCoords();
    });

    useEffect(() => {
        if (!floatingRef.current) {
            return undefined;
        }

        const resizeObserver: ResizeObserver = new ResizeObserver(updateCoords);
        let anchorClippingParents: HTMLElement[] = [];
        let anchorParents: HTMLElement[] = [];
        if (!isPosition(anchor)) {
            if (!anchor.current) { return undefined; }
            anchorClippingParents = getOverflowParents(anchor.current) as HTMLElement[];
            anchorParents = createParentsList(anchor.current);
        }

        const clippingParents = [
            ...anchorClippingParents,
            ...getOverflowParents(floatingRef.current),
        ];
        const resizeObservableElements: HTMLElement[] = [
            ...anchorParents,
            ...clippingParents,
        ].filter(isHTMLElement);
        if (!isPosition(anchor) && anchor.current) {
            resizeObservableElements.push(anchor.current);
            resizeObservableElements.push(floatingRef.current);
        }

        const removeResizeListeners = () => {
            resizeObserver.disconnect();
            clippingParents.forEach((parent) => {
                parent.removeEventListener?.('resize', updateCoords);
                parent.removeEventListener?.('scroll', updateCoords);
            });
        };

        if (open) {
            resizeObservableElements.forEach((parent) => {
                resizeObserver.observe(parent);
            });
            clippingParents.forEach((parent) => {
                parent.addEventListener?.('resize', updateCoords);
                parent.addEventListener?.('scroll', updateCoords, { passive: true });
            });
        } else {
            removeResizeListeners();
        }
        return removeResizeListeners;
    }, [
        open,
        anchor,
        floatingRef,
        updateCoords,
    ]);

    return ({
        floating: { ...floatingPosition },
    });
};
