import { KeysFromUseStyles, makeStyles } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { LoaderStyleParams } from '@core/src/Loader/types';
import { keyframes } from '@emotion/react';

export const useStyles = makeStyles((
    theme,
    { size }: Required<LoaderStyleParams>,
) => {
    const loaderScale = keyframes({
        '0%': {
            transform: 'scale(1)',
            opacity: 1,
        },
        '24%': {
            transform: 'scale(0.72)',
            opacity: 0.3,
        },
        '48%': {
            transform: 'scale(1)',
            opacity: 1,
        },
    });
    return ({
        root: {
            display: 'flex',
            '& > div:nth-of-type(1)': {
                animation: `${loaderScale} 1.44s -0.24s infinite cubic-bezier(0, 0, .4, 1)`,
            },
            '& > div:nth-of-type(2)': {
                animation: `${loaderScale} 1.44s -0.12s infinite cubic-bezier(0, 0, .4, 1)`,
            },
            '& > div:nth-of-type(3)': {
                animation: `${loaderScale} 1.44s 0s infinite cubic-bezier(0, 0, .4, 1)`,
            },
            '& > div': {
                backgroundColor: 'currentColor',
                borderRadius: '100%',
                margin: 3,
                animationFillMode: 'both',
                display: 'inline-block',
            },
        },
        dot: paramsToCss(size)({
            xSmall: {
                height: 6,
                width: 6,
            },
            small: {
                height: 8,
                width: 8,
            },
            base: {
                height: 10,
                width: 10,
            },
            large: {
                height: 12,
                width: 12,
            },
            xLarge: {
                height: 14,
                width: 14,
            },
        }),
    });
}, { name: 'SxLoader' });

export type LoaderStyleKeys = KeysFromUseStyles<typeof useStyles>;
