import React, { forwardRef } from 'react';

export const ChevronUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.97358 9.78051C4.26647 10.0734 4.74135 10.0734 5.03424 9.7805L7.64853 7.16617C7.8152 6.99951 7.89853 6.91617 8.00209 6.91617C8.10564 6.91617 8.18897 6.9995 8.35564 7.16617L10.97 9.78048C11.2628 10.0734 11.7377 10.0734 12.0306 9.78048C12.3235 9.48759 12.3235 9.01271 12.0306 8.71982L8.53241 5.22162C8.39176 5.08097 8.20099 5.00195 8.00208 5.00195C7.80317 5.00195 7.6124 5.08097 7.47175 5.22163L3.97357 8.71985C3.68068 9.01274 3.68068 9.48761 3.97358 9.78051Z" fill="currentColor" />
    </svg>
));
