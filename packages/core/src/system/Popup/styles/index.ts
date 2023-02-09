import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { cssVar } from '@core';
import { POPUP_PAPER_REFERENCE } from './constants';
import { PopupStyleParams } from './types';
import { PopupCSSVarKeys } from './vars';

export const useStyles = makeStyles((
    { palette },
    { x, y, reference, disableBackdrop }: PopupStyleParams,
    { cssBackgroundColor, cssBorderRadius, cssPadding }: Record<PopupCSSVarKeys, string>,
) => ({
    root: {
        boxSizing: 'border-box',
        width: 'fit-content',
        transform: `translate(${x}px, ${y}px)`,

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

        ...reference === POPUP_PAPER_REFERENCE.relative && {
            position: 'absolute',
        },

        // TODO: Просчитать баги по следующим вариантам:
        /*
            relative =>
              portal  +   backdrop
              !portal +   backdrop
              portal  +   !backdrop
              !portal +   !backdrop
        */
    },
}), { name: 'QxPopup' });

export type PopupStyleKeys = KeysFromUseStyles<typeof useStyles>;
