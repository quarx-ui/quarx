import {
    KeysFromUseStyles,
    makeStyles, typography,
} from '@core/styles';
import { paramsToCss, QX_SIZE } from '@core';
import { DropdownItemsGroupStyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    {
        size,
        limiter,
        stackScrollable,
    }: DropdownItemsGroupStyleParams,
) => ({
    root: { backgroundColor: palette.background.main },
    title: [
        {
            boxSizing: 'border-box',
            display: 'block',
            width: '100%',
            wordBreak: 'break-all',
            color: palette.text.secondary,
            borderTop: '1px solid',
            borderTopColor: palette.border.main,
            backgroundColor: palette.background.main,
            ...stackScrollable && {
                borderBottom: '1px solid',
                borderBottomColor: palette.border.main,
            },
        },
        paramsToCss(size)({
            [QX_SIZE.small]: {
                padding: '12px 12px 4px 12px',
                ...typography.Text.S.Medium,
            },
            [QX_SIZE.medium]: {
                padding: '16px 16px 4px 16px',
                ...typography.Text.M.Medium,
            },
            [QX_SIZE.large]: {
                padding: '16px 16px 4px 16px',
                ...typography.Text.L.Regular,
            },
        }),
    ],
    loader: {
        display: 'flex',
        justifyContent: 'center',
    },
    stack: {
        boxSizing: 'border-box',
        padding: 4,
        height: limiter,
        maxHeight: limiter,
        overflowY: 'auto',
        backgroundColor: palette.background.main,
    },
}), { name: 'QxDropdownItemsGroup' });

export type DropdownItemsGroupStyleKeys = KeysFromUseStyles<typeof useStyles>;
