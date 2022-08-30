import { PickSxBorderSize, SxSize } from '@core/enums';

export type AvatarSize = Exclude<SxSize, 'base'>
export type AvatarBorderRadius = PickSxBorderSize<'rounded' | 'smooth' | 'square'>;

export interface AvatarStyleParams {
    size: AvatarSize,
    radius: AvatarBorderRadius,
    showBorder: boolean,
}
