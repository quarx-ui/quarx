import { forwardRef } from 'react';

export const InfoIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M13.3999 7.60001C13.3999 6.82681 12.7731 6.20001 11.9999 6.20001C11.2267 6.20001 10.5999 6.82681 10.5999 7.60001C10.5999 8.37321 11.2267 9.00001 11.9999 9.00001C12.7731 9.00001 13.3999 8.37321 13.3999 7.60001Z" fill="currentColor" />
        <path d="M13 11.5C13 10.9477 12.5523 10.5 12 10.5C11.4477 10.5 11 10.9477 11 11.5V18H13V11.5Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" />
    </svg>
));
