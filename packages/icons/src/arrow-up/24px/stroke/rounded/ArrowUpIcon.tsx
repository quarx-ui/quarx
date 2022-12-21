import { forwardRef } from 'react';

export const ArrowUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M16.2932 8.70362C16.6838 9.094 17.317 9.09376 17.7074 8.70309C18.0977 8.31242 18.0975 7.67925 17.7068 7.28887L12.7068 2.29263C12.3164 1.90246 11.6836 1.90246 11.2932 2.29263L6.29316 7.28887C5.90249 7.67925 5.90225 8.31242 6.29263 8.70309C6.68301 9.09376 7.31617 9.094 7.70684 8.70362L11 5.41293V21.0001C11 21.5524 11.4477 22.0001 12 22.0001C12.5523 22.0001 13 21.5524 13 21.0001V5.41293L16.2932 8.70362Z" fill="currentColor" />
    </svg>
));
