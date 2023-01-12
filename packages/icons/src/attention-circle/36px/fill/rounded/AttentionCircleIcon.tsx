import React, { forwardRef } from 'react';

export const AttentionCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32ZM18.0002 9C18.8287 9 19.5002 9.67157 19.5002 10.5V20.25C19.5002 21.0784 18.8287 21.75 18.0002 21.75C17.1718 21.75 16.5002 21.0784 16.5002 20.25V10.5C16.5002 9.67157 17.1718 9 18.0002 9ZM19.8002 25.8C19.8002 26.7941 18.9943 27.6 18.0002 27.6C17.0061 27.6 16.2002 26.7941 16.2002 25.8C16.2002 24.8059 17.0061 24 18.0002 24C18.9943 24 19.8002 24.8059 19.8002 25.8Z" fill="currentColor" />
    </svg>
));
