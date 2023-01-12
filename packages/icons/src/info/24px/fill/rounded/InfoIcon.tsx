import React, { forwardRef } from 'react';

export const InfoIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.9999 6C12.8836 6 13.5999 6.71634 13.5999 7.6C13.5999 8.48365 12.8836 9.2 11.9999 9.2C11.1162 9.2 10.3999 8.48366 10.3999 7.6C10.3999 6.71634 11.1162 6 11.9999 6ZM11.9998 18C12.6626 18 13.1998 17.4627 13.1998 16.8L13.1998 12.0002C13.1998 11.3374 12.6625 10.8002 11.9998 10.8002C11.3371 10.8002 10.7998 11.3375 10.7998 12.0002L10.7998 16.8C10.7998 17.4627 11.3371 18 11.9998 18Z" fill="currentColor" />
    </svg>
));
