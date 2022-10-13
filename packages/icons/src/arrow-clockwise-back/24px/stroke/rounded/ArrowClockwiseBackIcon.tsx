import React, { forwardRef } from 'react';

export const ArrowClockwiseBackIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M19.0027 12C19.0027 8.13401 15.8687 5 12.0027 5C9.66051 5 7.58552 6.15049 6.31435 7.91916C6.29076 7.95199 6.31437 7.99743 6.3548 7.99743L8.49744 7.99743C9.04972 7.99743 9.49744 8.44515 9.49744 8.99743C9.49744 9.54972 9.04972 9.99743 8.49744 9.99743L3.50001 9.99743C3.22386 9.99743 3.00001 9.77357 3.00001 9.49743V4.5C3.00001 3.94772 3.44772 3.5 4.00001 3.5C4.55229 3.5 5.00001 3.94772 5.00001 4.5V6.2049C5.00001 6.25204 5.05956 6.27321 5.08976 6.23702C6.74011 4.25939 9.22368 3 12.0027 3C16.9732 3 21.0027 7.02944 21.0027 12C21.0027 16.9706 16.9732 21 12.0027 21C8.22472 21 4.99277 18.6725 3.65796 15.3769C3.45063 14.8651 3.69753 14.282 4.20942 14.0747C4.72131 13.8673 5.30435 14.1142 5.51168 14.6261C6.55119 17.1926 9.06707 19 12.0027 19C15.8687 19 19.0027 15.866 19.0027 12Z" fill="currentColor" />
    </svg>
));