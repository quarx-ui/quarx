import { forwardRef } from 'react';

export const FourLinesIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19L19 19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17L5 17Z" fill="currentColor" />
        <path d="M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15L19 15C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13L5 13Z" fill="currentColor" />
        <path d="M5 9C4.44772 9 4 9.44771 4 10C4 10.5523 4.44772 11 5 11L19 11C19.5523 11 20 10.5523 20 10C20 9.44772 19.5523 9 19 9L5 9Z" fill="currentColor" />
        <path d="M4 6C4 5.44771 4.44772 5 5 5L19 5C19.5523 5 20 5.44772 20 6C20 6.55229 19.5523 7 19 7L5 7C4.44772 7 4 6.55229 4 6Z" fill="currentColor" />
    </svg>
));
