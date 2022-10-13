import React, { forwardRef } from 'react';

export const CheckmarkCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.6453 10.8484C17.1139 10.3798 17.114 9.61997 16.6454 9.15132C16.1768 8.68267 15.417 8.68263 14.9483 9.15123L11.287 12.8122C11.1308 12.9684 10.8776 12.9684 10.7213 12.8122L9.84831 11.9392C9.37967 11.4706 8.61987 11.4706 8.15126 11.9392C7.68264 12.4079 7.68266 13.1677 8.1513 13.6363L10.1556 15.6405C10.6243 16.1091 11.384 16.1091 11.8526 15.6405L16.6453 10.8484Z" fill="currentColor" />
    </svg>
));
