import { Arrangement, ARRANGEMENTS, PopupPaperReference } from '@core';
import { POPUP_PAPER_REFERENCE } from './styles/constants';

export const referenceToArrangementMap: Record<PopupPaperReference, Arrangement> = {
    [POPUP_PAPER_REFERENCE.relative]: ARRANGEMENTS.absolute,
    [POPUP_PAPER_REFERENCE.window]: ARRANGEMENTS.fixed,
};
