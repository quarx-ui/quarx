import React, { forwardRef } from 'react';

export const HourglassMoreIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4 2.5C4 3.60457 4.89543 4.5 6 4.5V6.5C6 8.07379 6.74097 9.55573 8 10.5L10 12L8 13.5C6.74097 14.4443 6 15.9262 6 17.5V19.5C4.89543 19.5 4 20.3954 4 21.5V22H20V21.5C20 20.3954 19.1046 19.5 18 19.5V17.5C18 15.9262 17.259 14.4443 16 13.5L14 12L16 10.5C17.259 9.55573 18 8.07379 18 6.5V4.5C19.1046 4.5 20 3.60457 20 2.5V2H4V2.5ZM8 6H16V6.5C16 7.44427 15.5554 8.33344 14.8 8.9L12 11L9.2 8.9C8.44458 8.33344 8 7.44427 8 6.5V6ZM12 16L14.4 17.8C15.1343 18.3508 15.6484 19.1302 15.873 20H8.12695C8.35158 19.1302 8.86563 18.3508 9.59998 17.8L12 16Z" fill="currentColor" />
    </svg>
));
