import React, { forwardRef } from 'react';

export const ChevronDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.97358 6.22162C4.26647 5.92873 4.74135 5.92873 5.03424 6.22163L7.64853 8.83595C7.8152 9.00262 7.89853 9.08595 8.00209 9.08595C8.10564 9.08595 8.18897 9.00262 8.35564 8.83595L10.97 6.22164C11.2628 5.92875 11.7377 5.92875 12.0306 6.22164C12.3235 6.51454 12.3235 6.98941 12.0306 7.2823L8.53241 10.7805C8.39176 10.9212 8.20099 11.0002 8.00208 11.0002C7.80317 11.0002 7.6124 10.9212 7.47175 10.7805L3.97357 7.28228C3.68068 6.98938 3.68068 6.51451 3.97358 6.22162Z" fill="currentColor" />
    </svg>
));
