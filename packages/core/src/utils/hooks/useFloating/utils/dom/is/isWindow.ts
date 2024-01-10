/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
    interface Window {
        HTMLElement: any;
        Element: any;
        Node: any;
        ShadowRoot: any;
    }
}

export function isWindow(value: any): value is Window {
    return (
        value
        && value.document
        && value.location
        && value.alert
        && value.setInterval
    );
}
