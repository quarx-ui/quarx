import React, { forwardRef } from 'react';

export const FilterIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M13.0274 2.22839C12.1732 2.16659 9.73649 2.00198 7.99921 2.00392C6.26334 2.00587 3.83178 2.16786 2.97777 2.22868C2.3689 2.27204 1.93225 2.8212 2.01431 3.41782L2.04222 3.62079C2.2246 4.9469 2.79716 6.18884 3.6871 7.18876L3.95776 7.49286L5.82693 9.46844C5.906 9.552 5.95005 9.66267 5.95005 9.77771V14.1509C5.95005 14.7982 6.64481 15.2079 7.21133 14.8947L9.61133 13.5678C9.88203 13.4181 10.0501 13.1332 10.0501 12.8239V9.77992C10.0501 9.66438 10.0945 9.55328 10.1742 9.46961L12.0425 7.50737L12.3265 7.18677C13.2104 6.18864 13.779 4.95108 13.9604 3.6302L13.9897 3.41723C14.0716 2.82107 13.6356 2.27238 13.0274 2.22839Z" fill="currentColor" />
    </svg>
));
