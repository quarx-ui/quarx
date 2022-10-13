import React, { forwardRef } from 'react';

export const ChevronDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.96374 7.91391C6.11994 7.75787 6.37318 7.75786 6.52939 7.91388L11.9296 13.3075C11.9686 13.3465 12.032 13.3465 12.071 13.3075L17.4666 7.91677C17.6228 7.76071 17.876 7.7607 18.0323 7.91674L18.8808 8.76436C19.0371 8.9204 19.0371 9.17341 18.8809 9.32947L12.3539 15.8506C12.1587 16.0456 11.8421 16.0457 11.6468 15.8506L5.11523 9.32672C4.959 9.17067 4.95899 8.91765 5.1152 8.76159L5.96374 7.91391Z" fill="currentColor" />
    </svg>
));
