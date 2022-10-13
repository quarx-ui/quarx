import React, { forwardRef } from 'react';

export const AttentionCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.9998 8C14.9998 4.13401 11.8657 1 7.99976 1C4.13376 1 0.999756 4.13401 0.999756 8C0.999756 11.866 4.13376 15 7.99976 15C11.8657 15 14.9998 11.866 14.9998 8ZM7.99971 4C8.44153 4 8.79971 4.35817 8.79971 4.8V8.7498C8.79971 9.19163 8.44153 9.5498 7.99971 9.5498C7.55788 9.5498 7.19971 9.19163 7.19971 8.7498V4.8C7.19971 4.35817 7.55788 4 7.99971 4ZM9 11.5996C9 12.1519 8.55228 12.5996 8 12.5996C7.44772 12.5996 7 12.1519 7 11.5996C7 11.0473 7.44772 10.5996 8 10.5996C8.55228 10.5996 9 11.0473 9 11.5996Z" fill="currentColor" />
    </svg>
));
