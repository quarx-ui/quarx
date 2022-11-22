import {
    KeysFromUseStyles,
    makeStyles,
    typography,
} from '@core/styles';
import { paramsToCss, QX_SIZE } from '@core';
import { SelectionGroupCSSVarKeys } from './vars';
import { SelectionGroupStyleParams } from './types';
import { SELECTION_GROUP_TYPE } from './constants';

export const useStyles = makeStyles((
    { palette },
    {
        color,
        size,
        type,
    }: SelectionGroupStyleParams,
    {}: Record<SelectionGroupCSSVarKeys, string>,
) => {
    const text = { 'word-break': 'break-word' };

    return ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',

            ...paramsToCss(type)({
                [SELECTION_GROUP_TYPE.contained]: {
                    backgroundColor: palette.background.main,
                    borderRadius: 12,
                    padding: '20px 24px 8px',
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
            ...typography.Text.L.Regular,
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
            gap: 32,
            ...paramsToCss(size)({
                [QX_SIZE.small]: { margin: '24px 0' },
                [QX_SIZE.medium]: { margin: '16px 0' },
                [QX_SIZE.large]: { margin: '12px 0' },
            }),
        },
    });
}, { name: 'QxSelectionGroup' });

export type SelectionGroupStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
export * from './vars';
