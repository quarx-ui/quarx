import { paramsToCss } from '@core/utils/paramsToCss';
import { CSSObject } from '@emotion/react';
import { KeysFromUseStyles, makeStyles, typography } from '@core';
import { BadgeStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, borderRadii },
    { type, color, size, borderRadius }: BadgeStyleParams,
) => {
    const flexCenter: CSSObject = {
        display: 'flex',
        alignItems: 'center',
    };

    const colorValue = color === 'text'
        ? palette.text.main
        : palette.colors[color].default;

    const cssItemInsideMargin = '--item-inside-margin';
    const cssItemOutsideMargin = '--item-outside-margin';

    return ({
        root: {
            ...flexCenter,
            maxWidth: 'max-content',
            minWidth: 'fit-content',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: colorValue,
            borderColor: 'transparent',
            color: palette.text.constant,
            borderRadius: borderRadii[borderRadius],
            height: 32,
            padding: '2px 10px',
            ...typography.Text.L.Medium,

            ...paramsToCss(size)({
                small: {
                    height: 24,
                    ...typography.Text.M.Medium,
                    padding: '0px 10px',
                },
                large: {
                    height: 40,
                    ...typography.Text.XL.Medium,
                    padding: '4px 14px',
                },
            }),

            ...paramsToCss(type)({
                outlined: {
                    color: colorValue,
                    backgroundColor: palette.background.main,
                    borderColor: color === 'text'
                        ? palette.border.secondary
                        : palette.colors[color].border,
                },
                ghosted: {
                    color: colorValue,
                    backgroundColor: color === 'text'
                        ? palette.background.secondary
                        : palette.colors[color].surface,
                    borderColor: 'transparent',
                },
            }),
        },

        /* Side elements */
        item: {
            [cssItemInsideMargin]: size === 'small' ? '6px' : '8px',
            [cssItemOutsideMargin]: '-4px',

            ...flexCenter,
        },
        leftItem: {
            marginRight: `var(${cssItemInsideMargin})`,
            marginLeft: `var(${cssItemOutsideMargin})`,
        },
        rightItem: {
            marginLeft: `var(${cssItemInsideMargin})`,
            marginRight: `var(${cssItemOutsideMargin})`,
        },
    });
}, { name: 'SxBadge' });

export type BadgeStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
