import React, { forwardRef } from 'react';

export const ThreeLinesIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M3.75 4C2.7835 4 2 4.7835 2 5.75C2 6.7165 2.7835 7.5 3.75 7.5H20.25C21.2165 7.5 22 6.7165 22 5.75C22 4.7835 21.2165 4 20.25 4H3.75Z" fill="currentColor" />
        <path d="M2 12C2 11.0335 2.7835 10.25 3.75 10.25H20.25C21.2165 10.25 22 11.0335 22 12C22 12.9665 21.2165 13.75 20.25 13.75H3.75C2.7835 13.75 2 12.9665 2 12Z" fill="currentColor" />
        <path d="M2 18.25C2 17.2835 2.7835 16.5 3.75 16.5H20.25C21.2165 16.5 22 17.2835 22 18.25C22 19.2165 21.2165 20 20.25 20H3.75C2.7835 20 2 19.2165 2 18.25Z" fill="currentColor" />
    </svg>
));
