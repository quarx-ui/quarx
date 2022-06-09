import React, { forwardRef } from 'react';

export const InfoIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8.89927 4.90114C8.89927 4.40472 8.49684 4.00229 8.00042 4.00229C7.50399 4.00229 7.10156 4.40472 7.10156 4.90114C7.10156 5.39756 7.50399 5.79999 8.00042 5.79999C8.49684 5.79999 8.89927 5.39756 8.89927 4.90114Z" fill="currentColor" />
        <path d="M8.75 12.0017V7.50001C8.75 7.08579 8.41421 6.75001 8 6.75001C7.58579 6.75001 7.25 7.08579 7.25 7.50001V12.0017H8.75Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z" fill="currentColor" />
    </svg>
));
