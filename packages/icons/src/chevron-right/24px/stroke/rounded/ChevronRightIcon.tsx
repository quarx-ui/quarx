import React, { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.29436 18.7061C8.90383 18.3155 8.90383 17.6824 9.29436 17.2918L14.0203 12.5659C14.287 12.2992 14.4203 12.1659 14.4203 12.0002C14.4203 11.8345 14.287 11.7011 14.0203 11.4345L9.2944 6.7091C8.90385 6.3186 8.90382 5.68543 9.29432 5.29489C9.68482 4.90434 10.318 4.9043 10.7085 5.29481L16.7074 11.293C16.8949 11.4805 17.0003 11.7349 17.0003 12.0001C17.0003 12.2653 16.8949 12.5197 16.7074 12.7072L10.7086 18.7061C10.318 19.0966 9.68488 19.0966 9.29436 18.7061Z" fill="currentColor" />
    </svg>
));
