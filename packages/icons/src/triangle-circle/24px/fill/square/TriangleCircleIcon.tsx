import React, { forwardRef } from 'react';

export const TriangleCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.3374 12.43C17.664 12.2364 17.664 11.7636 17.3374 11.5699L9.75506 7.07283C9.42177 6.87515 9 7.11537 9 7.50288L9 16.4971C9 16.8846 9.42176 17.1248 9.75506 16.9272L17.3374 12.43Z" fill="currentColor" />
    </svg>
));
