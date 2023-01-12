import React, { forwardRef } from 'react';

export const ClockIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8.6 4.8C8.6 4.35817 8.24183 4 7.8 4C7.35817 4 7 4.35817 7 4.8V7.50314C7 7.91189 7 8.11627 7.07612 8.30004C7.15224 8.48381 7.29676 8.62832 7.58579 8.91735L10.0606 11.3922C10.3731 11.7046 10.8796 11.7046 11.192 11.3922C11.5044 11.0798 11.5044 10.5733 11.192 10.2608L8.95147 8.0203C8.77805 7.84688 8.69134 7.76017 8.64567 7.64991C8.6 7.53964 8.6 7.41702 8.6 7.17177V4.8Z" fill="currentColor" />
    </svg>
));
