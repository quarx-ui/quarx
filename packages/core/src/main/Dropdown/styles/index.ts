import {
    KeysFromUseStyles,
    makeStyles,
    typography,
} from '@core/styles';
import { paramsToCss, QX_SIZE } from '@core';
import { DropdownStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    {
        size,
        width,
        maxBodyHeight,
        minWidth,
        maxWidth,
        searchable,
        headerExists,
        zIndex,
    }: DropdownStyleParams,
) => ({
    root: {
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: 0,
        borderRadius: 8,
        border: '1px solid',
        borderColor: palette.border.main,

        zIndex,
        width,
        minWidth,
        maxWidth,
    },
    title: [
        {
            boxSizing: 'border-box',
            display: 'block',
            width: '100%',
            wordBreak: 'break-all',
            color: palette.text.main,
            ...searchable && {
                borderBottom: '1px solid',
                borderBottomColor: palette.border.main,
            },
        },
        paramsToCss(size)({
            [QX_SIZE.small]: {
                padding: '14px 12px 10px',
                ...typography.Text.M.Semibold,
            },
            [QX_SIZE.medium]: {
                padding: '16px 16px 12px',
                ...typography.Text.L.Semibold,
            },
            [QX_SIZE.large]: {
                padding: '18px 16px 14px',
                ...typography.Text.XL.Semibold,
            },
        }),
    ],
    searchTextField: {
        border: 'none',
        width: '100%',
        '& > div': {
            borderRadius: 0,
            border: 'none',
            boxShadow: 'none',
        },
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: palette.background.main,
        ...headerExists && {
            borderBottom: '1px solid',
            borderBottomColor: palette.border.main,
        },
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        maxHeight: maxBodyHeight,
    },
    footer: [
        {
            boxSizing: 'border-box',
            display: 'flex',
            borderTop: '1px solid',
            borderTopColor: palette.border.main,
            width: '100%',
            backgroundColor: palette.background.main,
        },
        paramsToCss(size)({
            [QX_SIZE.small]: {
                gap: 12,
                padding: 8,
            },
            [QX_SIZE.medium]: {
                gap: 12,
                padding: 12,
            },
            [QX_SIZE.large]: {
                gap: 16,
                padding: 16,
            },
        }),
    ],
}), { name: 'QxDropdown' });

export type DropdownStyleKeys = KeysFromUseStyles<typeof useStyles>;
