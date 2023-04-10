import { colors, KeysFromUseStyles, makeStyles, typography } from '@core';

export const useStyles = makeStyles(() => ({
    root: {},
    label: typography.Text.M.Semibold,
    loaderBackground: { stroke: colors.Black[8] },
    loaderBorder: {
        transition: 'all 1s linear',
        transform: 'rotate(-90deg) translateX(-100%)',
    },
}), { name: 'QxTimerIcon' });

export type TimerIconStyleKeys = KeysFromUseStyles<typeof useStyles>;
