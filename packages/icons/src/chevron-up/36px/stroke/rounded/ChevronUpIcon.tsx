import { forwardRef } from 'react';

export const ChevronUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M28.7433 22.669C29.1127 22.2584 29.0795 21.6262 28.669 21.2567L18.669 12.2567C18.2887 11.9144 17.7113 11.9144 17.331 12.2567L7.33103 21.2567C6.92052 21.6262 6.88724 22.2584 7.2567 22.669C7.62616 23.0795 8.25845 23.1127 8.66896 22.7433L18 14.3454L27.331 22.7433C27.7415 23.1127 28.3738 23.0795 28.7433 22.669Z" fill="currentColor" />
    </svg>
));
