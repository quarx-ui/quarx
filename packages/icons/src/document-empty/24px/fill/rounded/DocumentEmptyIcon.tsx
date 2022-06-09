import React, { forwardRef } from 'react';

export const DocumentEmptyIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M4 4C4 2.89543 4.89543 2 6 2L13.3 2.00001V5.50001C13.3 7.26732 14.7327 8.70001 16.5 8.70001H20V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20L4 4Z" fill="currentColor" />
        <path d="M20 7L15 2V5.5C15 6.32843 15.6716 7 16.5 7H20Z" fill="currentColor" />
    </svg>
));
