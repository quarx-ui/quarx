import React, { forwardRef } from 'react';

export const DotsVerticalIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.00015 5.2C8.8838 5.2 9.60015 4.48366 9.60015 3.6C9.60015 2.71634 8.8838 2 8.00015 2C7.11649 2 6.40015 2.71634 6.40015 3.6C6.40015 4.48366 7.11649 5.2 8.00015 5.2Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M8.00015 9.60039C8.8838 9.60039 9.60015 8.88405 9.60015 8.00039C9.60015 7.11673 8.8838 6.40039 8.00015 6.40039C7.11649 6.40039 6.40015 7.11673 6.40015 8.00039C6.40015 8.88405 7.11649 9.60039 8.00015 9.60039Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M8.00015 13.9998C8.8838 13.9998 9.60015 13.2835 9.60015 12.3998C9.60015 11.5161 8.8838 10.7998 8.00015 10.7998C7.11649 10.7998 6.40015 11.5161 6.40015 12.3998C6.40015 13.2835 7.11649 13.9998 8.00015 13.9998Z" fill="currentColor" />
    </svg>
));
