import { SnackbarColor } from '@core/src/main/Snackbar/elements/types';

export interface SnackbarLeftItemStyleParams {
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
}
