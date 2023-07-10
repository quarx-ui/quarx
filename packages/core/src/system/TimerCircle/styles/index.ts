import { KeysFromUseStyles, makeStyles } from '@core/styles';

export const useStyles = makeStyles((
    { palette, typography },
) => ({
    root: {
        color: palette.text.main,
    },
    label: {
        ...typography.base.text.medium,
        fontWeight: 500,
    },
    loaderBackground: {
        stroke: `color-mix(in srgb, currentColor 8%, ${palette.background.main})`,

        [`@supports not (stroke: color-mix(in srgb, currentColor 8%, ${palette.background.main}))`]: {
            stroke: palette.border.main,
        },
    },
    loaderBorder: {
        transition: 'stroke-dashoffset 1s linear',
        transformOrigin: 'center',
        transform: 'rotate(-90deg)',
    },
}));

export type TimerCircleStyleKeys = KeysFromUseStyles<typeof useStyles>;
