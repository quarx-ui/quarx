import React, { forwardRef } from 'react';

export const ChevronLeftIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.083 5.96569C15.239 6.12189 15.239 6.37513 15.083 6.53135L9.68937 11.9315C9.65036 11.9706 9.65037 12.0339 9.68938 12.073L15.0801 17.4685C15.2362 17.6247 15.2362 17.878 15.0801 18.0342L14.2325 18.8828C14.0765 19.039 13.8235 19.039 13.6674 18.8828L7.14632 12.3559C6.95125 12.1606 6.95122 11.844 7.14627 11.6488L13.6702 5.11718C13.8262 4.96095 14.0792 4.96094 14.2353 5.11716L15.083 5.96569Z" fill="currentColor" />
    </svg>
));
