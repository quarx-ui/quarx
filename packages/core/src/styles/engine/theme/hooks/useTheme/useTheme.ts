import { useTheme as useEmotionTheme } from '@emotion/react';
import { defaultTheme, Theme } from '@core/styles';
import { themeIsQx } from './helpers';
import { THEME_IDENTIFIER } from './constants';

export const useTheme = (): Theme => {
    const theme = useEmotionTheme() as (Theme & { [THEME_IDENTIFIER]?: Theme });

    if (Object.keys(theme).length === 0) {
        return defaultTheme;
    }

    const resolvedTheme = theme[THEME_IDENTIFIER] ?? (theme as Theme);

    if (!themeIsQx(resolvedTheme)) {
        throw new Error('QuarX-UI: Theme doesn\'t contain necessary properties.\n'
            + 'You probably using custom theme with emotion ThemeProvider and it rewrites QuarX theme.\n'
            + 'In this case please use our function "createTheme()" and place your custom theme as argument.');
    }

    return resolvedTheme;
};
