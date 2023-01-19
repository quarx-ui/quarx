import React, { forwardRef } from 'react';

export const InfoIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8.0002 7.2002C8.44202 7.2002 8.8002 7.55837 8.8002 8.0002V11.5002C8.8002 11.942 8.44202 12.3002 8.0002 12.3002C7.55837 12.3002 7.2002 11.942 7.2002 11.5002V8.0002C7.2002 7.55837 7.55837 7.2002 8.0002 7.2002ZM7 5C7 4.44771 7.44772 4 8 4C8.55228 4 9 4.44771 9 5C9 5.55229 8.55228 6 8 6C7.44772 6 7 5.55229 7 5Z" fill="currentColor" />
    </svg>
));
