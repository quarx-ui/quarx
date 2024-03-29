import React, { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M10 13.6029C9.99998 14.8092 9.99997 15.4123 10.2859 15.7037C10.4424 15.8633 10.648 15.9658 10.8697 15.9949C11.2746 16.048 11.757 15.6855 12.7218 14.9605L14.855 13.3574C15.5298 12.8503 15.8673 12.5967 15.9594 12.2739C16.0105 12.0948 16.0105 11.905 15.9594 11.7259C15.8673 11.4031 15.5298 11.1495 14.855 10.6424L12.7219 9.03943C11.7571 8.31445 11.2748 7.95196 10.8698 8.00511C10.6481 8.03422 10.4426 8.13674 10.286 8.2963C10.0001 8.5877 10.0001 9.19078 10.0001 10.3969L10 13.6029Z" fill="currentColor" />
    </svg>
));
