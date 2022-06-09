import React, { forwardRef } from 'react';

export const HourglassLessIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M6 4.5C4.89543 4.5 4 3.60457 4 2.5V2H20V2.5C20 3.60457 19.1046 4.5 18 4.5V6.5C18 8.07379 17.259 9.55573 16 10.5L14 12L16 13.5C17.259 14.4443 18 15.9262 18 17.5V19.5C19.1046 19.5 20 20.3954 20 21.5V22H4V21.5C4 20.3954 4.89543 19.5 6 19.5V17.5C6 15.9262 6.74097 14.4443 8 13.5L10 12L8 10.5C6.74097 9.55573 6 8.07379 6 6.5V4.5ZM9.33325 9L11.9999 11L14.6666 9H9.33325ZM16 19.5V18C16 17.0557 15.5554 16.1666 14.8 15.6L12 13.5L9.2 15.6C8.44458 16.1666 8 17.0557 8 18V19.5H16Z" fill="currentColor" />
    </svg>
));
