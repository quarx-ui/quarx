import { KeysFromUseStyles, makeStyles, QX_SIZE } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { TabItemSegmentedStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, borderRadii, transitions, elevations, typography },
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
                boxShadow: `inset 0 0 0 2px ${palette.border.focus.main}`,
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
                    ...typography.base.text.xLarge,
                    padding: '14px 18px',
                },
                medium: {
                    ...typography.base.text.large,
                    padding: '12px 16px',
                },
                small: {
                    ...typography.base.text.medium,
                    padding: '8px 12px',
                },
            },
        }),
        selected && { '&&': {
            ...elevations.main.small,
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
}));

export type TabItemSegmentedStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { TabItemSegmentedStyleParams };
