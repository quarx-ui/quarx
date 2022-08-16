import { Alignment, GetFloatingPositionContext, GetFloatingPositionProps, Side } from '../../types';
import { sideToAxes } from '../../maps';
import { getRect } from '../dom';

export function getFloatingContext(props: GetFloatingPositionProps): GetFloatingPositionContext {
    const {
        placement,
        anchor,
        floating,
        arrangement,
    } = props;

    const [side, alignment] = placement.split('-') as [Side, Alignment | undefined];

    const [mainAxis, altAxis] = sideToAxes[side];

    const rects = {
        anchor: getRect(anchor, arrangement),
        floating: getRect(floating, arrangement),
    };

    return {
        ...props,
        side,
        alignment,
        mainAxis,
        altAxis,
        rects,
    };
}
