import { KeysFromUseStyles, makeStyles, sizeToHeadlineSize, typography } from '@core/styles';
import { QX_SIZE } from '@core/enums';
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
    },
    headline: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: palette.text.main,
        ...typography.Headline[sizeToHeadlineSize[size]].Semibold,
    },
    icons: {
        display: 'inline-grid',
        gridAutoFlow: 'column',
        gap: '14px',
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
    },
    details: [
        {
            marginTop: size === QX_SIZE.xSmall ? 12 : 16,
        },
        !inheritTextStyles && sizeToTextStyle[size],
    ],
    divider: {
        marginTop: sizeToAccordionPadding[size] - 1,
    },
}));

export type AccordionStyleKeys = KeysFromUseStyles<typeof useStyles>;
