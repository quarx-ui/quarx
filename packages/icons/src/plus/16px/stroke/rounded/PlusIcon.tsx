import React, { forwardRef } from 'react';

export const PlusIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8.75 2.75C8.75 2.33579 8.41421 2 8 2C7.58579 2 7.25 2.33579 7.25 2.75V7.05C7.25 7.16046 7.16046 7.25 7.05 7.25L2.75 7.25C2.33579 7.25 2 7.58579 2 8C2 8.41421 2.33579 8.75 2.75 8.75L7.05 8.75C7.16046 8.75 7.25 8.83954 7.25 8.95V13.25C7.25 13.6642 7.58579 14 8 14C8.41421 14 8.75 13.6642 8.75 13.25V8.95C8.75 8.83954 8.83954 8.75 8.95 8.75L13.25 8.75C13.6642 8.75 14 8.41421 14 8C14 7.58579 13.6642 7.25 13.25 7.25L8.95 7.25C8.83954 7.25 8.75 7.16046 8.75 7.05V2.75Z" fill="currentColor" />
    </svg>
));
