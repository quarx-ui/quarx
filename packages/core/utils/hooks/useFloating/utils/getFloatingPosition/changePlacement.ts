import { deepmerge } from '@core/styles/engine/utils/deepMerge';
import { GetFloatingPositionModifiersContext, Placement } from '../../types';
import { getFloatingContext } from './getFloatingContext';

export function changePlacement(
    placement: Placement,
    context: GetFloatingPositionModifiersContext,
): void {
    const newContext = getFloatingContext({
        placement,
        anchor: context.anchor,
        floating: context.floating,
        arrangement: context.arrangement,
    });

    (newContext as GetFloatingPositionModifiersContext).modifiersData = context.modifiersData;

    deepmerge(
        context,
        newContext,
        { clone: false },
    );
}
