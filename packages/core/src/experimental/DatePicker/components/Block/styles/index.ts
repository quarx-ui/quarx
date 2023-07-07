import { makeStyles } from '@core';

export const useStyles = makeStyles(({ palette }) => ({
    root: {
        width: '100%',
    },
    input: {
        background: 'transparent',
        boxSizing: 'border-box',
        border: 'none',
        width: 20,
        padding: 0,
        margin: 0,
        cursor: 'pointer',

        color: palette.text.main,
        '&:focus': {
            outline: 'none',
        },
        height: '100%',
    },
}));
