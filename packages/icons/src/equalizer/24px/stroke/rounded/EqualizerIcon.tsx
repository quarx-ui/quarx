import React, { forwardRef } from 'react';

export const EqualizerIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M15 10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10V8.2C17 8.08954 17.0895 8 17.2 8H21C21.5523 8 22 7.55228 22 7C22 6.44772 21.5523 6 21 6H17.2C17.0895 6 17 5.91046 17 5.8V4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4V10Z" fill="currentColor" />
        <path d="M3 6H12.7C12.8657 6 13 6.13431 13 6.3V7.7C13 7.86569 12.8657 8 12.7 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6Z" fill="currentColor" />
        <path d="M8 21C8.55229 21 9 20.5523 9 20V14C9 13.4477 8.55229 13 8 13C7.44771 13 7 13.4477 7 14V15.8C7 15.9105 6.91046 16 6.8 16H3C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H6.8C6.91046 18 7 18.0895 7 18.2V20C7 20.5523 7.44772 21 8 21Z" fill="currentColor" />
        <path d="M22 17C22 16.4477 21.5523 16 21 16H11.3C11.1343 16 11 16.1343 11 16.3V17.7C11 17.8657 11.1343 18 11.3 18H21C21.5523 18 22 17.5523 22 17Z" fill="currentColor" />
    </svg>
));
