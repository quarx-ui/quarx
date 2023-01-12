import React, { forwardRef } from 'react';

export const ChevronDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.6243 6.09632C4.74145 5.97906 4.93136 5.97904 5.04853 6.09628L7.78549 8.83496C7.90265 8.9522 8.09257 8.95218 8.20971 8.83492L10.949 6.09284C11.0662 5.97556 11.2561 5.97556 11.3733 6.09284L12.0097 6.72987C12.1269 6.84715 12.1269 7.03729 12.0097 7.15456L8.28042 10.8876C8.12422 11.044 7.87099 11.044 7.71477 10.8876L3.98792 7.15808C3.87074 7.04081 3.87072 6.85065 3.98789 6.73336L4.6243 6.09632Z" fill="currentColor" />
    </svg>
));
