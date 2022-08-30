import { KeysFromUseStyles, makeStyles, SX_BORDER_SIZE, SX_SIZE } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { AvatarStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, borderRadii },
    { size, radius, showBorder }: AvatarStyleParams,
) => ({
    root: [
        {
            '& > *': {
                width: '100%',
                height: '100%',
            },
        },
        paramsToCss(size)({
            [SX_SIZE.xSmall]: {
                width: 36,
                height: 36,
            },
            [SX_SIZE.small]: {
                width: 44,
                height: 44,
            },
            [SX_SIZE.medium]: {
                width: 56,
                height: 56,
            },
            [SX_SIZE.large]: {
                width: 72,
                height: 72,
            },
            [SX_SIZE.xLarge]: {
                width: 88,
                height: 88,
            },
        }),
        paramsToCss(radius)({
            [SX_BORDER_SIZE.rounded]: {
                borderRadius: borderRadii.max,
            },
            [SX_BORDER_SIZE.smooth]: {
                borderRadius: 24, // TODO borderRadii
            },
            [SX_BORDER_SIZE.square]: {
                borderRadius: borderRadii.xSmall,
            },
        }),
        showBorder && {
            border: `1px solid ${palette.border.secondary}`,
        },
    ],
    image: {

    },
    fallback: {},
}), { name: 'SxAvatar' });

export type AvatarStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { AvatarStyleParams };
