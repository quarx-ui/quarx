import React, { forwardRef } from 'react';

export const PlusIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V10.7C11 10.8657 10.8657 11 10.7 11L5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H10.7C10.8657 13 11 13.1343 11 13.3V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13.3C13 13.1343 13.1343 13 13.3 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L13.3 11C13.1343 11 13 10.8657 13 10.7V5Z" fill="currentColor" />
    </svg>
));
