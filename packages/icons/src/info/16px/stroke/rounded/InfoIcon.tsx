import React, { forwardRef } from 'react';

export const InfoIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8 11.75C8.41421 11.75 8.75 11.4142 8.75 11V7.5C8.75 7.08579 8.41421 6.75 8 6.75C7.58579 6.75 7.25 7.08579 7.25 7.5V11C7.25 11.4142 7.58579 11.75 8 11.75Z" fill="currentColor" />
        <path d="M8.00042 4.0023C8.49684 4.0023 8.89927 4.40473 8.89927 4.90115C8.89927 5.39757 8.49684 5.8 8.00042 5.8C7.50399 5.8 7.10156 5.39757 7.10156 4.90115C7.10156 4.40473 7.50399 4.0023 8.00042 4.0023Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5Z" fill="currentColor" />
    </svg>
));
