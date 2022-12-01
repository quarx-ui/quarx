import { getNextOverScreen } from './getOverScreen';
import { DefaultStyles } from './restoreStyles';

interface DisableBackdropReturn {
    element: HTMLElement,
    defaultStyles: DefaultStyles,
}

export const disableBackdrop = (
    node: HTMLElement,
): DisableBackdropReturn | null => {
    const backdrop = node?.querySelector('[data-component=QxBackdrop][aria-hidden=false]') as HTMLElement | undefined;

    if (!backdrop) {
        return null;
    }

    const storedStyles: DefaultStyles = {
        opacity: backdrop?.style?.opacity,
    };

    backdrop.style.opacity = '0';

    return {
        element: backdrop,
        defaultStyles: storedStyles,
    };
};

export const disableNextBackdrop = (node: HTMLElement, currentIndex: number, uniqAttr: string) => {
    const nextDialog = getNextOverScreen(node, currentIndex, uniqAttr);

    return disableBackdrop(nextDialog);
};
