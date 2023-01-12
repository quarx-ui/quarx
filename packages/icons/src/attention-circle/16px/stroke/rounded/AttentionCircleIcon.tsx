import React, { forwardRef } from 'react';

export const AttentionCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8 4.25C8.41421 4.25 8.75 4.58579 8.75 5V8.5C8.75 8.91421 8.41421 9.25 8 9.25C7.58579 9.25 7.25 8.91421 7.25 8.5V5C7.25 4.58579 7.58579 4.25 8 4.25Z" fill="currentColor" />
        <path d="M8.00042 11.9977C8.49684 11.9977 8.89927 11.5953 8.89927 11.0989C8.89927 10.6024 8.49684 10.2 8.00042 10.2C7.50399 10.2 7.10156 10.6024 7.10156 11.0989C7.10156 11.5953 7.50399 11.9977 8.00042 11.9977Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5Z" fill="currentColor" />
    </svg>
));
