import { KeysFromUseStyles, makeStyles, QX_SIZE } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { TabItemDefaultStyleParams } from './types';
import { TABS_LINES } from '../../constants';

export const useStyles = makeStyles((
    { palette, borderRadii, transitions, typography },
    { size, selected, line }: TabItemDefaultStyleParams,
) => ({
    root: [
        {
            all: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            color: palette.text.secondary,
            borderRadius: borderRadii.small,
            transition: transitions.create('color'),

            '&:after': {
                display: 'none',
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: palette.border.secondary,
                ...paramsToCss(line)({
                    [TABS_LINES.down]: {
                        bottom: 0,
                        borderRadius: borderRadii.create('top'),
                    },
                    [TABS_LINES.up]: {
                        top: 0,
                        borderRadius: borderRadii.create('bottom'),
                    },
                }),
            },

            '&:hover': {
                color: palette.text.main,
                '&:after': {
                    display: 'block',
                },
            },

            '&:focus-visible': {
                color: palette.text.main,
                '&:after': {
                    display: 'block',
                },
            },
        },
        paramsToCss(size)({
            [QX_SIZE.large]: {
                ...typography.base.text.xLarge,
                padding: '16px 0',
            },
            [QX_SIZE.medium]: {
                ...typography.base.text.large,
                padding: '14px 0',
            },
            [QX_SIZE.small]: {
                ...typography.base.text.medium,
                padding: '10px 0',
            },
        }),
        selected && {
            fontWeight: 500,
            color: palette.text.main,
        },
    ],
    innerWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
    },
    innerPlaceholder: {
        fontWeight: 500,
        visibility: 'hidden',
    },
    innerContent: {
        position: 'absolute',
    },
    counter: [
        {
            fontWeight: 400,
            color: palette.text.tertiary,
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
    ],
}));

export type TabItemDefaultStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { TabItemDefaultStyleParams };
