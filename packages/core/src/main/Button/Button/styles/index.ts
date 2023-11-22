import { paramsToCss } from '@core/utils/paramsToCss';
import { KeysFromUseStyles, makeStyles } from '@core/styles/engine/makeStyles';
import { cssVar } from '@core/utils';
import { BaseButtonStyleParams } from '@core/src';
import { flexCenter, hidden } from '../../mixins';
import { ButtonCSSVarKeys } from './vars';

export const useStyles = makeStyles((
    theme,
    { size, loading }: Pick<BaseButtonStyleParams, 'size' | 'loading'>,
    {
        cssPaddingX,
        cssPaddingY,
        cssInsideMargin,
        cssOutsideMargin,
        cssIconMinSize,
    }: Record<ButtonCSSVarKeys, string>,
) => ({
    root: [
        size !== 'xSmall' && {
            [cssIconMinSize]: '24px',
        },

        paramsToCss(size)({
            xSmall: {
                [cssInsideMargin]: '6px',
                [cssOutsideMargin]: `calc(8px - ${cssVar(cssPaddingX)})`,
                [cssIconMinSize]: '16px',
            },
            small: {
                [cssInsideMargin]: '8px',
                [cssOutsideMargin]: `calc(12px - ${cssVar(cssPaddingX)})`,
                [cssPaddingY]: '8px',
            },
            medium: {
                [cssInsideMargin]: '8px',
                [cssOutsideMargin]: `calc(12px - ${cssVar(cssPaddingX)})`,
            },
            large: {
                [cssInsideMargin]: '12px',
                [cssOutsideMargin]: `calc(16px - ${cssVar(cssPaddingX)})`,
            },
        }),
    ],

    icon: [
        flexCenter,
        {
            minWidth: cssVar(cssIconMinSize),
            minHeight: cssVar(cssIconMinSize),
            overflow: 'hidden',
            boxSizing: 'border-box',
        },

        loading && hidden,
    ],

    leftIcon: {
        marginRight: cssVar(cssInsideMargin),
        marginLeft: cssVar(cssOutsideMargin),
    },

    rightIcon: {
        marginLeft: cssVar(cssInsideMargin),
        marginRight: cssVar(cssOutsideMargin),
    },

    content: [
        flexCenter,
        loading && hidden,
        size === 'small' && {
            marginTop: 2,
            marginBottom: 2,
        },
    ],
}));

export type ButtonStyleKeys = KeysFromUseStyles<typeof useStyles>
export * from './vars';
export * from './types';
