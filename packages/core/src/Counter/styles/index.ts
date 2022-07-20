import { KeysFromUseStyles, makeStyles, typography } from '@core/styles';
import { paramsToCss } from '@core/utils/paramsToCss';
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

        ...paramsToCss(type)({
            filled: {
                color: palette.colors[color].default,
                backgroundColor: palette.background.main,
            },
            outline: {
                color: palette.background.main,
                backgroundColor: palette.colors[color].default,
            },
        }),
    },
}), { name: 'SxCounter' });

export type CounterStyleKeys = KeysFromUseStyles<typeof useStyles>

export * from './types';
