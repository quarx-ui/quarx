import { forwardRef } from 'react';

export const ThreeLinesIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M20.002 15.4C20.002 15.1791 19.8229 15 19.602 15L4.40195 15C4.18104 15 4.00195 15.1791 4.00195 15.4L4.00195 16.6C4.00195 16.8209 4.18104 17 4.40195 17L19.602 17C19.8229 17 20.002 16.8209 20.002 16.6V15.4Z" fill="currentColor" />
        <path d="M4.00195 11.4C4.00195 11.1791 4.18104 11 4.40195 11L19.602 11C19.8229 11 20.002 11.1791 20.002 11.4V12.6C20.002 12.8209 19.8229 13 19.602 13L4.40195 13C4.18104 13 4.00195 12.8209 4.00195 12.6L4.00195 11.4Z" fill="currentColor" />
        <path d="M4.00195 7.4C4.00195 7.17909 4.18104 7 4.40195 7L19.602 7C19.8229 7 20.002 7.17909 20.002 7.4V8.6C20.002 8.82091 19.8229 9 19.602 9L4.40195 9C4.18104 9 4.00195 8.82091 4.00195 8.6L4.00195 7.4Z" fill="currentColor" />
    </svg>
));
