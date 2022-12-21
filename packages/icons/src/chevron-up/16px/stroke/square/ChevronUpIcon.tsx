import { forwardRef } from 'react';

export const ChevronUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.62858 9.91247C4.74572 10.0297 4.93564 10.0297 5.0528 9.91251L7.78976 7.17383C7.90693 7.05659 8.09684 7.05661 8.21399 7.17387L10.9533 9.91595C11.0705 10.0332 11.2604 10.0332 11.3776 9.91595L12.014 9.27892C12.1311 9.16164 12.1311 8.9715 12.014 8.85422L8.28469 5.12118C8.1285 4.96483 7.87526 4.96481 7.71904 5.12114L3.99219 8.85071C3.87501 8.96798 3.875 9.15814 3.99217 9.27543L4.62858 9.91247Z" fill="currentColor" />
    </svg>
));
