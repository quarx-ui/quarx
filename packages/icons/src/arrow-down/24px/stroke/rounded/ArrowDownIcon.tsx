import React, { forwardRef } from 'react';

export const ArrowDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M13 18.1771L16.2932 14.8864C16.6838 14.496 17.317 14.4963 17.7074 14.8869C18.0977 15.2776 18.0975 15.9108 17.7068 16.3011L12 22.0037L6.29316 16.3011C5.90249 15.9108 5.90225 15.2776 6.29263 14.8869C6.68301 14.4963 7.31617 14.496 7.70684 14.8864L11 18.1771L11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 18.1771Z" fill="currentColor" />
    </svg>
));
