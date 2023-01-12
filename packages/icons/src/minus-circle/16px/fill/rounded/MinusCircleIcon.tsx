import React, { forwardRef } from 'react';

export const MinusCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.99976 1C11.8657 1 14.9998 4.13401 14.9998 8C14.9998 11.866 11.8657 15 7.99976 15C4.13376 15 0.999756 11.866 0.999756 8C0.999756 4.13401 4.13376 1 7.99976 1ZM5.3 7.1998C4.85817 7.1998 4.5 7.55798 4.5 7.9998C4.5 8.44163 4.85817 8.7998 5.3 8.7998L10.7002 8.7998C11.142 8.7998 11.5002 8.44163 11.5002 7.9998C11.5002 7.55798 11.142 7.1998 10.7002 7.1998L5.3 7.1998Z" fill="currentColor" />
    </svg>
));
