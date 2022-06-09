import React, { forwardRef } from 'react';

export const ArrowRightSquareIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M4 6C4 4.34315 5.34315 3 7 3H15C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5H7C6.44772 5 6 5.44772 6 6V18C6 18.5523 6.44772 19 7 19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H7C5.34315 21 4 19.6569 4 18V6Z" fill="currentColor" />
        <path d="M18.1757 11L16.8828 9.70711C16.4923 9.31658 16.4923 8.68342 16.8828 8.29289C17.2734 7.90237 17.9065 7.90237 18.297 8.29289L22.0042 12L18.297 15.7071C17.9065 16.0976 17.2734 16.0976 16.8828 15.7071C16.4923 15.3166 16.4923 14.6834 16.8828 14.2929L18.1757 13H12C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11H18.1757Z" fill="currentColor" />
    </svg>
));
