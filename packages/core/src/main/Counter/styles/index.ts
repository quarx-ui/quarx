import { KeysFromUseStyles, makeStyles, typography } from '@core/styles';
import { paramsToCss } from '@core/utils/paramsToCss';
import { CounterStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    { type, size, color }: CounterStyleParams,
) => {
    const colorValue = (color === 'text'
        ? palette.text.main
        : palette.colors[color].default);

    return ({
        root: {
            display: 'block',
            borderRadius: 16,
            boxSizing: 'border-box',
            height: 'fit-content',
            width: 'fit-content',
            color: palette.background.main,
            backgroundColor: colorValue,
            padding: '0 6px',
            ...typography.Text.M.Medium,

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
                white: {
                    color: colorValue,
                    backgroundColor: palette.background.main,
                },
                ghosted: {
                    backgroundColor: color === 'text'
                        ? palette.background.secondary
                        : palette.colors[color].surface,
                    color: colorValue,
                },
            }),
        },
    });
});

export type CounterStyleKeys = KeysFromUseStyles<typeof useStyles>

export * from './types';
