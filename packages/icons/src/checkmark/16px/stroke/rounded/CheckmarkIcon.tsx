import { forwardRef } from 'react';

export const CheckmarkIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.781 5.22012C13.0736 5.51327 13.0732 5.98814 12.7801 6.28078L7.52972 11.5222C7.23676 11.8146 6.76223 11.8144 6.46952 11.5217L4.21528 9.26746C3.92238 8.97457 3.92238 8.4997 4.21528 8.2068C4.50817 7.91391 4.98304 7.91391 5.27594 8.2068L6.82367 9.75454C6.92125 9.85211 7.07942 9.85218 7.17708 9.75469L11.7203 5.21922C12.0134 4.92657 12.4883 4.92698 12.781 5.22012Z" fill="currentColor" />
    </svg>
));
