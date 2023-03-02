/** 6.4.19 jsx */
import { jsx } from '@emotion/react';
import React, { FC } from 'react';
import { FRAME_ID, THEME_TYPES_ARR } from '@e2e/constants';
import { borderRadii, makeStyles, SystemBasedThemeProvider } from '@kit';
import { CSSProperties, FC } from 'react';
import { Routes } from 'react-router-dom';
import { FRAME_ID } from '@e2e/constants';
import { renderComponents } from '@e2e/render-utils/renderComponents';
import '@kit/styles/fonts/font-faces.css';
import { ThemeContent } from '@e2e/public/ThemeContent';
import { PropsProvider } from '@e2e/render-utils/usePropsContext';
import { InputForProps } from '@e2e/render-utils/InputForProps';

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
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
            }}
        >
            {THEME_TYPES_ARR.map((themeType) => (
                <PropsProvider>
                    <InputForProps />
                    <div  css={classes.root}id={FRAME_ID}>
                    <SystemBasedThemeProvider themeType={themeType} disableCheckSystemTheme>
                        <ThemeContent themeType={themeType} />
                    </SystemBasedThemeProvider>
                    </div>
                </PropsProvider>
            ))}
    );
};
