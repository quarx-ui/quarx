import { Orientation, ORIENTATIONS } from '@core/enums';
import { STACK_DIRECTION, StackDirection } from './styles/constants';

export const directionToDividerOrientation: Record<StackDirection, Orientation> = {
    [STACK_DIRECTION.column]: ORIENTATIONS.horizontal,
    [STACK_DIRECTION.row]: ORIENTATIONS.vertical,
};
