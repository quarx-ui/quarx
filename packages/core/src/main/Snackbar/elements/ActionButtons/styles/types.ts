import { SnackbarSize } from '@core/src/main/Snackbar/elements/types';

export interface ActionButtonsStyleParams {
    /** Размер компонента
     * - small
     * - large
     * @default small */
    size: SnackbarSize;
    /** При значении `true` компонент приобретает горизонтальную ориентацию
     * @default false */
    alert: boolean;
}
