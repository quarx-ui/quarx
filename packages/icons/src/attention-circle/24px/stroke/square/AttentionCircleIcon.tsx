import React, { forwardRef } from 'react';

export const AttentionCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M10.5999 16.4C10.5999 17.1732 11.2267 17.8 11.9999 17.8C12.7731 17.8 13.3999 17.1732 13.3999 16.4C13.3999 15.6268 12.7731 15 11.9999 15C11.2267 15 10.5999 15.6268 10.5999 16.4Z" fill="currentColor" />
        <path d="M10.9998 12.5C10.9998 13.0523 11.4475 13.5 11.9998 13.5C12.552 13.5 12.9998 13.0523 12.9998 12.5L12.9998 6.00003H10.9998L10.9998 12.5Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" />
    </svg>
));
