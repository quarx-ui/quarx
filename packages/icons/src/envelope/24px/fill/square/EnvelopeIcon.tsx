import { forwardRef } from 'react';

export const EnvelopeIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M22 4.5C22 4.22386 21.7761 4 21.5 4H2.5C2.22386 4 2 4.22386 2 4.5V7.04099C2 7.22494 2.10099 7.39402 2.26295 7.48123L11.7629 12.5966C11.9109 12.6763 12.089 12.6763 12.237 12.5966L21.737 7.48121C21.899 7.394 22 7.22491 22 7.04097V4.5Z" fill="currentColor" />
        <path d="M22 10.4482C22 10.0699 21.5961 9.82863 21.2629 10.008L12.237 14.8681C12.089 14.9478 11.9109 14.9478 11.7629 14.8681L2.73705 10.008C2.40393 9.82866 2 10.0699 2 10.4483V19.5C2 19.7761 2.22386 20 2.5 20H21.5C21.7761 20 22 19.7761 22 19.5V10.4482Z" fill="currentColor" />
    </svg>
));
