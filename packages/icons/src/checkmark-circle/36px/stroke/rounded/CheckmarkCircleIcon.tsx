import React, { forwardRef } from 'react';

export const CheckmarkCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M24.2071 15.7071C24.5976 15.3166 24.5976 14.6834 24.2071 14.2929C23.8166 13.9024 23.1834 13.9024 22.7929 14.2929L17.5657 19.5201C17.299 19.7868 17.1657 19.9201 17 19.9201C16.8343 19.9201 16.701 19.7868 16.4343 19.5201L14.7071 17.7929C14.3166 17.4024 13.6834 17.4024 13.2929 17.7929C12.9024 18.1834 12.9024 18.8166 13.2929 19.2071L16.2929 22.2071C16.6834 22.5976 17.3166 22.5976 17.7071 22.2071L24.2071 15.7071Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4ZM6 18C6 11.3726 11.3726 6 18 6C24.6274 6 30 11.3726 30 18C30 24.6274 24.6274 30 18 30C11.3726 30 6 24.6274 6 18Z" fill="currentColor" />
    </svg>
));
