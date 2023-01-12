import React, { forwardRef } from 'react';

export const SquareIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M4 8C4 6.11438 4 5.17157 4.58579 4.58579C5.17157 4 6.11438 4 8 4H16C17.8856 4 18.8284 4 19.4142 4.58579C20 5.17157 20 6.11438 20 8V16C20 17.8856 20 18.8284 19.4142 19.4142C18.8284 20 17.8856 20 16 20H8C6.11438 20 5.17157 20 4.58579 19.4142C4 18.8284 4 17.8856 4 16V8Z" fill="currentColor" />
    </svg>
));
