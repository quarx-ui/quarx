import { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.09143 4.62565C5.97418 4.74279 5.97416 4.93271 6.0914 5.04987L8.83008 7.78683C8.94731 7.904 8.9473 8.09391 8.83004 8.21106L6.08796 10.9504C5.97068 11.0675 5.97068 11.2575 6.08796 11.3746L6.72499 12.011C6.84227 12.1282 7.03241 12.1282 7.14968 12.011L10.8827 8.28176C11.0391 8.12557 11.0391 7.87233 10.8828 7.71611L7.1532 3.98926C7.03593 3.87208 6.84576 3.87207 6.72848 3.98924L6.09143 4.62565Z" fill="currentColor" />
    </svg>
));
