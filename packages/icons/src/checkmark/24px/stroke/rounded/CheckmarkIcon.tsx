import React, { forwardRef } from 'react';

export const CheckmarkIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.3078 8.29538C18.698 8.68627 18.6974 9.31943 18.3065 9.7096L10.999 17.0035L6.78899 12.7936C6.39846 12.403 6.39846 11.7699 6.78899 11.3793C7.17951 10.9888 7.81268 10.9888 8.2032 11.3793L11.0003 14.1764L16.8936 8.29407C17.2845 7.90391 17.9177 7.9045 18.3078 8.29538Z" fill="currentColor" />
    </svg>
));
