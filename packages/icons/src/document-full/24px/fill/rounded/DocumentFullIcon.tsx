import React, { forwardRef } from 'react';

export const DocumentFullIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M6 2C4.89543 2 4 2.89543 4 4L4 20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8.70001H15C14.0612 8.70001 13.3 7.9389 13.3 7.00001V2.00001L6 2ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11.26L14.0022 16L8 16ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14L16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12L8 12Z" fill="currentColor" />
        <path d="M15 2L20 7L15 7.00001L15 2Z" fill="currentColor" />
    </svg>
));
