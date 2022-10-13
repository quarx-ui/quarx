import React, { forwardRef } from 'react';

export const MinusIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M2 8C2 7.58579 2.33579 7.25 2.75 7.25L13.25 7.25C13.6642 7.25 14 7.58579 14 8C14 8.41421 13.6642 8.75 13.25 8.75L2.75 8.75C2.33579 8.75 2 8.41421 2 8Z" fill="currentColor" />
    </svg>
));
