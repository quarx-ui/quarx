import { forwardRef } from 'react';

export const SquareCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.4 8C8.17909 8 8 8.17909 8 8.4V15.6C8 15.8209 8.17909 16 8.4 16H15.6C15.8209 16 16 15.8209 16 15.6V8.4C16 8.17909 15.8209 8 15.6 8H8.4Z" fill="currentColor" />
    </svg>
));
