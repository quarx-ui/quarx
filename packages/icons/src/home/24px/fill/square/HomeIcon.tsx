import React, { forwardRef } from 'react';

export const HomeIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M12.6522 2.24C12.2772 1.9174 11.7228 1.9174 11.3478 2.24L4.3478 8.26258C4.127 8.45256 4 8.72936 4 9.02063V20.3993C4 20.7307 4.26863 20.9993 4.6 20.9993H9C9.27614 20.9993 9.5 20.7754 9.5 20.4993V14.6992C9.5 14.3126 9.8134 13.9992 10.2 13.9992H13.8C14.1866 13.9992 14.5 14.3126 14.5 14.6992V20.4993C14.5 20.7754 14.7239 20.9993 15 20.9993H19.4C19.7314 20.9993 20 20.7307 20 20.3993V9.02063C20 8.72936 19.873 8.45256 19.6522 8.26259L12.6522 2.24Z" fill="currentColor" />
    </svg>
));
