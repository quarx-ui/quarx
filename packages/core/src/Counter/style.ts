import { typography } from '@core';
import { KeysFromUseStyles, makeStyles } from '../../emotion-styles';
import { paramsToCss } from '../../utils/paramsToCss';
import { CounterStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { type, size, color }: Required<CounterStyleParams>,
) => ({
    root: {
        display: 'block',
        borderRadius: 16,
        boxSizing: 'border-box',
        height: 'fit-content',
        width: 'fit-content',

        ...paramsToCss(size)({
            small: {
                padding: '0 4px',
                ...typography.Text.S.Medium,
            },
            large: {
                padding: '0 7px',
                ...typography.Text.L.Medium,
            },
        }),

        ...paramsToCss(type, color)({
            filled: {
                color1: {
                    color: palette.LabelTag.color1.main,
                    backgroundColor: palette.Background.main,
                },
                color2: {
                    color: palette.LabelTag.color2.main,
                    backgroundColor: palette.Background.main,
                },
                warning: {
                    color: palette.LabelTag.warning.main,
                    backgroundColor: palette.Background.main,
                },
                critical: {
                    color: palette.LabelTag.critical.main,
                    backgroundColor: palette.Background.main,
                },
            },
            outline: {
                color1: {
                    backgroundColor: palette.LabelTag.color1.main,
                    color: palette.Text.mainInverse,
                },
                color2: {
                    backgroundColor: palette.LabelTag.color2.main,
                    color: palette.Text.mainInverse,
                },
                warning: {
                    backgroundColor: palette.LabelTag.warning.main,
                    color: palette.Text.mainInverse,
                },
                critical: {
                    backgroundColor: palette.LabelTag.critical.main,
                    color: palette.Text.mainInverse,
                },
            },
        }),
    },
}), { name: 'SxCounter' });

export type CounterStyleKeys = KeysFromUseStyles<typeof useStyles>
