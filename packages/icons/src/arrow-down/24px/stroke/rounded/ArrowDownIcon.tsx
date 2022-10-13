import React, { forwardRef } from 'react';

export const ArrowDownIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M13 18.5871L16.2932 15.2964C16.6838 14.906 17.317 14.9063 17.7074 15.2969C18.0977 15.6876 18.0975 16.3208 17.7068 16.7112L12.7068 21.7074C12.3164 22.0976 11.6836 22.0976 11.2932 21.7074L6.29316 16.7112C5.90249 16.3208 5.90225 15.6876 6.29263 15.2969C6.68301 14.9063 7.31617 14.906 7.70684 15.2964L11 18.5871L11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 18.5871Z" fill="currentColor" />
    </svg>
));
