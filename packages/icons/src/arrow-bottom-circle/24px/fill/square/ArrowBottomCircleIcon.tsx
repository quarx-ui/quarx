import React, { forwardRef } from 'react';

export const ArrowBottomCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.6291 14.3215C10.6921 14.3845 10.7998 14.3399 10.7998 14.2508V5.40098C10.7998 5.18006 10.9789 5.00098 11.1998 5.00098H12.7998C13.0207 5.00098 13.1998 5.18006 13.1998 5.40098L13.1998 14.2513C13.1998 14.3404 13.3075 14.385 13.3705 14.322L15.3259 12.3666C15.4821 12.2104 15.7354 12.2104 15.8916 12.3666L17.023 13.498C17.1792 13.6542 17.1792 13.9075 17.023 14.0637L12.1415 18.9452C12.0634 19.0233 11.9368 19.0233 11.8587 18.9452L6.97718 14.0637C6.82097 13.9075 6.82097 13.6542 6.97718 13.498L8.10855 12.3666C8.26476 12.2104 8.51803 12.2104 8.67424 12.3666L10.6291 14.3215Z" fill="currentColor" />
    </svg>
));