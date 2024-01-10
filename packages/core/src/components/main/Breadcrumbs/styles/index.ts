import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { BREADCRUMB_TYPE, paramsToCss, QX_SIZE } from '@core';
import { BreadcrumbsStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, elevations, typography },
    {
        size,
        color,
        type,
    }: BreadcrumbsStyleParams,
) => ({
    root: {},
    stack: {
        flexWrap: 'wrap',
        rowGap: 4,
    },
    divider: {
        ...typography.base.text[size],
        ...paramsToCss(type)({
            [BREADCRUMB_TYPE.link]: {
                color: palette.colors[color].border,
                fontWeight: 500,
            },
            [BREADCRUMB_TYPE.contained]: {
                color: palette.text.tertiary,
                fontWeight: 400,
            },
        }),
    },
    popup: [
        {
            borderRadius: 8,
            border: '1px solid',
            borderColor: palette.border.main,
            maxHeight: 128,
            overflowY: 'auto',
            ...elevations.secondary.medium,
        },
        paramsToCss(size)({
            [QX_SIZE.small]: { padding: 4 },
            [QX_SIZE.medium]: { padding: 4 },
            [QX_SIZE.large]: { padding: 8 },
        }),
    ],
}));

export type BreadcrumbsStyleKeys = KeysFromUseStyles<typeof useStyles>;
