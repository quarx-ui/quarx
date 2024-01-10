export type DefaultStyles = Record<string, string>

export const restoreStyles = (node: HTMLElement, defaultStyles: DefaultStyles) => {
    Object
        .entries(defaultStyles)
        .forEach(([style, value]) => {
            if (value) {
                node.style.setProperty(style, value);
            } else {
                node.style.removeProperty(style);
            }
        });
};
