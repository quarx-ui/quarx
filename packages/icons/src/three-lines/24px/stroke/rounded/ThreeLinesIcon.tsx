import React, { forwardRef } from 'react';

export const ThreeLinesIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M4 15C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17L20 17C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15L4 15Z" fill="currentColor" />
        <path d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z" fill="currentColor" />
        <path d="M3 8C3 7.44771 3.44772 7 4 7L20 7C20.5523 7 21 7.44772 21 8C21 8.55229 20.5523 9 20 9L4 9C3.44772 9 3 8.55229 3 8Z" fill="currentColor" />
    </svg>
));
