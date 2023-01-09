import { forwardRef } from 'react';

export const UserIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M18 3C14.9624 3 12.5 5.46243 12.5 8.5C12.5 11.5376 14.9624 14 18 14C21.0376 14 23.5 11.5376 23.5 8.5C23.5 5.46243 21.0376 3 18 3Z" fill="currentColor" />
        <path d="M11.1724 17.549C9.395 17.8225 7.95107 19.1278 7.5003 20.8687L6.10445 26.2595C5.75696 27.6015 6.29479 29.0166 7.44589 29.7891C13.8262 34.0706 22.1647 34.07 28.5469 29.7911C29.7001 29.0179 30.2392 27.5997 29.8898 26.2559L28.4881 20.8649C28.036 19.126 26.5929 17.8227 24.8172 17.5495L22.2508 17.1547C19.429 16.7206 16.5574 16.7206 13.7356 17.1547L11.1724 17.549Z" fill="currentColor" />
    </svg>
));
