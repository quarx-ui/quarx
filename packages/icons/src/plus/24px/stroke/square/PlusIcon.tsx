import React, { forwardRef } from 'react';

export const PlusIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M13.5 11C13.2239 11 13 10.7761 13 10.5V4.5C13 4.22386 12.7761 4 12.5 4H11.5C11.2239 4 11 4.22386 11 4.5V10.5C11 10.7761 10.7761 11 10.5 11L4.5 11C4.22386 11 4 11.2239 4 11.5V12.5C4 12.7761 4.22386 13 4.5 13H10.5C10.7761 13 11 13.2239 11 13.5V19.5C11 19.7761 11.2239 20 11.5 20H12.5C12.7761 20 13 19.7761 13 19.5V13.5C13 13.2239 13.2239 13 13.5 13H19.5C19.7761 13 20 12.7761 20 12.5V11.5C20 11.2239 19.7761 11 19.5 11L13.5 11Z" fill="currentColor" />
    </svg>
));
