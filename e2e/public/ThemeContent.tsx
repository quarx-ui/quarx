/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FC } from 'react';
import { ThemeTypes } from '@e2e/constants';
import { Routes } from 'react-router-dom';
import { renderComponents } from '@e2e/render-utils';
import { COMPONENTS } from '@e2e/src';
import { makeStyles } from '@kit';

export interface ThemeContentProps {
    themeType: ThemeTypes;
}

export const useStyles = makeStyles(({ palette }) => ({
    bg: {
        background: palette.background.main,
    },
}));

export const ThemeContent: FC<ThemeContentProps> = ({ themeType }) => {
    const classes = useStyles();

    return (
        <div css={classes.bg}>
            <Routes>
                {renderComponents(COMPONENTS, themeType)}
            </Routes>
        </div>
    );
};
