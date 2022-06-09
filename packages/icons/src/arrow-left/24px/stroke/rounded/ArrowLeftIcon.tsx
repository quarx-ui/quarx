import React, { forwardRef } from 'react';

export const ArrowLeftIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M9.11362 7.71059C9.504 7.31992 9.50376 6.68676 9.11309 6.29638C8.72242 5.906 8.08926 5.90624 7.69888 6.29691L1.99632 12.0038L7.69888 17.7106C8.08926 18.1013 8.72242 18.1015 9.11309 17.7111C9.50376 17.3207 9.504 16.6876 9.11362 16.2969L5.81919 13L21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11L5.82669 11L9.11362 7.71059Z" fill="currentColor" />
    </svg>
));
