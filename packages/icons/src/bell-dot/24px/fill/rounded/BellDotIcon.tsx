import React, { forwardRef } from 'react';

export const BellDotIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M16.5619 3.32083C16.672 3.12237 16.6206 2.8657 16.4209 2.75801C16.0017 2.53204 15.5514 2.3506 15.0747 2.22115C11.8837 1.35449 8.56861 3.10479 7.44033 6.25196L6.38169 9.2049C5.87318 10.6233 4.92019 11.8338 3.66854 12.6512L3.5804 12.7088C2.65769 13.3113 2.87793 14.7374 3.93817 15.0254L18.4039 18.9541C19.4643 19.2421 20.3586 18.1183 19.8564 17.1289L19.8088 17.0351C19.1273 15.6925 18.8988 14.1605 19.1583 12.6737L19.5717 10.3045C19.6092 10.0898 19.467 9.88634 19.2575 9.82626C17.3765 9.28703 16 7.55427 16 5.5C16 4.70943 16.2039 3.96647 16.5619 3.32083Z" fill="currentColor" />
        <path d="M15.5376 20.6014C15.6376 20.4432 15.5447 20.2418 15.364 20.193L10.3578 18.8409C10.177 18.792 9.99514 18.9194 10.0009 19.1066C10.0525 20.7762 11.4523 22.0004 13 22.0004C14.0682 22.0004 15.006 21.4421 15.5376 20.6014Z" fill="currentColor" />
        <path d="M23 5.5C23 6.88071 21.8807 8 20.5 8C19.1193 8 18 6.88071 18 5.5C18 4.11929 19.1193 3 20.5 3C21.8807 3 23 4.11929 23 5.5Z" fill="currentColor" />
    </svg>
));
