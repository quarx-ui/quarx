import React, { forwardRef } from 'react';

export const SixDotsIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8 6.5C8 5.675 8.675 5 9.5 5C10.325 5 11 5.675 11 6.5C11 7.325 10.325 8 9.5 8C8.675 8 8 7.325 8 6.5Z" fill="currentColor" />
        <path d="M14.5 16C13.675 16 13 16.675 13 17.5C13 18.325 13.675 19 14.5 19C15.325 19 16 18.325 16 17.5C16 16.675 15.325 16 14.5 16Z" fill="currentColor" />
        <path d="M13 12C13 11.175 13.675 10.5 14.5 10.5C15.325 10.5 16 11.175 16 12C16 12.825 15.325 13.5 14.5 13.5C13.675 13.5 13 12.825 13 12Z" fill="currentColor" />
        <path d="M13 6.5C13 5.675 13.675 5 14.5 5C15.325 5 16 5.675 16 6.5C16 7.325 15.325 8 14.5 8C13.675 8 13 7.325 13 6.5Z" fill="currentColor" />
        <path d="M9.5 10.5C8.675 10.5 8 11.175 8 12C8 12.825 8.675 13.5 9.5 13.5C10.325 13.5 11 12.825 11 12C11 11.175 10.325 10.5 9.5 10.5Z" fill="currentColor" />
        <path d="M8 17.5C8 16.675 8.675 16 9.5 16C10.325 16 11 16.675 11 17.5C11 18.325 10.325 19 9.5 19C8.675 19 8 18.325 8 17.5Z" fill="currentColor" />
    </svg>
));
