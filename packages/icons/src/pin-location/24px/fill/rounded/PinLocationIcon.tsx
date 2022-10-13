import React, { forwardRef } from 'react';

export const PinLocationIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M19.0466 15.2549C19.9642 13.8978 20.5 12.2615 20.5 10.5C20.5 5.80558 16.6944 2 12 2C7.30558 2 3.5 5.80558 3.5 10.5C3.5 12.2583 4.03388 13.8919 4.94837 15.2475C5.72513 16.502 6.70297 17.5294 7.67241 18.5481C8.71572 19.6443 9.74929 20.7303 10.512 22.078C10.8197 22.6218 11.3749 23.0003 11.9998 23.0003C12.6247 23.0003 13.1799 22.6218 13.4877 22.078C14.2503 20.7307 15.2838 19.6447 16.327 18.5486C17.2949 17.5317 18.271 16.506 19.0466 15.2549ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="currentColor" />
    </svg>
));