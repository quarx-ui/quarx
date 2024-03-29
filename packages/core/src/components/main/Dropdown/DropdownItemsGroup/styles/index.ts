import {
    KeysFromUseStyles,
    makeStyles, TYPOGRAPHY_WEIGHT,
} from '@core/styles';
import { paramsToCss, QX_SIZE } from '@core';
import { DropdownItemsGroupStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, transitions, typography },
    {
        size,
        limiter,
        notScrolled,
    }: DropdownItemsGroupStyleParams,
) => ({
    root: {
        backgroundColor: palette.background.main,
        '&:not(:last-child)': {
            borderBottom: '1px solid',
            borderBottomColor: palette.border.main,
        },
    },
    title: [
        {
            boxSizing: 'border-box',
            display: 'block',
            width: '100%',
            wordBreak: 'break-all',
            color: palette.text.secondary,
            backgroundColor: palette.background.main,

            transition: transitions.create([
                'border-bottom-color',
            ], { duration: transitions.duration.shortest }),
            borderBottom: '1px solid',
            borderBottomColor: 'transparent',

            ...!notScrolled && {
                borderBottomColor: palette.border.main,
            },
        },
        paramsToCss(size)({
            [QX_SIZE.small]: {
                padding: '12px 12px 4px 12px',
                ...typography.base.text.small,
                fontWeight: TYPOGRAPHY_WEIGHT.medium,
            },
            [QX_SIZE.medium]: {
                padding: '16px 16px 4px 16px',
                ...typography.base.text.medium,
                fontWeight: TYPOGRAPHY_WEIGHT.medium,
            },
            [QX_SIZE.large]: {
                padding: '16px 16px 4px 16px',
                ...typography.base.text.large,
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
        maxHeight: limiter,
        overflowY: 'auto',
        backgroundColor: palette.background.main,
    },
}), { name: 'QxDropdownItemsGroup' });

export type DropdownItemsGroupStyleKeys = KeysFromUseStyles<typeof useStyles>;
