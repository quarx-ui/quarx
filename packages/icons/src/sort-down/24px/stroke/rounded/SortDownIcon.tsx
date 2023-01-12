import React, { forwardRef } from 'react';

export const SortDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M5 18.5C4.44772 18.5 4 18.9477 4 19.5C4 20.0523 4.44772 20.5 5 20.5H10.5C11.0523 20.5 11.5 20.0523 11.5 19.5C11.5 18.9477 11.0523 18.5 10.5 18.5L5 18.5Z" fill="currentColor" />
        <path d="M5 13.5C4.44772 13.5 4 13.9477 4 14.5C4 15.0523 4.44772 15.5 5 15.5H13.5C14.0523 15.5 14.5 15.0523 14.5 14.5C14.5 13.9477 14.0523 13.5 13.5 13.5H5Z" fill="currentColor" />
        <path d="M5 8.5C4.44772 8.5 4 8.94772 4 9.5C4 10.0523 4.44772 10.5 5 10.5L16.5 10.5C17.0523 10.5 17.5 10.0523 17.5 9.5C17.5 8.94772 17.0523 8.5 16.5 8.5L5 8.5Z" fill="currentColor" />
        <path d="M4 4.5C4 3.94772 4.44772 3.5 5 3.5L20 3.5C20.5523 3.5 21 3.94772 21 4.5C21 5.05229 20.5523 5.5 20 5.5L5 5.5C4.44772 5.5 4 5.05229 4 4.5Z" fill="currentColor" />
    </svg>
));
