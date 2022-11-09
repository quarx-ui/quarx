/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC } from 'react';
import { FRAME_ID, THEME_TYPES_ARR } from '@e2e/constants';
import { borderRadii, makeStyles, SystemBasedThemeProvider } from '@kit';
import '@kit/styles/fonts/font-faces.css';
import { ThemeContent } from '@e2e/public/ThemeContent';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        borderRadius: borderRadii.xLarge,
        padding: 30,
    },
});

export const App: FC = () => {
    const classes = useStyles();

    return (
        <div css={classes.root} id={FRAME_ID}>
            {THEME_TYPES_ARR.map((themeType) => (
                <SystemBasedThemeProvider themeType={themeType} disableCheckSystemTheme>
                    <ThemeContent themeType={themeType} />
                </SystemBasedThemeProvider>
            ))}
        </div>
    );
};
