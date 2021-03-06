import React, { forwardRef } from 'react';

export const SpasiboIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.0088 17C9.26965 17 7 14.7345 7 11.9999C7 9.2655 9.26965 7 12.0088 7C13.5739 7 14.9827 7.70309 15.9219 8.87507L13.8871 10.5155C13.4176 9.96883 12.7914 9.65616 12.0088 9.65616C10.6783 9.65616 9.66098 10.7499 9.66098 11.9999C9.66098 13.3283 10.7566 14.3438 12.0088 14.3438C12.7133 14.3438 13.4176 14.0312 13.8871 13.4061L16 15.0469C15.0608 16.2969 13.5739 17 12.0088 17ZM12 2C6.49999 2 2 6.50004 2 11.9999V22H12C17.4998 22 22 17.5002 22 11.9999C22 6.50004 17.4998 2 12 2Z" fill="currentColor" />
    </svg>
));
