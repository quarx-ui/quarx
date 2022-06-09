import React, { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.88307 7.28914C10.2737 6.8987 10.9068 6.89883 11.2973 7.28944L16.0041 11.9982L11.2973 16.707C10.9068 17.0976 10.2737 17.0977 9.88307 16.7073C9.49246 16.3168 9.49233 15.6836 9.88277 15.293L13.1762 11.9982L9.88277 8.70336C9.49233 8.31275 9.49246 7.67959 9.88307 7.28914Z" fill="currentColor" />
    </svg>
));
