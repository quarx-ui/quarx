import { render, screen } from '@testing-library/react';
import React, { FC } from 'react';
import { Badge, SystemBasedThemeProvider, useTheme } from '@core';
import { setMedia } from 'mock-match-media';

export const ComponentForTest: FC = () => {
    const themeType = useTheme().palette.type;
    return <Badge><div>{themeType}</div></Badge>;
};

describe('SystemBasedThemeProvider', () => {
    it('light initial', () => {
        setMedia({
            'prefers-color-scheme': 'light',
        });
        render((
            <SystemBasedThemeProvider>
                <ComponentForTest />
            </SystemBasedThemeProvider>
        ));

        expect(screen.queryByText('light')).toBeInTheDocument();
    });

    it('dark initial', () => {
        setMedia({
            'prefers-color-scheme': 'dark',
        });
        render((
            <SystemBasedThemeProvider>
                <ComponentForTest />
            </SystemBasedThemeProvider>
        ));
        screen.logTestingPlaygroundURL();

        expect(screen.queryByText('dark')).toBeInTheDocument();
    });

    it('light -> dark', () => {
        setMedia({
            'prefers-color-scheme': 'dark',
        });
        render((
            <SystemBasedThemeProvider>
                <ComponentForTest />
            </SystemBasedThemeProvider>
        ));

        expect(screen.queryByText('dark')).toBeInTheDocument();
        setMedia({
            'prefers-color-scheme': 'light',
        });
        expect(screen.queryByText('light')).toBeInTheDocument();
    });

    it('light system, disableCheckSystem', () => {
        setMedia({
            'prefers-color-scheme': 'light',
        });
        render((
            <SystemBasedThemeProvider disableCheckSystemTheme themeType="dark">
                <ComponentForTest />
            </SystemBasedThemeProvider>
        ));
        expect(screen.queryByText('dark')).toBeInTheDocument();
    });
});
