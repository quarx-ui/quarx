import { FloatingPositionModifier, GetFloatingPositionProps, Position } from '../../types';
import { applyModifiers } from './applyModifiers';
import { getFloatingCoords } from './getFloatingCoords';
import { getFloatingContext } from './getFloatingContext';

export function getFloatingPosition({
    modifiers: mods,
    ...props
}: GetFloatingPositionProps): Position {
    const context = getFloatingContext(props);

    const position = getFloatingCoords(context);

    const modifiers = mods?.filter(Boolean) as FloatingPositionModifier[];

    if (!modifiers || modifiers.length === 0) { return position; }

    return applyModifiers({
        position,
        modifiers,
        context: {
            ...context,
            modifiersData: {
                previous: [],
            },
        },
    });
}
