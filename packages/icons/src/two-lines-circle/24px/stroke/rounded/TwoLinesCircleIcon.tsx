import { forwardRef } from 'react';

export const TwoLinesCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M10 16C9.44772 16 9 15.5523 9 15L9 9C9 8.44771 9.44772 8 10 8C10.5523 8 11 8.44771 11 9V15C11 15.5523 10.5523 16 10 16Z" fill="currentColor" />
        <path d="M13 15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15V9C15 8.44771 14.5523 8 14 8C13.4477 8 13 8.44771 13 9V15Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" fill="currentColor" />
    </svg>
));
