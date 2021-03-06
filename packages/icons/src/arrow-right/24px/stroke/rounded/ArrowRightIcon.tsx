import React, { forwardRef } from 'react';

export const ArrowRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M14.8864 7.70684C14.496 7.31617 14.4962 6.68301 14.8869 6.29263C15.2776 5.90225 15.9107 5.90249 16.3011 6.29316L22.0037 12L16.3011 17.7068C15.9107 18.0975 15.2776 18.0977 14.8869 17.7074C14.4962 17.317 14.496 16.6838 14.8864 16.2932L18.1808 12.9962L3 12.9962C2.44772 12.9962 2 12.5485 2 11.9962C2 11.444 2.44772 10.9962 3 10.9962L18.1733 10.9962L14.8864 7.70684Z" fill="currentColor" />
    </svg>
));
