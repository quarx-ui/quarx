import { KeysFromUseStyles, makeStyles, QX_SIZE, typography } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { TabItemContainedStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, borderRadii, transitions },
    { color, size, selected, borderRadius }: TabItemContainedStyleParams,
) => ({
    root: [
        {
            all: 'unset',
            cursor: 'pointer',
            position: 'relative',
            color: palette.text.secondary,
            borderRadius: borderRadii[borderRadius],
            transition: transitions.create(['color', 'background-color']),

            '&:hover': {
                color: palette.text.main,
                backgroundColor: palette.colors[color].alpha[8],
            },

            '&:focus-visible': {
                color: palette.text.main,
                backgroundColor: palette.colors[color].alpha[8],
                boxShadow: `inset 0 0 0 2px ${palette.border.focus.dark}`,
            },
        },
        paramsToCss(size)({
            large: {
                ...typography.Text.XL.Regular,
                padding: '16px 18px',
            },
            medium: {
                ...typography.Text.L.Regular,
                padding: '14px 16px',
            },
            small: {
                ...typography.Text.M.Regular,
                padding: '10px 12px',
            },
        }),
        selected && { '&&': {
            color: palette.colors[color].contrastText,
            backgroundColor: palette.colors[color].default,
        } },
    ],
    counter: [
        {
            color: palette.text.tertiary,
            transition: transitions.create(['color']),
        },
        paramsToCss(size)({
            [QX_SIZE.large]: {
                marginLeft: 8,
            },
            [QX_SIZE.medium]: {
                marginLeft: 6,
            },
            [QX_SIZE.small]: {
                marginLeft: 4,
            },
        }),
        selected && { '&&': {
            color: palette.colors[color].contrastText,
        } },
    ],
}), { name: 'QxTabItemContained' });

export type TabItemContainedStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { TabItemContainedStyleParams };
