import { forwardRef } from 'react';

export const ChevronUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.29582 15.7069C5.68635 16.0974 6.31951 16.0974 6.71004 15.7069L11.436 10.9809C11.7027 10.7143 11.836 10.5809 12.0017 10.5809C12.1674 10.5809 12.3007 10.7143 12.5674 10.981L17.2928 15.7069C17.6833 16.0974 18.3164 16.0975 18.707 15.707C19.0975 15.3165 19.0976 14.6833 18.7071 14.2927L12.7089 8.29391C12.5214 8.10636 12.267 8.00098 12.0018 8.00098C11.7366 8.00097 11.4822 8.10633 11.2947 8.29387L5.29582 14.2927C4.9053 14.6832 4.9053 15.3164 5.29582 15.7069Z" fill="currentColor" />
    </svg>
));
