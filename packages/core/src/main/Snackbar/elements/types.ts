import { PickQxSize, Values } from '@core';
import { SNACKBAR_COLORS } from '@core/src/main/Snackbar/styles';

export type SnackbarColor = Values<typeof SNACKBAR_COLORS>;
export type SnackbarSize = PickQxSize<'small' | 'large'>;
