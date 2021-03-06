import React, { forwardRef } from 'react';

export const LightningIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M6.70585 14.9999C5.46803 14.9999 4.64522 13.7192 5.15965 12.5934L9.46598 3.16881C9.79133 2.45676 10.5022 2 11.2851 2H13L12.4612 9.00001L17.2943 9.0001C18.5321 9.00013 19.3549 10.2807 18.8405 11.4066L14.5342 20.8312C14.2088 21.5432 13.4979 22 12.7151 22H11.0001L11.5389 15L6.70585 14.9999Z" fill="currentColor" />
    </svg>
));
