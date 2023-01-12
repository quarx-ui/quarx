import React, { forwardRef } from 'react';

export const MinusCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM4.8 7.2002C4.63431 7.2002 4.5 7.33451 4.5 7.5002V8.5002C4.5 8.66588 4.63431 8.8002 4.8 8.8002L11.2002 8.8002C11.3659 8.8002 11.5002 8.66588 11.5002 8.5002V7.5002C11.5002 7.33451 11.3659 7.2002 11.2002 7.2002L4.8 7.2002Z" fill="currentColor" />
    </svg>
));
