import { ThemeProvider } from '@emotion/react';
import React, { FC } from 'react';
import { borderRadii, createTheme, makeStyles, PALETTE_TYPE_ARR } from '@kit';
import '@kit/styles/fonts/font-faces.css';
import { ThemeContent } from './ThemeContent';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        borderRadius: borderRadii.xLarge,
    },
});

export const App: FC = () => {
    const classes = useStyles();

    return (
        <div css={classes.root}>
            {PALETTE_TYPE_ARR.map((themeType) => (
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
