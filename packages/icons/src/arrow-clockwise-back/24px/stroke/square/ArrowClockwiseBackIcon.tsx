import { forwardRef } from 'react';

export const ArrowClockwiseBackIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M12.0013 5C15.8673 5 19.0013 8.13401 19.0013 12C19.0013 15.866 15.8673 19 12.0013 19C8.9351 19 6.32933 17.0285 5.38243 14.284C5.32472 14.1167 5.16989 14 4.99292 14H3.47482C3.3465 14 3.25137 14.1194 3.28326 14.2437C4.28017 18.1287 7.80543 21 12.0013 21C16.9719 21 21.0013 16.9706 21.0013 12C21.0013 7.02944 16.9719 3 12.0013 3C9.27384 3 6.82971 4.21329 5.17924 6.12959C5.11771 6.20102 4.99805 6.1582 4.99805 6.06392V3.9C4.99805 3.67909 4.81896 3.5 4.59805 3.5H3.39805C3.17713 3.5 2.99805 3.67909 2.99805 3.9V9.54743C2.99805 9.79596 3.19952 9.99743 3.44805 9.99743L9.09548 9.99743C9.31639 9.99743 9.49548 9.81835 9.49548 9.59743V8.39743C9.49548 8.17652 9.31639 7.99743 9.09548 7.99743L6.4496 7.99743C6.36875 7.99743 6.32167 7.90669 6.36975 7.84169C7.64479 6.11778 9.69253 5 12.0013 5Z" fill="currentColor" />
    </svg>
));
