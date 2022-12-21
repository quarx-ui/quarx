import { forwardRef } from 'react';

export const MagnifyingGlassIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.9056 17.3159C14.551 18.3687 12.8487 18.9956 11 18.9956C6.58172 18.9956 3 15.4149 3 10.9978C3 6.58074 6.58172 3 11 3C15.4183 3 19 6.58074 19 10.9978C19 12.846 18.3729 14.5478 17.3199 15.9021L21.8847 20.4769C22.041 20.6335 22.0404 20.8872 21.8834 21.043L21.0365 21.8839C20.8802 22.0391 20.6276 22.0387 20.4718 21.8828L15.9056 17.3159ZM17 10.9978C17 14.3106 14.3137 16.9962 11 16.9962C7.68629 16.9962 5 14.3106 5 10.9978C5 7.685 7.68629 4.99945 11 4.99945C14.3137 4.99945 17 7.685 17 10.9978Z" fill="currentColor" />
    </svg>
));
