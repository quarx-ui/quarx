import React, { forwardRef } from 'react';

export const ClockIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.1998 7.4C13.1998 7.17909 13.0207 7 12.7998 7H11.1998C10.9789 7 10.7998 7.17909 10.7998 7.4V12.8176C10.7998 12.9618 10.862 13.099 10.9706 13.1939L15.8117 17.4299C15.9779 17.5754 16.2306 17.5585 16.3761 17.3923L17.4297 16.1881C17.5752 16.0219 17.5583 15.7692 17.3921 15.6237L13.3706 12.1049C13.262 12.0099 13.1998 11.8728 13.1998 11.7286V7.4Z" fill="currentColor" />
    </svg>
));
