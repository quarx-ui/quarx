import React, { forwardRef } from 'react';

export const SquareIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M4 4.8C4 4.35817 4.35817 4 4.8 4H19.2C19.6418 4 20 4.35817 20 4.8V19.2C20 19.6418 19.6418 20 19.2 20H4.8C4.35817 20 4 19.6418 4 19.2V4.8Z" fill="currentColor" />
    </svg>
));
