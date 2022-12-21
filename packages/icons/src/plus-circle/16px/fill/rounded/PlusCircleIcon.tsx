import { forwardRef } from 'react';

export const PlusCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.99951 1C11.8655 1 14.9995 4.13401 14.9995 8C14.9995 11.866 11.8655 15 7.99951 15C4.13352 15 0.999512 11.866 0.999512 8C0.999512 4.13401 4.13352 1 7.99951 1ZM7.99951 4.5C8.41373 4.5 8.74951 4.83579 8.74951 5.25V6.85C8.74951 7.03856 8.74951 7.13284 8.80809 7.19142C8.86667 7.25 8.96095 7.25 9.14951 7.25H10.7495C11.1637 7.25 11.4995 7.58579 11.4995 8C11.4995 8.41421 11.1637 8.75 10.7495 8.75L9.14951 8.75C8.96095 8.75 8.86667 8.75 8.80809 8.80858C8.74951 8.86716 8.74951 8.96144 8.74951 9.15V10.75C8.74951 11.1642 8.41373 11.5 7.99951 11.5C7.5853 11.5 7.24951 11.1642 7.24951 10.75V9.15C7.24951 8.96144 7.24951 8.86716 7.19093 8.80858C7.13235 8.75 7.03807 8.75 6.84951 8.75H5.24951C4.8353 8.75 4.49951 8.41421 4.49951 8C4.49951 7.58579 4.8353 7.25 5.24951 7.25H6.84951C7.03807 7.25 7.13235 7.25 7.19093 7.19142C7.24951 7.13284 7.24951 7.03856 7.24951 6.85V5.25C7.24951 4.83579 7.5853 4.5 7.99951 4.5Z" fill="currentColor" />
    </svg>
));
