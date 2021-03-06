import React, { forwardRef } from 'react';

export const ChevronUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.7109 15.117C17.1013 14.7264 17.1012 14.0932 16.7106 13.7027L12.0018 8.99595L7.29304 13.7027C6.90244 14.0932 6.9023 14.7264 7.29275 15.117C7.68319 15.5076 8.31635 15.5077 8.70696 15.1173L12.0018 11.8238L15.2966 15.1173C15.6872 15.5077 16.3204 15.5076 16.7109 15.117Z" fill="currentColor" />
    </svg>
));
