import React, { forwardRef } from 'react';

export const ClockIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11V17.1716C17 17.7847 17 18.0913 17.1142 18.3669C17.2284 18.6426 17.4451 18.8593 17.8787 19.2929L22.7929 24.2071C23.1834 24.5976 23.8166 24.5976 24.2071 24.2071C24.5976 23.8166 24.5976 23.1834 24.2071 22.7929L19.5858 18.1716C19.2968 17.8825 19.1522 17.738 19.0761 17.5543C19 17.3705 19 17.1661 19 16.7574V11Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4ZM6 18C6 11.3726 11.3726 6 18 6C24.6274 6 30 11.3726 30 18C30 24.6274 24.6274 30 18 30C11.3726 30 6 24.6274 6 18Z" fill="currentColor" />
    </svg>
));
