import { DatePickerSize } from '@core/components/experimental';

const DROPDOWN_ELEMENT_HEIGHT = {
    small: 37,
    medium: 41,
    large: 45,
};

const HEIGHT_OF_THREE_ELEMENTS = (size: DatePickerSize) => DROPDOWN_ELEMENT_HEIGHT[size] * 3;

export function scrollParentToChild(
    parent : HTMLDivElement | null,
    child : HTMLDivElement | null,
    size: DatePickerSize,
) {
    if (parent && child) {
        const parentRect = parent.getBoundingClientRect();

        const parentViewableArea = {
            height: parent.clientHeight,
            width: parent.clientWidth,
        };

        const childRect = child.getBoundingClientRect();

        const isViewable = (childRect.top >= parentRect.top)
            && (childRect.top <= parentRect.top + parentViewableArea.height);

        if (!isViewable) {
            // eslint-disable-next-line no-param-reassign
            parent.scrollTop = (childRect.top + parent.scrollTop) - parentRect.top - HEIGHT_OF_THREE_ELEMENTS(size);
        }
    }
}
