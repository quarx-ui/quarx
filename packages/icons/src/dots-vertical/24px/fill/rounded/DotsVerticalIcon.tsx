import React, { forwardRef } from 'react';

export const DotsVerticalIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M9.5 4.5C9.5 5.875 10.625 7 12 7C13.375 7 14.5 5.875 14.5 4.5C14.5 3.125 13.375 2 12 2C10.625 2 9.5 3.125 9.5 4.5Z" fill="currentColor" />
        <path d="M9.5 19.5C9.5 20.875 10.625 22 12 22C13.375 22 14.5 20.875 14.5 19.5C14.5 18.125 13.375 17 12 17C10.625 17 9.5 18.125 9.5 19.5Z" fill="currentColor" />
        <path d="M12 14.5C10.625 14.5 9.5 13.375 9.5 12C9.5 10.625 10.625 9.5 12 9.5C13.375 9.5 14.5 10.625 14.5 12C14.5 13.375 13.375 14.5 12 14.5Z" fill="currentColor" />
    </svg>
));
