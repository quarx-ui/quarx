import { forwardRef } from 'react';

export const MinusCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.7 10.7992C7.03726 10.7992 6.5 11.3365 6.5 11.9992C6.5 12.662 7.03726 13.1992 7.7 13.1992H16.2998C16.9625 13.1992 17.4998 12.662 17.4998 11.9992C17.4998 11.3365 16.9625 10.7992 16.2998 10.7992H7.7Z" fill="currentColor" />
    </svg>
));
