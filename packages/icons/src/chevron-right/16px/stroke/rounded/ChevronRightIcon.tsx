import React, { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.22162 3.96967C5.92873 4.26257 5.92873 4.73744 6.22163 5.03033L8.83595 7.64462C9.00262 7.81129 9.08595 7.89462 9.08595 7.99818C9.08595 8.10173 9.00262 8.18507 8.83595 8.35173L6.22164 10.966C5.92875 11.2589 5.92875 11.7338 6.22164 12.0267C6.51454 12.3196 6.98941 12.3196 7.2823 12.0267L10.7805 8.52851C10.9212 8.38785 11.0002 8.19709 11.0002 7.99817C11.0002 7.79926 10.9212 7.60849 10.7805 7.46784L7.28228 3.96967C6.98938 3.67678 6.51451 3.67678 6.22162 3.96967Z" fill="currentColor" />
    </svg>
));
