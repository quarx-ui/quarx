import React, { forwardRef } from 'react';

export const CheckmarkIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.781 5.17014C13.0736 5.46328 13.0732 5.93815 12.7801 6.2308L6.99939 12.0016L4.21528 9.21748C3.92238 8.92458 3.92238 8.44971 4.21528 8.15682C4.50817 7.86392 4.98304 7.86392 5.27594 8.15682L7.0003 9.88118L11.7203 5.16923C12.0134 4.87659 12.4883 4.87699 12.781 5.17014Z" fill="currentColor" />
    </svg>
));
