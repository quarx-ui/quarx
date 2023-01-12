import React, { forwardRef } from 'react';

export const AttentionCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M19.4001 23.6002C19.4001 24.3734 18.7733 25.0002 18.0001 25.0002C17.2269 25.0002 16.6001 24.3734 16.6001 23.6002C16.6001 22.827 17.2269 22.2002 18.0001 22.2002C18.7733 22.2002 19.4001 22.827 19.4001 23.6002Z" fill="currentColor" />
        <path d="M19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11V19.5C17 20.0523 17.4477 20.5 18 20.5C18.5523 20.5 19 20.0523 19 19.5L19 11Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4 18C4 10.268 10.268 4 18 4C25.732 4 32 10.268 32 18C32 25.732 25.732 32 18 32C10.268 32 4 25.732 4 18ZM18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6Z" fill="currentColor" />
    </svg>
));
