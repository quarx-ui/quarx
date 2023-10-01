import {
    KeysFromUseStyles,
    makeStyles, TYPOGRAPHY_WEIGHT,
} from '@core/styles';
import { paramsToCss, QX_SIZE } from '@core';
import { SelectionGroupStyleParams } from './types';
import { SELECTION_GROUP_TYPE } from './constants';

export const useStyles = makeStyles((
    { palette, typography },
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
                [QX_SIZE.small]: typography.base.text.medium,
                [QX_SIZE.medium]: typography.base.text.large,
                [QX_SIZE.large]: typography.base.text.xLarge,
            }),
            fontWeight: TYPOGRAPHY_WEIGHT.semibold,

            '& + span': { marginTop: 4 },
        },

        description: {
            ...text,
            color: palette.text.secondary,
            ...paramsToCss(size)({
                [QX_SIZE.small]: typography.base.text.medium,
                [QX_SIZE.medium]: typography.base.text.medium,
                [QX_SIZE.large]: typography.base.text.large,
            }),
        },

        helperText: {
            ...typography.base.text.large,
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
