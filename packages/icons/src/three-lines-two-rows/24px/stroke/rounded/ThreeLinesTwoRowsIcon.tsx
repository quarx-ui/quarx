import { forwardRef } from 'react';

export const ThreeLinesTwoRowsIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M11 7.6C11 7.26863 10.7314 7 10.4 7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9L10.4 9C10.7314 9 11 8.73137 11 8.4V7.6Z" fill="currentColor" />
        <path d="M11 11.6C11 11.2686 10.7314 11 10.4 11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13L10.4 13C10.7314 13 11 12.7314 11 12.4V11.6Z" fill="currentColor" />
        <path d="M13.6 13C13.2686 13 13 12.7314 13 12.4V11.6C13 11.2686 13.2686 11 13.6 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L13.6 13Z" fill="currentColor" />
        <path d="M11 15.6C11 15.2686 10.7314 15 10.4 15H4C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17H10.4C10.7314 17 11 16.7314 11 16.4V15.6Z" fill="currentColor" />
        <path d="M13.6 17C13.2686 17 13 16.7314 13 16.4V15.6C13 15.2686 13.2686 15 13.6 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H13.6Z" fill="currentColor" />
        <path d="M13.6 9C13.2686 9 13 8.73137 13 8.4V7.6C13 7.26863 13.2686 7 13.6 7H20C20.5523 7 21 7.44772 21 8C21 8.55229 20.5523 9 20 9L13.6 9Z" fill="currentColor" />
    </svg>
));
