import React, { forwardRef } from 'react';

export const UserBookIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.58579 3.58579C6 4.17157 6 5.11438 6 7V7.2C6 7.57712 6 7.76569 5.88284 7.88284C5.76569 8 5.57712 8 5.2 8H3.75C2.7835 8 2 8.7835 2 9.75C2 10.7165 2.7835 11.5 3.75 11.5H5.2C5.57712 11.5 5.76569 11.5 5.88284 11.6172C6 11.7343 6 11.9229 6 12.3V24.7C6 25.0771 6 25.2657 5.88284 25.3828C5.76569 25.5 5.57712 25.5 5.2 25.5H3.75C2.7835 25.5 2 26.2835 2 27.25C2 28.2165 2.7835 29 3.75 29H5.2C5.57558 29 5.76337 29 5.88032 29.116C5.99727 29.2319 5.99887 29.4214 6.00209 29.8002C6.01367 31.1653 6.08949 31.9179 6.58579 32.4142C7.17157 33 8.11438 33 10 33H24C27.7712 33 29.6569 33 30.8284 31.8284C32 30.6569 32 28.7712 32 25V11C32 7.22876 32 5.34315 30.8284 4.17157C29.6569 3 27.7712 3 24 3H10C8.11438 3 7.17157 3 6.58579 3.58579ZM16.0001 12.5C16.0001 10.8431 17.3432 9.5 19.0001 9.5C20.6569 9.5 22.0001 10.8431 22.0001 12.5C22.0001 14.1569 20.6569 15.5 19.0001 15.5C17.3432 15.5 16.0001 14.1569 16.0001 12.5ZM13.2341 19.253C13.488 18.2791 14.2944 17.5479 15.2882 17.3899C17.7471 16.999 20.2529 16.9989 22.7117 17.3898C23.706 17.5478 24.5123 18.2797 24.7656 19.254L25.5458 22.2548C25.7267 22.9507 25.4607 23.6861 24.8765 24.1052C21.3639 26.6248 16.6349 26.6246 13.1216 24.1059C12.5367 23.6866 12.2703 22.9501 12.4518 22.2536L13.2341 19.253Z" fill="currentColor" />
    </svg>
));
