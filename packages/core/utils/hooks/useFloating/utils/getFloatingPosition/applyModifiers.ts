import { Position, PositionWithModifiersProps } from '../../types';

export function applyModifiers({
    position,
    modifiers,
    context,
}: PositionWithModifiersProps): Position {
    return modifiers.reduce((acc, modifier) => {
        if (!modifier) {
            return acc;
        }

        const result = modifier(acc, context);

        context.modifiersData.previous.push(modifier);

        return result;
    }, position);
}
