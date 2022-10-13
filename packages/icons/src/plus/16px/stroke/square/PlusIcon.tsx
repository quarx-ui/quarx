import React, { forwardRef } from 'react';

export const PlusIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8.95 7.25C8.83954 7.25 8.75 7.16046 8.75 7.05V2.3C8.75 2.13431 8.61569 2 8.45 2H7.55C7.38431 2 7.25 2.13431 7.25 2.3V7.05C7.25 7.16046 7.16046 7.25 7.05 7.25L2.3 7.25C2.13431 7.25 2 7.38431 2 7.55V8.45C2 8.61569 2.13431 8.75 2.3 8.75L7.05 8.75C7.16046 8.75 7.25 8.83954 7.25 8.95V13.7C7.25 13.8657 7.38431 14 7.55 14H8.45C8.61569 14 8.75 13.8657 8.75 13.7V8.95C8.75 8.83954 8.83954 8.75 8.95 8.75L13.7 8.75C13.8657 8.75 14 8.61568 14 8.45V7.55C14 7.38431 13.8657 7.25 13.7 7.25L8.95 7.25Z" fill="currentColor" />
    </svg>
));
