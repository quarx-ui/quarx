import React, { forwardRef } from 'react';

export const SquareCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.23431 8.23431C8 8.46863 8 8.84575 8 9.6V14.4C8 15.1542 8 15.5314 8.23431 15.7657C8.46863 16 8.84575 16 9.6 16H14.4C15.1542 16 15.5314 16 15.7657 15.7657C16 15.5314 16 15.1542 16 14.4V9.6C16 8.84575 16 8.46863 15.7657 8.23431C15.5314 8 15.1542 8 14.4 8H9.6C8.84575 8 8.46863 8 8.23431 8.23431Z" fill="currentColor" />
    </svg>
));
