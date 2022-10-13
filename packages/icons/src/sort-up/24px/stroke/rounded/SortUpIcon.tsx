import React, { forwardRef } from 'react';

export const SortUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M5 5.5C4.44772 5.5 4 5.05228 4 4.5C4 3.94771 4.44772 3.5 5 3.5L10.5 3.5C11.0523 3.5 11.5 3.94772 11.5 4.5C11.5 5.05229 11.0523 5.5 10.5 5.5L5 5.5Z" fill="currentColor" />
        <path d="M5 10.5C4.44772 10.5 4 10.0523 4 9.5C4 8.94772 4.44772 8.5 5 8.5L13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5L5 10.5Z" fill="currentColor" />
        <path d="M5 15.5C4.44772 15.5 4 15.0523 4 14.5C4 13.9477 4.44772 13.5 5 13.5L16.5 13.5C17.0523 13.5 17.5 13.9477 17.5 14.5C17.5 15.0523 17.0523 15.5 16.5 15.5L5 15.5Z" fill="currentColor" />
        <path d="M4 19.5C4 20.0523 4.44772 20.5 5 20.5L20 20.5C20.5523 20.5 21 20.0523 21 19.5C21 18.9477 20.5523 18.5 20 18.5L5 18.5C4.44772 18.5 4 18.9477 4 19.5Z" fill="currentColor" />
    </svg>
));
