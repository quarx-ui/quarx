import { forwardRef } from 'react';

export const MinusCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M4.49951 7.55C4.49951 7.38432 4.63383 7.25 4.79951 7.25L11.1995 7.25C11.3652 7.25 11.4995 7.38431 11.4995 7.55V8.45C11.4995 8.61568 11.3652 8.75 11.1995 8.75L4.79951 8.75C4.63383 8.75 4.49951 8.61569 4.49951 8.45V7.55Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M14.9995 8C14.9995 4.13401 11.8655 1 7.99951 1C4.13352 1 0.999512 4.13401 0.999512 8C0.999512 11.866 4.13352 15 7.99951 15C11.8655 15 14.9995 11.866 14.9995 8ZM13.4995 8C13.4995 4.96243 11.0371 2.5 7.99951 2.5C4.96195 2.5 2.49951 4.96243 2.49951 8C2.49951 11.0376 4.96195 13.5 7.99951 13.5C11.0371 13.5 13.4995 11.0376 13.4995 8Z" fill="currentColor" />
    </svg>
));
