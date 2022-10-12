/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import React, { FC } from 'react';
import { FRAME_ID, THEME_TYPES_ARR } from '@e2e/constants';
import { borderRadii, createTheme, makeStyles } from '@kit';
import '@kit/styles/fonts/font-faces.css';
import { ThemeContent } from '@e2e/public/ThemeWrapper';

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
                <ThemeProvider
                    theme={createTheme({
                        palette: { type: themeType },
                    })}
                    key={themeType}
                >
                    <ThemeContent themeType={themeType} />
                </ThemeProvider>
            ))}
        </div>
    );
};
