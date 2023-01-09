import { forwardRef } from 'react';

export const TwoLinesIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8 19C8 19.5523 8.44772 20 9 20C9.55228 20 10 19.5523 10 19L10 5C10 4.44772 9.55228 4 9 4C8.44771 4 8 4.44772 8 5V19Z" fill="currentColor" />
        <path d="M14 19C14 19.5523 14.4477 20 15 20C15.5523 20 16 19.5523 16 19L16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5L14 19Z" fill="currentColor" />
    </svg>
));
