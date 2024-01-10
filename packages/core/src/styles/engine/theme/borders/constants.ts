import { BorderOptionObj, BordersSize } from './types';

export const DEFAULT_BORDERS_OBJ: Record<BordersSize, BorderOptionObj> = {
    small: {
        width: 1,
        style: 'solid',
        side: 'all',
    },
    medium: {
        width: 2,
        style: 'solid',
        side: 'all',
    },
    large: {
        width: 3,
        style: 'solid',
        side: 'all',
    },
};
