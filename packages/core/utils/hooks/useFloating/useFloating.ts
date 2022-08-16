import { useCallback, useEffect, useState } from 'react';
import { Axis, UseFloatingProps, UseFloatingResult } from './types';
import { ARRANGEMENTS, SIDES } from './constants';
import { getFloatingPosition, getOverflowParents, isPosition } from './utils';
import { flip, offset, shift } from './modifiers';

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

    const updateCoords = useCallback(() => {
        if (!floatingRef.current) { return; }

        const anchorIsPosition = isPosition(anchor);

        if (!anchorIsPosition && !anchor.current) { return; }

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
        /* eslint-enable react-hooks/exhaustive-deps, @typescript-eslint/no-explicit-any */
    ]);

    useEffect(() => {
        updateCoords();
    }, [updateCoords]);

    useEffect(() => {
        if (!floatingRef.current) { return undefined; }

        let anchorClippingParents: HTMLElement[] = [];

        if (!isPosition(anchor)) {
            if (!anchor.current) { return undefined; }
            anchorClippingParents = getOverflowParents(anchor.current) as HTMLElement[];
        }

        const clippingParents = [
            ...anchorClippingParents,
            ...getOverflowParents(floatingRef.current),
        ] as HTMLElement[];

        const removeResizeListeners = () => {
            clippingParents.forEach((parent) => {
                parent.removeEventListener?.('scroll', updateCoords);
                parent.removeEventListener?.('resize', updateCoords);
            });
        };

        if (open) {
            clippingParents.forEach((parent) => {
                parent.addEventListener?.('scroll', updateCoords, { passive: true });
                parent.addEventListener?.('resize', updateCoords);
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
