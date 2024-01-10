import {
    ElevationSize,
    ElevationType,
} from '@core';
import { ElementTypes } from '@core/components/main/Alert/elements/types';

export type AlertElevation = ElevationSize;
export type AlertBackground = ElevationType;

export interface AlertOmittedStyleParams {
    isMinimalView: boolean;
}

export interface AlertStyleParams extends
    ElementTypes,
    AlertOmittedStyleParams
{
    /** Размер тени. Соответствует токенам theme.elevations[background]
     * @default medium */
    elevation: AlertElevation;

    /** Фон используемый в объекте theme.elevations
     * - **main**
     * - **secondary**
     * @default main */
    background: AlertBackground;
}
