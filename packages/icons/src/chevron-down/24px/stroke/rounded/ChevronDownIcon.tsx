import React, { forwardRef } from 'react';

export const ChevronDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.7109 9.8813C17.1013 10.2719 17.1012 10.9051 16.7106 11.2955L12.0018 16.0023L7.29304 11.2955C6.90244 10.9051 6.9023 10.2719 7.29275 9.8813C7.68319 9.49069 8.31635 9.49056 8.70696 9.881L12.0018 13.1745L15.2966 9.881C15.6872 9.49056 16.3204 9.49069 16.7109 9.8813Z" fill="currentColor" />
    </svg>
));
