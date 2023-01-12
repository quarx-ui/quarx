import React, { forwardRef } from 'react';

export const TriangleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.994 11.9064C18.946 11.3955 18.3512 11.0471 17.1616 10.3504L7.87626 4.91181C6.6652 4.20247 6.05967 3.8478 5.58813 4.062C5.53071 4.08809 5.47589 4.11954 5.42439 4.15596C5.00146 4.45502 5.00146 5.15715 5.00146 6.56142V17.4386C5.00146 18.8428 5.00146 19.545 5.42439 19.844C5.47588 19.8805 5.53071 19.9119 5.58813 19.938C6.05967 20.1522 6.6652 19.7975 7.87626 19.0882L17.1616 13.6496C18.3512 12.9529 18.946 12.6045 18.994 12.0936C18.9998 12.0314 18.9998 11.9686 18.994 11.9064Z" fill="currentColor" />
    </svg>
));
