import React from 'react';
import { ThemeContext } from '../../ThemeContext';
import { defaultTheme } from '../../defaultTheme';
import { Theme } from '../..';

export function useTheme(): Theme {
    const theme = React.useContext(ThemeContext) || defaultTheme;

    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useDebugValue(theme);
    }

    return theme;
}
