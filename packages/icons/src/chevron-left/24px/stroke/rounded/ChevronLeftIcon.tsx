import React, { forwardRef } from 'react';

export const ChevronLeftIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.1169 7.28914C13.7263 6.8987 13.0932 6.89883 12.7027 7.28944L7.99592 11.9982L12.7027 16.707C13.0932 17.0976 13.7263 17.0977 14.1169 16.7073C14.5075 16.3168 14.5077 15.6836 14.1172 15.293L10.8238 11.9982L14.1172 8.70336C14.5077 8.31275 14.5075 7.67959 14.1169 7.28914Z" fill="currentColor" />
    </svg>
));
