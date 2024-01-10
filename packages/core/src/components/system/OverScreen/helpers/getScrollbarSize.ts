import { ownerWindow } from '@core/utils';

export const getScrollbarSize = (document: Document) => {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(ownerWindow(document).innerWidth - documentWidth);
};
