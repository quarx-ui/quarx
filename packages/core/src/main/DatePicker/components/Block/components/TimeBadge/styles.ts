import { changeOpacity, KeysFromUseStyles, makeStyles } from '@core';
import {
    DATE_PICKER_DAY_SIZE_PX,
    OFFSET_DAYS,
} from '../../utils';
import { TimeBadgeStyleProps } from './types';

export const useStyles = makeStyles(({ palette }, { size, active }: TimeBadgeStyleProps) => ({
    badge: {
        height: DATE_PICKER_DAY_SIZE_PX[size],
        color: active ? palette.text.constant : palette.text.main,
        backgroundColor: !active ? 'transparent' : undefined,
        '&:not(:last-of-type)': {
            marginBottom: OFFSET_DAYS[size],
        },
        '&:hover': {
            backgroundColor: changeOpacity(palette.colors.brand.hover, 0.08),
            color: palette.text.main,
            cursor: 'pointer',
        },
    },
}));

export type TimeBadgesStyleKeys = KeysFromUseStyles<typeof useStyles>
