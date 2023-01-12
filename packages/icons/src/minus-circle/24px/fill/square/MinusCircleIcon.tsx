import React, { forwardRef } from 'react';

export const MinusCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.49902 11.2008C6.49902 10.9799 6.67811 10.8008 6.89902 10.8008H17.099C17.3199 10.8008 17.499 10.9799 17.499 11.2008V12.8008C17.499 13.0217 17.3199 13.2008 17.099 13.2008H6.89902C6.67811 13.2008 6.49902 13.0217 6.49902 12.8008V11.2008Z" fill="currentColor" />
    </svg>
));
