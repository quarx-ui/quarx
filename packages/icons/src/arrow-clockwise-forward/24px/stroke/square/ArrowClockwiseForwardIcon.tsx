import { forwardRef } from 'react';

export const ArrowClockwiseForwardIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M12.002 5C8.13596 5 5.00195 8.13401 5.00195 12C5.00195 15.866 8.13596 19 12.002 19C15.0682 19 17.674 17.0285 18.6209 14.284C18.6786 14.1167 18.8334 14 19.0104 14H20.5285C20.6568 14 20.7519 14.1194 20.72 14.2437C19.7231 18.1287 16.1979 21 12.002 21C7.03139 21 3.00195 16.9706 3.00195 12C3.00195 7.02944 7.03139 3 12.002 3C14.7295 3 17.1736 4.21329 18.8241 6.12959C18.8856 6.20102 19.0052 6.1582 19.0052 6.06392V3.9C19.0052 3.67909 19.1843 3.5 19.4052 3.5H20.6052C20.8262 3.5 21.0052 3.67909 21.0052 3.9V9.54743C21.0052 9.79596 20.8038 9.99743 20.5552 9.99743L14.9078 9.99743C14.6869 9.99743 14.5078 9.81835 14.5078 9.59743V8.39743C14.5078 8.17652 14.6869 7.99743 14.9078 7.99743L17.5537 7.99743C17.6345 7.99743 17.6816 7.90669 17.6335 7.84169C16.3585 6.11778 14.3108 5 12.002 5Z" fill="currentColor" />
    </svg>
));
