import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { cssVar } from '@core';
import { PopupStyleParams } from './types';
import { PopupCSSVarKeys } from './vars';

export const useStyles = makeStyles((
    { palette },
    { x, y, disableBackdrop }: PopupStyleParams,
    { cssBackgroundColor, cssBorderRadius, cssPadding }: Record<PopupCSSVarKeys, string>,
) => ({
    root: {
        boxSizing: 'border-box',
        width: 'fit-content',
        marginTop: y,
        marginLeft: x,
        [cssBackgroundColor]: palette.background.main,
        backgroundColor: cssVar(cssBackgroundColor),
        [cssBorderRadius]: '4px',
        borderRadius: cssVar(cssBorderRadius),
        [cssPadding]: '24px',
        padding: cssVar(cssPadding),

        ...disableBackdrop && {
            position: 'fixed',
            left: 0,
            top: 0,
        },
    },
}), { name: 'QxPopup' });

export type PopupStyleKeys = KeysFromUseStyles<typeof useStyles>;
