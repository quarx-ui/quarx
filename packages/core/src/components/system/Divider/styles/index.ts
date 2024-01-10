import { paramsToCss } from '@core/utils';
import { ORIENTATIONS } from '@core/enums';
import { isPaletteStandardKey, KeysFromUseStyles, makeStyles } from '@core/styles';
import { cssVar } from '@core/utils/cssVars';
import { DividerCSSVarKeys } from './vars';
import { DividerStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { indent, orientation, color, width }: DividerStyleParams,
    { cssIndent, cssColor }: Record<DividerCSSVarKeys, string>,
) => ({
    root: [
        {
            [cssColor]: isPaletteStandardKey(color) ? palette.border[color] : color,
            alignSelf: 'stretch',
            flexShrink: 0,
        },
        paramsToCss(orientation)({
            [ORIENTATIONS.horizontal]: {
                borderBottom: `${width} solid ${cssVar(cssColor)}`,
            },
            [ORIENTATIONS.vertical]: {
                borderRight: `${width} solid ${cssVar(cssColor)}`,
            },
        }),
        Array.isArray(indent)
            ? paramsToCss(orientation)({
                [ORIENTATIONS.horizontal]: {
                    marginLeft: indent[0],
                    marginRight: indent[1],
                },
                [ORIENTATIONS.vertical]: {
                    marginTop: indent[0],
                    marginBottom: indent[1],
                },
            })
            : Boolean(indent) && paramsToCss(orientation)({
                [ORIENTATIONS.horizontal]: {
                    [cssIndent]: `${typeof indent === 'number' ? indent : 8}px`,
                    marginLeft: cssVar(cssIndent),
                    marginRight: cssVar(cssIndent),
                },
                [ORIENTATIONS.vertical]: {
                    [cssIndent]: `${typeof indent === 'number' ? indent : 4}px`,
                    marginTop: cssVar(cssIndent),
                    marginBottom: cssVar(cssIndent),
                },
            }),
    ],
}), { name: 'QxDivider' });

export type DividerStyleKeys = KeysFromUseStyles<typeof useStyles>;
