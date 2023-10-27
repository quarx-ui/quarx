import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { cssVar } from '@core/utils/cssVars';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { BreadcrumbStyleParams } from '../../struct';
import { DroppedBreadcrumbCSSVarKeys } from './vars';

export const useStyles = makeStyles((
    { palette, transitions, typography },
    {
        disableFocus,
    }: BreadcrumbStyleParams,
    {
        cssBorderWidth,
        cssFocusWidth,
        cssFocusColor,
    }: Record<DroppedBreadcrumbCSSVarKeys, string>,
) => ({
    root: {
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px 8px',
        cursor: 'pointer',
        userSelect: 'none',
        outline: 'none',
        ...typography.base.text.medium,
        fontWeight: 400,
        color: palette.text.main,
        borderRadius: 4,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        wordBreak: 'break-word',

        transition: transitions.create(['background-color'], {
            duration: transitions.duration.shortest,
        }),

        [cssBorderWidth]: '1px',
        [cssFocusWidth]: '3px',
        [cssFocusColor]: palette.border.focus.main,
        ...baseFocusStyles({
            transitions,
            borderWidth: cssVar(cssBorderWidth),
            focusWidth: cssVar(cssFocusWidth),
        }),
        '&:hover': {
            backgroundColor: palette.background.container.hover,
        },
        '&:focus-visible': !disableFocus && stylesWithFocus({
            borderColor: cssVar(cssFocusColor),
        }),
    },
}));

export type DroppedBreadcrumbStyleKeys = KeysFromUseStyles<typeof useStyles>;
