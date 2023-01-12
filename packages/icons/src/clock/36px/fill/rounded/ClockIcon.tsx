import React, { forwardRef } from 'react';

export const ClockIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM19.5 11.5C19.5 10.6716 18.8284 10 18 10C17.1716 10 16.5 10.6716 16.5 11.5V18.0741C16.5 18.7394 16.5 19.0721 16.6324 19.3659C16.7647 19.6598 17.0139 19.8802 17.5122 20.321L23.5061 25.6235C24.1266 26.1724 25.0746 26.1144 25.6235 25.4939C26.1724 24.8734 26.1144 23.9254 25.4939 23.3765L20.1073 18.6114C19.8083 18.3468 19.6588 18.2146 19.5794 18.0383C19.5 17.862 19.5 17.6624 19.5 17.2632V11.5Z" fill="currentColor" />
    </svg>
));
