import { ElevationSize, ElevationType } from '@core/styles';
import { SnackbarColor, SnackbarSize } from '../elements/types';

export type SnackbarElevation = ElevationSize;
export type SnackbarBackground = ElevationType;

export interface SnackbarStyleParams {
    /** Цветовая палитра компонента
     *
     * - default
     * - brand
     * - secondary
     * - success
     * - info
     * - warning
     * - danger
     *
     * @default default */
    color: SnackbarColor;
    /** Размер компонента
     * - small
     * - large
     * @default small */
    size: SnackbarSize;
    /** Размер тени
     * @default medium */
    elevation: SnackbarElevation;
    /** Фон используемый в объекте theme.elevations
     * - main
     * - secondary
     * @default main */
    background: SnackbarBackground;
    /** При значении `true` компонент приобретает горизонтальную ориентацию
     * @default false */
    alert: boolean;
}
