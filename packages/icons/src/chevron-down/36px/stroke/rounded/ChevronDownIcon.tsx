import React, { forwardRef } from 'react';

export const ChevronDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M28.7433 13.331C29.1127 13.7416 29.0795 14.3738 28.669 14.7433L18.669 23.7433C18.2887 24.0856 17.7113 24.0856 17.331 23.7433L7.33103 14.7433C6.92052 14.3738 6.88724 13.7416 7.2567 13.331C7.62616 12.9205 8.25845 12.8873 8.66896 13.2567L17.1972 20.9322C17.5789 21.2757 17.7698 21.4474 18 21.4474C18.2302 21.4474 18.4211 21.2757 18.8028 20.9322L27.331 13.2567C27.7415 12.8873 28.3738 12.9205 28.7433 13.331Z" fill="currentColor" />
    </svg>
));
