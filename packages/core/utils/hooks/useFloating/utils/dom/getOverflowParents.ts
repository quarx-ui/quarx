import { getNearestOverflowParent } from './getNearestOverflowParent';
import { getWindow } from './getWindow';
import { isOverflowElement } from './is';

export function getOverflowParents(
    node: Node,
    list: Array<Element | Window> = [],
): Array<Element | Window | VisualViewport> {
    const scrollableParent = getNearestOverflowParent(node);
    const isBody = scrollableParent === node.ownerDocument?.body;
    const win = getWindow(scrollableParent);
    const target = isBody
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? ([win] as any).concat(
            win.visualViewport || [],
            isOverflowElement(scrollableParent) ? scrollableParent : [],
        )
        : scrollableParent;
    const updatedList = list.concat(target);

    return isBody
        ? updatedList
        : updatedList.concat(getOverflowParents(target) as (Element | Window)[]);
}
