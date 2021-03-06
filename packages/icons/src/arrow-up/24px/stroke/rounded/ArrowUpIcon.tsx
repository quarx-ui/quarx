import React, { forwardRef } from 'react';

export const ArrowUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M16.2932 9.11364C16.6838 9.50402 17.317 9.50378 17.7074 9.11311C18.0977 8.72244 18.0975 8.08927 17.7068 7.69889L12 1.99634L6.29316 7.69889C5.90249 8.08927 5.90225 8.72244 6.29263 9.11311C6.68301 9.50378 7.31617 9.50402 7.70684 9.11364L11 5.82295V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V5.82295L16.2932 9.11364Z" fill="currentColor" />
    </svg>
));
