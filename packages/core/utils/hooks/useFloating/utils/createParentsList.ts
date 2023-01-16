import { isNullOrUndefined } from '@core/types/isNullOrUndefined';

export const createParentsList = (element: HTMLElement): HTMLElement[] => {
    const parents = [];
    let actualElement = element.parentElement;
    while (!isNullOrUndefined(actualElement)) {
        parents.push(actualElement);
        actualElement = actualElement.parentElement;
    }
    return parents;
};
