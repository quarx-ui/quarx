import React, { forwardRef } from 'react';

export const AttentionCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13.6001 16.3998C13.6001 17.2835 12.8838 17.9998 12.0001 17.9998C11.1165 17.9998 10.4001 17.2835 10.4001 16.3998C10.4001 15.5161 11.1165 14.7998 12.0001 14.7998C12.8838 14.7998 13.6001 15.5161 13.6001 16.3998ZM13.2001 7.2C13.2001 6.53726 12.6628 6 12.0001 6C11.3373 6 10.8001 6.53725 10.8001 7.2L10.8 11.9998C10.8 12.6625 11.3373 13.1998 12 13.1998C12.6628 13.1998 13.2 12.6626 13.2001 11.9998L13.2001 7.2Z" fill="currentColor" />
    </svg>
));
