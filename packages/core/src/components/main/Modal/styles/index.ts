import { KeysFromUseStyles, makeStyles } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { cssVar } from '@core/utils/cssVars';
import { ModalCSSVarKeys } from '@core/components/main/Modal/styles/vars';
import { ModalStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, borders, borderRadii, elevations, typography },
    { size, scrollBehaviour, hasHeader, hasFooter }: ModalStyleParams,
    { cssBoxMargin, cssBorderRadius }: Record<ModalCSSVarKeys, string>,
) => ({
    root: [
        {
            [cssBoxMargin]: '32px',
            [cssBorderRadius]: borderRadii.xLarge,
        },
    ],
    scrollContainer: [
        {
            position: 'relative',
            height: '100%',
            zIndex: 1000,
            flexGrow: 1,
        },

        paramsToCss(scrollBehaviour)({
            window: {
                textAlign: 'center',
                overflow: 'hidden auto',

                '&:after': {
                    content: '""',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    height: '100%',
                    width: 0,
                },
            },
            body: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }),
    ],

    box: [
        {
            borderRadius: cssVar(cssBorderRadius),
            ...elevations.main.medium,
            color: palette.text.main,
            maxWidth: '100%',
            margin: `${cssVar(cssBoxMargin)} auto`,
            overflowY: 'auto',
        },

        borders.create({
            color: palette.border.main,
            size: 'small',
        }),

        paramsToCss(size)({
            small: {
                width: 480,
                ...typography.base.text.medium,
            },
            medium: {
                width: 512,
                ...typography.base.text.large,
            },
        }),

        paramsToCss(scrollBehaviour)({
            body: {
                display: 'flex',
                flexDirection: 'column',
                maxHeight: `calc(100% - (${cssVar(cssBoxMargin)} * 2))`,
            },
            window: {
                display: 'inline-block',
                verticalAlign: 'middle',
                textAlign: 'left',
            },
        }),
    ],
    body: [
        {
            overflow: 'auto',
            flexGrow: 1,
        },
        paramsToCss(size)({
            small: {
                padding: 24,
            },
            medium: {
                padding: 32,
            },
        }),
        hasHeader && {
            paddingTop: 0,
        },
        hasFooter && {
            paddingBottom: 0,
        },
    ],
}));

export type ModalStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
export * from './vars';
