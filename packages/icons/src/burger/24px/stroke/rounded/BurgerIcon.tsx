import React, { forwardRef } from 'react';

export const BurgerIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M4 17C4 16.4477 4.44772 16 5 16L19 16C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18L5 18C4.44772 18 4 17.5523 4 17Z" fill="currentColor" />
        <path d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L5 11Z" fill="currentColor" />
        <path d="M5 6C4.44772 6 4 6.44772 4 7C4 7.55229 4.44772 8 5 8L19 8C19.5523 8 20 7.55229 20 7C20 6.44772 19.5523 6 19 6L5 6Z" fill="currentColor" />
    </svg>
));
