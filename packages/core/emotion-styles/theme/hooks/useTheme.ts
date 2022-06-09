import { useTheme as useEmotionTheme } from '@emotion/react';
import { Theme } from '../types';
import { defaultTheme } from '../defaultTheme';

export const useTheme = (): Theme => {
    let theme = useEmotionTheme() as Theme;

    if (Object.keys(theme).length === 0) {
        theme = defaultTheme;
    }

    if (!theme.palette) {
        throw new Error('QuarX-UI: Theme doesn\'t contain palette.\n'
            + 'You probably using custom theme with emotion ThemeProvider and it rewrites QuarX theme.\n'
            + 'In this case please use our function "createTheme()" and place your custom theme as argument.');
    }

    return theme;
};
