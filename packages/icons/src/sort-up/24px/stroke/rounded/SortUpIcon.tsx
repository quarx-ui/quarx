import React, { forwardRef } from 'react';

export const SortUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M5 7C4.44772 7 4 6.55229 4 6C4 5.44772 4.44772 5 5 5L10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7L5 7Z" fill="currentColor" />
        <path d="M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9L13 9C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11L5 11Z" fill="currentColor" />
        <path d="M5 15C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 15Z" fill="currentColor" />
        <path d="M4 18C4 18.5523 4.44772 19 5 19L19 19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17L5 17C4.44772 17 4 17.4477 4 18Z" fill="currentColor" />
    </svg>
));
