import React, { forwardRef } from 'react';

export const StarIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M11.3056 2.41471C11.6006 1.86176 12.3994 1.86176 12.6944 2.41471L15.4851 7.64451L21.3502 8.6711C21.9695 8.7795 22.2157 9.52961 21.7795 9.97882L17.6389 14.2426L18.4703 20.111C18.558 20.7298 17.9123 21.194 17.3466 20.919L12 18.3204L6.65344 20.919C6.08765 21.194 5.44203 20.7298 5.52969 20.111L6.36107 14.2426L2.22051 9.97882C1.78428 9.52961 2.03055 8.7795 2.64984 8.6711L8.51495 7.64451L11.3056 2.41471Z" fill="currentColor" />
    </svg>
));
