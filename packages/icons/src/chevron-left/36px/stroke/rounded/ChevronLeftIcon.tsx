import React, { forwardRef } from 'react';

export const ChevronLeftIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.6689 7.25671C21.2584 6.88726 20.6261 6.92053 20.2566 7.33104L11.2566 17.331C10.9144 17.7113 10.9144 18.2887 11.2566 18.669L20.2566 28.669C20.6261 29.0795 21.2584 29.1128 21.6689 28.7433C22.0794 28.3738 22.1127 27.7416 21.7432 27.331L14.0678 18.8028C13.7243 18.4211 13.5525 18.2302 13.5525 18C13.5525 17.7698 13.7243 17.5789 14.0678 17.1972L21.7432 8.66897C22.1127 8.25846 22.0794 7.62617 21.6689 7.25671Z" fill="currentColor" />
    </svg>
));
