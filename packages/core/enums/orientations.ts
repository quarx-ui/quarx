import { Values } from '@core/types';
import { valuesAsKeysFromArray } from './utils';

export const ORIENTATIONS = valuesAsKeysFromArray([
    'horizontal',
    'vertical',
]);

export type Orientation = Values<typeof ORIENTATIONS>;
