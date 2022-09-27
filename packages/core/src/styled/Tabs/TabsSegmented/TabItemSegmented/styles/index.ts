import { KeysFromUseStyles, makeStyles, QX_SIZE, typography } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { TabItemSegmentedStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, borderRadii, transitions, elevations },
    { color, size, selected, borderRadius, icon }: TabItemSegmentedStyleParams,
) => ({
    root: [
        {
            all: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            color: palette.text.secondary,
            borderRadius: borderRadii[borderRadius],
            transition: transitions.create(['color', 'background-color']),

            '&:hover, &:focus-visible': {
                color: palette.text.main,
                backgroundColor: palette.background.container.hover,
            },

            '&:focus-visible': {
                boxShadow: `inset 0 0 0 2px ${palette.border.focus.dark}`,
            },
        },
        paramsToCss(`${icon}`, size)({
            true: {
                large: {
                    minWidth: 56,
                    minHeight: 56,
                },
                medium: {
                    minWidth: 48,
                    minHeight: 48,
                },
                small: {
                    minWidth: 36,
                    minHeight: 36,
                },
            },
            false: {
                large: {
                    ...typography.Text.XL.Regular,
                    padding: '14px 18px',
                },
                medium: {
                    ...typography.Text.L.Regular,
                    padding: '12px 16px',
                },
                small: {
                    ...typography.Text.M.Regular,
                    padding: '8px 12px',
                },
            },
        }),
        selected && { '&&': {
            backgroundColor: palette.background.main,
            boxShadow: elevations.small,
            color: icon
                ? palette.colors[color].default
                : palette.text.main,
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
            color: palette.text.secondary,
        } },
    ],
}), { name: 'QxTabItemSegmented' });

export type TabItemSegmentedStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { TabItemSegmentedStyleParams };
