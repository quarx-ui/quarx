import React, { forwardRef } from 'react';

export const HomeIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M13.2799 2.49553C12.5529 1.83914 11.4471 1.83914 10.7201 2.49553L4.98964 7.66905C4.35959 8.23787 4 9.04698 4 9.89581V19C4 20.1046 4.89543 21 6 21H9.5V16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5V21H18C19.1046 21 20 20.1046 20 19V9.89581C20 9.04698 19.6404 8.23787 19.0104 7.66905L13.2799 2.49553Z" fill="currentColor" />
    </svg>
));
