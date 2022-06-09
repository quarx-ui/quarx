import React, { forwardRef } from 'react';

export const RubleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M15 14H10V16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H10L10 20C10 20.5523 9.55229 21 9 21C8.44772 21 8 20.5523 8 20V18H6C5.44772 18 5 17.5523 5 17C5 16.4477 5.44772 16 6 16H8L8 14H6C5.44772 14 5 13.5523 5 13C5 12.4477 5.44772 12 6 12H8L8 4L15 4C17.7614 4 20 6.23858 20 9.00001C20 11.7614 17.7614 14 15 14ZM10 12L10 6L15 6C16.6569 6 18 7.34315 18 9.00001C18 10.6569 16.6569 12 15 12H10Z" fill="currentColor" />
    </svg>
));
