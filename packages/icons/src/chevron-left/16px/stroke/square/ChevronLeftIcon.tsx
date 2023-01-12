import React, { forwardRef } from 'react';

export const ChevronLeftIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.90661 4.62467C10.0239 4.74181 10.0239 4.93173 9.90665 5.04889L7.16797 7.78586C7.05073 7.90302 7.05075 8.09294 7.16801 8.21008L9.91009 10.9494C10.0274 11.0666 10.0274 11.2565 9.91009 11.3737L9.27306 12.0101C9.15578 12.1272 8.96564 12.1272 8.84837 12.0101L5.11532 8.28079C4.95897 8.12459 4.95895 7.87135 5.11528 7.71514L8.84485 3.98829C8.96212 3.8711 9.15228 3.87109 9.26957 3.98826L9.90661 4.62467Z" fill="currentColor" />
    </svg>
));
