export function composedPath(event: Event, document: Document, window: Window): void {
    /* eslint-disable-next-line no-extra-boolean-cast */
    if (Boolean(event.composedPath)) { return; }

    Object.defineProperties(event, {
        path: {
            get() {
                let current = this.target;
                const path = [];
                while (current.parentNode !== null) {
                    path.push(current);
                    current = current.parentNode;
                }

                path.push(document, window);

                return path;
            },
        },
        composedPath: {
            value() {
                return this.path;
            },
            writable: true,
        },
    });
}

export const addEventComposedPath = () => {
    if (typeof document === 'undefined') {
        console.warn('QuarX-UI: Polyfill didn\'t setted up. Document is not defined');

        return;
    }

    composedPath(Event.prototype, document, window);
};
