import React, { forwardRef } from 'react';

export const MinusIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M2.3 7.25C2.13431 7.25 2 7.38432 2 7.55V8.45C2 8.61569 2.13431 8.75 2.3 8.75L13.7 8.75C13.8657 8.75 14 8.61569 14 8.45V7.55C14 7.38431 13.8657 7.25 13.7 7.25L2.3 7.25Z" fill="currentColor" />
    </svg>
));
