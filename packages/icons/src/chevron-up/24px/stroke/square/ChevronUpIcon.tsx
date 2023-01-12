import React, { forwardRef } from 'react';

export const ChevronUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.96374 16.083C6.11994 16.239 6.37318 16.239 6.52939 16.083L11.9296 10.6894C11.9686 10.6504 12.032 10.6504 12.071 10.6894L17.4666 16.0801C17.6228 16.2362 17.876 16.2362 18.0323 16.0801L18.8808 15.2325C19.0371 15.0765 19.0371 14.8235 18.8809 14.6674L12.3539 8.14632C12.1587 7.95125 11.8421 7.95122 11.6468 8.14627L5.11523 14.6702C4.959 14.8262 4.95899 15.0792 5.1152 15.2353L5.96374 16.083Z" fill="currentColor" />
    </svg>
));
