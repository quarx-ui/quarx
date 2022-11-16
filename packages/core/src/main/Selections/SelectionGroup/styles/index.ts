import {
    KeysFromUseStyles,
    makeStyles,
    typography,
} from '@core/styles';
import { paramsToCss, QX_SIZE } from '@core';
import { SelectionGroupStyleParams } from './types';
import { SELECTION_GROUP_TYPE } from './constants';

export const useStyles = makeStyles((
    { palette },
    {
        color,
        size,
        type,
    }: SelectionGroupStyleParams,
) => {
    const text = {
        'text-align': 'justify',
        'word-break': 'break-word',
    };

    return ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',

            ...paramsToCss(type)({
                [SELECTION_GROUP_TYPE.contained]: {
                    backgroundColor: palette.background.main,
                    borderRadius: 12,
                    padding: '20px 24px',
                },
                [SELECTION_GROUP_TYPE.text]: {
                    backgroundColor: 'transparent',
                },
            }),
        },

        title: {
            color: palette.text.main,
            ...text,
            ...paramsToCss(size)({
                [QX_SIZE.small]: typography.Text.M.Semibold,
                [QX_SIZE.medium]: typography.Text.L.Semibold,
                [QX_SIZE.large]: typography.Text.XL.Semibold,
            }),

            '& + span': { marginTop: 4 },
        },

        description: {
            ...text,
            color: palette.text.secondary,
            ...paramsToCss(size)({
                [QX_SIZE.small]: typography.Text.M.Regular,
                [QX_SIZE.medium]: typography.Text.M.Regular,
                [QX_SIZE.large]: typography.Text.L.Regular,
            }),
        },

        helperText: {
            ...typography.Text.L.Regular,
            ...text,
            color: palette.colors[color].default,
        },

        content: {
            display: 'flex',
            ...paramsToCss(size)({
                [QX_SIZE.small]: { padding: '16px 8px' },
                [QX_SIZE.medium]: { padding: '12px 8px' },
                [QX_SIZE.large]: { padding: '8px 8px' },
            }),
        },
    });
});

export type SelectionGroupStyleKeys = KeysFromUseStyles<typeof useStyles>;
