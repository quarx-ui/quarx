import { KeysFromUseStyles, makeStyles, sizeToHeadlineSize, typography } from '@core/styles';
import { QX_SIZE } from '@core/enums';
import { paramsToCss } from '@core';
import { AccordionStyleParams } from './types';
import { sizeToAccordionPadding, sizeToTextStyle } from './map';

export const useStyles = makeStyles((
    { palette, transitions },
    {
        open,
        size,
        showDivider,
        inheritTextStyles,
    }: AccordionStyleParams,
) => ({
    root: [
        { padding: `${sizeToAccordionPadding[size]}px 0` },
        showDivider && { paddingBottom: 0 },
    ],
    summary: {
        cursor: 'pointer',
        display: 'grid',
        gridTemplateAreas: `
            "leftIcon headline"
            ". description"`,
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
    },
    headline: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gridArea: 'headline',
    },
    title: {
        color: palette.text.main,
        ...typography.Headline[sizeToHeadlineSize[size]].Semibold,
    },
    leftIcon: {
        gridArea: 'leftIcon',
        marginRight: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons: {
        display: 'inline-grid',
        gridAutoFlow: 'column',
        columnGap: '14px',
    },
    collapseIcon: [
        {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: transitions.create('transform'),
        },
        open && { transform: 'rotate(-180deg)' },
    ],
    statusIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        color: palette.text.secondary,
        ...sizeToTextStyle[size],
        gridArea: 'description',
    },
    details: [
        !inheritTextStyles && sizeToTextStyle[size],
        paramsToCss(size)({
            [QX_SIZE.small]: {
                paddingTop: 12,
            },
            [QX_SIZE.medium]: {
                paddingTop: 16,
            },
            [QX_SIZE.large]: {
                paddingTop: 16,
            },
        }),
    ],
    divider: {
        marginTop: sizeToAccordionPadding[size] - 1,
    },
}));

export type AccordionStyleKeys = KeysFromUseStyles<typeof useStyles>;
