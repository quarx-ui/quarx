import React, { forwardRef } from 'react';

export const AttentionCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M10.5999 16.6C10.5999 17.3732 11.2267 18 11.9999 18C12.7731 18 13.3999 17.3732 13.3999 16.6C13.3999 15.8268 12.7731 15.2 11.9999 15.2C11.2267 15.2 10.5999 15.8268 10.5999 16.6Z" fill="currentColor" />
        <path d="M10.9998 12.5C10.9998 13.0523 11.4475 13.5 11.9998 13.5C12.552 13.5 12.9998 13.0523 12.9998 12.5L12.9998 7.00003C12.9998 6.44775 12.552 6.00003 11.9998 6.00003C11.4475 6.00003 10.9998 6.44775 10.9998 7.00003L10.9998 12.5Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" />
    </svg>
));
