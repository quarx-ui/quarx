import React, { forwardRef } from 'react';

export const ChevronLeftIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.78051 3.9687C10.0734 4.26159 10.0734 4.73647 9.7805 5.02936L7.16617 7.64365C6.99951 7.81032 6.91617 7.89365 6.91617 7.9972C6.91617 8.10076 6.9995 8.18409 7.16617 8.35076L9.78048 10.9651C10.0734 11.258 10.0734 11.7328 9.78048 12.0257C9.48759 12.3186 9.01271 12.3186 8.71982 12.0257L5.22162 8.52753C5.08097 8.38688 5.00195 8.19611 5.00195 7.9972C5.00195 7.79828 5.08097 7.60752 5.22163 7.46686L8.71985 3.96869C9.01274 3.6758 9.48761 3.6758 9.78051 3.9687Z" fill="currentColor" />
    </svg>
));
