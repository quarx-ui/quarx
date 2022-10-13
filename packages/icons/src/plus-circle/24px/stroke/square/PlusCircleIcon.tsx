import React, { forwardRef } from 'react';

export const PlusCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M13 10.7C13 10.8657 13.1343 11 13.3 11H16.7C16.8657 11 17 11.1343 17 11.3V12.7C17 12.8657 16.8657 13 16.7 13H13.3C13.1343 13 13 13.1343 13 13.3V16.7C13 16.8657 12.8657 17 12.7 17H11.3C11.1343 17 11 16.8657 11 16.7V13.3C11 13.1343 10.8657 13 10.7 13H7.3C7.13431 13 7 12.8657 7 12.7V11.3C7 11.1343 7.13431 11 7.3 11H10.7C10.8657 11 11 10.8657 11 10.7V7.3C11 7.13431 11.1343 7 11.3 7H12.7C12.8657 7 13 7.13431 13 7.3V10.7Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="currentColor" />
    </svg>
));
