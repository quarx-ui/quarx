import React, { forwardRef } from 'react';

export const MinusIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4 11.5C4 11.2239 4.22386 11 4.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5V12.5C20 12.7761 19.7761 13 19.5 13L4.5 13C4.22386 13 4 12.7761 4 12.5L4 11.5Z" fill="currentColor" />
    </svg>
));
