import React from 'react';
import { Theme } from './types';

const ThemeContext = React.createContext<Theme | null>(null);

if (process.env.NODE_ENV !== 'production') {
    ThemeContext.displayName = 'ThemeContext';
}

export { ThemeContext };
