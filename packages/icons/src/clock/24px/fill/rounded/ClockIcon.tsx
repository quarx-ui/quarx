import React, { forwardRef } from 'react';

export const ClockIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.1998 7.9998C13.1998 7.33706 12.6625 6.7998 11.9998 6.7998C11.3371 6.7998 10.7998 7.33706 10.7998 7.9998V12.3639C10.7998 12.7964 10.9865 13.2079 11.312 13.4927L15.2096 16.9031C15.7084 17.3395 16.4665 17.289 16.9029 16.7902C17.3393 16.2914 17.2888 15.5333 16.79 15.0969L13.4389 12.1646C13.2869 12.0317 13.1998 11.8397 13.1998 11.6378V7.9998Z" fill="currentColor" />
    </svg>
));
