import { ownerWindow } from '@core/utils';

export const limitHeightByRows = (node: HTMLElement | null, minRows = 0, maxRows?: number) => {
    if (!node || (!maxRows && !minRows)) { return; }

    const element = node;

    const nodeStyles = ownerWindow(node).getComputedStyle(node);
    const lineHeight = parseInt(nodeStyles.lineHeight, 10);

    if (maxRows) {
        const maxScrollHeight = Math.round(lineHeight * maxRows);
        element.style.maxHeight = `${maxScrollHeight}px`;
    }

    const minScrollHeight = Math.round(lineHeight * minRows);
    element.style.minHeight = `${minScrollHeight}px`;
};
