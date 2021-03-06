import React, { forwardRef } from 'react';

export const InfoIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM13.4 7.40003C13.4 6.62683 12.7732 6.00003 12 6.00003C11.2268 6.00003 10.6 6.62683 10.6 7.40003C10.6 8.17323 11.2268 8.80003 12 8.80003C12.7732 8.80003 13.4 8.17323 13.4 7.40003ZM10.9999 18L10.9999 11.5C10.9999 10.9478 11.4476 10.5 11.9999 10.5C12.5522 10.5 12.9999 10.9478 12.9999 11.5L12.9999 18L10.9999 18Z" fill="currentColor" />
    </svg>
));
