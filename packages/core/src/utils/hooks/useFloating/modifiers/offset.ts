import { axisToSides } from '../maps';
import { FloatingPositionModifier } from '../types';

export const offset = (value = 8): FloatingPositionModifier => (position, context) => {
    const {
        mainAxis,
        side,
    } = context;

    const [start] = axisToSides[mainAxis];

    return {
        ...position,
        [mainAxis]: position[mainAxis] + (
            side === start
                ? (-value)
                : value
        ),
    };
};
