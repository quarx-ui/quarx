import { FC } from 'react';
import { Routes } from 'react-router-dom';
import { PropsProvider, renderComponents } from '@e2e/render-utils';
import { COMPONENTS } from '@e2e/src';
import { makeStyles, PaletteType } from '@kit';

export interface ThemeContentProps {
    themeType: PaletteType;
}

export const useStyles = makeStyles(({ palette }) => ({
    bg: {
        background: palette.background.main,
        padding: 20,
    },
}));

export const ThemeContent: FC<ThemeContentProps> = ({ themeType }) => {
    const classes = useStyles();

    return (
        <div css={classes.bg}>
            <PropsProvider>
                <Routes>
                    {renderComponents(COMPONENTS, themeType)}
                </Routes>
            </PropsProvider>
        </div>
    );
};
