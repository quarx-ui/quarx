import React, { forwardRef } from 'react';

export const ChevronDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.29582 8.29485C5.68635 7.90432 6.31951 7.90432 6.71004 8.29485L11.436 13.0208C11.7027 13.2875 11.836 13.4208 12.0017 13.4208C12.1674 13.4208 12.3007 13.2875 12.5674 13.0208L17.2928 8.29489C17.6833 7.90434 18.3164 7.9043 18.707 8.29481C19.0975 8.68531 19.0976 9.31847 18.7071 9.70902L12.7089 15.7079C12.5214 15.8954 12.267 16.0008 12.0018 16.0008C11.7366 16.0008 11.4822 15.8954 11.2947 15.7079L5.29582 9.70906C4.9053 9.31854 4.9053 8.68537 5.29582 8.29485Z" fill="currentColor" />
    </svg>
));
