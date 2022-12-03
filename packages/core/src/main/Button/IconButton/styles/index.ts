import { KeysFromUseStyles, makeStyles, ButtonStyleParams, cssVar } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { flexCenter, hidden } from '../../mixins';
import { IconButtonCSSVarKeys } from './vars';

export const useStyles = makeStyles((
    theme,
    { size, loading }: Pick<ButtonStyleParams, 'size' | 'loading'>,
    { cssSize, cssPaddingY, cssPaddingX }: Record<IconButtonCSSVarKeys, string>,
) => ({
    root: [
        {
            [cssPaddingY]: 0,
            [cssPaddingX]: 0,

            height: cssVar(cssSize),
            width: cssVar(cssSize),
        },

        paramsToCss(size)({
            xSmall: {
                [cssSize]: '32px',
            },
            small: {
                [cssSize]: '40px',
            },
            medium: {
                [cssSize]: '52px',
            },
            large: {
                [cssSize]: '60px',
            },
        }),
    ],

    icon: [
        flexCenter,
        loading && hidden,
    ],
}), { name: 'QxIconButton' });

export type IconButtonStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './vars';
