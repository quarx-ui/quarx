import { ownerDocument } from '@core/utils';

export const ownerWindow = (node?: Node | Document): Window => {
    const doc = ownerDocument(node);
    return doc.defaultView || window;
};
