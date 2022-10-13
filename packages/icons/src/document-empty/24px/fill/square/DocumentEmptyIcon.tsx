import React, { forwardRef } from 'react';

export const DocumentEmptyIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M4.00098 2.8C4.00098 2.35817 4.35915 2 4.80098 2L12.8012 2C13.0221 2 13.2012 2.17909 13.2012 2.4V6.8C13.2012 7.90457 14.0966 8.8 15.2012 8.8H19.601C19.8219 8.8 20.001 8.97909 20.001 9.2V21.2C20.001 21.6418 19.6428 22 19.201 22H4.80098C4.35915 22 4.00098 21.6418 4.00098 21.2L4.00098 2.8Z" fill="currentColor" />
        <path d="M15.6838 2.1232C15.4318 1.87123 15.001 2.0497 15.001 2.40606V6.19997C15.001 6.64179 15.3591 6.99997 15.801 6.99997H19.5952C19.9516 6.99997 20.1301 6.56909 19.8781 6.31711L15.6838 2.1232Z" fill="currentColor" />
    </svg>
));
