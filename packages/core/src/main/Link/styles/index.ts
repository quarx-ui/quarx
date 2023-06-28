import { KeysFromUseStyles, makeStyles, typography } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { LinkStyleParams } from './types';
import { LINK_UNDERLINE } from '../constants';

export const useStyles = makeStyles((
    { palette, transitions },
    { underline, color, size, disabled }: LinkStyleParams,
) => {
    const underlineColor = '--underline-color';

    return ({
        root: [
            {
                [underlineColor]: 'transparent',

                display: 'inline-flex',
                textDecoration: 'none',
                alignItems: 'center',
                cursor: 'pointer',
                color: palette.colors[color].default,
                transition: transitions.create(['color', 'box-shadow'], { duration: transitions.duration.shorter }),
                WebkitTapHighlightColor: 'transparent',

                '&:hover, &:focus-visible': {
                    [underlineColor]: palette.colors[color].default,
                },

                '&:active': {
                    color: palette.colors[color].press,

                    [underlineColor]: palette.colors[color].press,
                },

                '&:focus-visible': {
                    outline: `auto 2px ${palette.border.focus.main}`,
                    [underlineColor]: 'transparent',
                },
            },
            paramsToCss(underline)({
                always: {
                    [underlineColor]: palette.colors[color].border,
                },
                hover: {
                    [underlineColor]: 'transparent',
                },
            }),
            size && size !== 'inherit' && typography.Text[size].Medium,
            disabled && {
                '&&': {
                    cursor: 'not-allowed',
                    color: palette.disabled.main,
                },
            },
            disabled && paramsToCss(underline)({
                always: { '&&': { [underlineColor]: palette.disabled.main } },
                hover: { '&&': { [underlineColor]: 'transparent' } },
            }),
        ],
        content: [
            {
                display: 'inline-flex',
            },
            underline !== LINK_UNDERLINE.none && {
                boxShadow: `0 1px var(${underlineColor})`,
                transition: transitions.create('box-shadow', { duration: transitions.duration.shorter }),
            },
        ],
        leftItem: {
            marginRight: 4,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        rightItem: {
            marginLeft: 4,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
});

export type LinkStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
