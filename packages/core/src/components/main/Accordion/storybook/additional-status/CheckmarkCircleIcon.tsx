import React, { forwardRef } from 'react';

export const CheckmarkCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M16.7125 10.5069C17.103 10.1164 17.1031 9.48326 16.7125 9.09272C16.322 8.70218 15.6889 8.70216 15.2983 9.09268L11.6166 12.7742C11.4604 12.9304 11.2071 12.9304 11.0509 12.7742L10.0982 11.8216C9.70764 11.4311 9.07448 11.4311 8.68397 11.8217C8.29347 12.2122 8.2935 12.8454 8.68404 13.2359L10.4145 14.9662C10.9222 15.4739 11.7453 15.4738 12.2529 14.9662L16.7125 10.5069Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="currentColor" />
    </svg>
));
