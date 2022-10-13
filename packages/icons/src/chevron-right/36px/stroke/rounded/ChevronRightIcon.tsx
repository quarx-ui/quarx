import React, { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.331 28.7433C14.7416 29.1128 15.3738 29.0795 15.7433 28.669L24.7433 18.669C25.0856 18.2887 25.0856 17.7113 24.7433 17.331L15.7433 7.33104C15.3738 6.92053 14.7416 6.88726 14.331 7.25671C13.9205 7.62617 13.8873 8.25846 14.2567 8.66897L21.9322 17.1973C22.2757 17.5789 22.4474 17.7698 22.4474 18C22.4474 18.2303 22.2757 18.4211 21.9322 18.8028L14.2567 27.331C13.8873 27.7416 13.9205 28.3738 14.331 28.7433Z" fill="currentColor" />
    </svg>
));
