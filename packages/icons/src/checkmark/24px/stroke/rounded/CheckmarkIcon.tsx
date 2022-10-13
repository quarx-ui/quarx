import React, { forwardRef } from 'react';

export const CheckmarkIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 12.2901C6.68342 11.8995 7.31658 11.8995 7.70711 12.2901L9.43724 14.0201C9.70392 14.2868 9.83727 14.4201 10.003 14.4201C10.1686 14.4201 10.302 14.2868 10.5686 14.0201L17.2902 7.29775C17.6807 6.90721 18.3138 6.90717 18.7044 7.29768C19.0949 7.68818 19.095 8.32134 18.7045 8.71189L10.7101 16.7071C10.5226 16.8947 10.2683 17 10.003 17.0001C9.7378 17.0001 9.48344 16.8947 9.29589 16.7072L6.29289 13.7043C5.90237 13.3138 5.90237 12.6806 6.29289 12.2901Z" fill="currentColor" />
    </svg>
));
