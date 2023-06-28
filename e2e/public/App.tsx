import { ThemeProvider } from '@emotion/react';
import React, { FC } from 'react';
import { borderRadii, createTheme, makeStyles, PALETTE_TYPE_ARR } from '@kit';
import '@kit/styles/fonts/font-faces.css';
import { ThemeContent } from './ThemeContent';

export const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        flexGrow: 1,
        borderRadius: borderRadii.xLarge,
    },
    container: {
        display: 'inline-block',
    },
});

export const App: FC = () => {
    const styles = useStyles();

    return (
        <div css={styles.root}>
            <div css={styles.container}>
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
        </div>
    );
};
