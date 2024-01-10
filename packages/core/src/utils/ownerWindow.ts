import { ownerDocument } from '@core/utils';

export const ownerWindow = (node?: Node | Document | null): Window => {
    const doc = ownerDocument(node);
    return doc.defaultView || window;
};
