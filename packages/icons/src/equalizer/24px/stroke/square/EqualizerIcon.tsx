import { forwardRef } from 'react';

export const EqualizerIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M17 10.6C17 10.8209 16.8209 11 16.6 11H15.4C15.1791 11 15 10.8209 15 10.6V3.4C15 3.17909 15.1791 3 15.4 3H16.6C16.8209 3 17 3.17909 17 3.4V5.9C17 5.95523 17.0448 6 17.1 6H21.6C21.8209 6 22 6.17909 22 6.4V7.6C22 7.82091 21.8209 8 21.6 8H17.1C17.0448 8 17 8.04477 17 8.1V10.6Z" fill="currentColor" />
        <path d="M13 6.2C13 6.08954 12.9105 6 12.8 6H2.4C2.17909 6 2 6.17909 2 6.4V7.6C2 7.82091 2.17909 8 2.4 8H12.8C12.9105 8 13 7.91046 13 7.8V6.2Z" fill="currentColor" />
        <path d="M8.6 21C8.82091 21 9 20.8209 9 20.6V13.4C9 13.1791 8.82091 13 8.6 13H7.4C7.17909 13 7 13.1791 7 13.4V15.9C7 15.9552 6.95523 16 6.9 16H2.4C2.17909 16 2 16.1791 2 16.4V17.6C2 17.8209 2.17909 18 2.4 18H6.9C6.95523 18 7 18.0448 7 18.1V20.6C7 20.8209 7.17909 21 7.4 21H8.6Z" fill="currentColor" />
        <path d="M11 16.2C11 16.0895 11.0895 16 11.2 16H21.6C21.8209 16 22 16.1791 22 16.4V17.6C22 17.8209 21.8209 18 21.6 18H11.2C11.0895 18 11 17.9105 11 17.8V16.2Z" fill="currentColor" />
    </svg>
));
