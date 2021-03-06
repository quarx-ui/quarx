import React, { forwardRef } from 'react';

export const ThreeLinesIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17L19 17C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15L5 15Z" fill="currentColor" />
        <path d="M4 12C4 11.4477 4.44772 11 5 11L19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13L5 13C4.44772 13 4 12.5523 4 12Z" fill="currentColor" />
        <path d="M4 8C4 7.44771 4.44772 7 5 7L19 7C19.5523 7 20 7.44772 20 8C20 8.55229 19.5523 9 19 9L5 9C4.44772 9 4 8.55229 4 8Z" fill="currentColor" />
    </svg>
));
