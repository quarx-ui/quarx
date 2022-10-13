import React, { forwardRef } from 'react';

export const ChevronLeftIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.7079 18.7061C15.0984 18.3155 15.0984 17.6824 14.7079 17.2918L9.98192 12.5659C9.71524 12.2992 9.5819 12.1659 9.58191 12.0002C9.58191 11.8345 9.71526 11.7011 9.98195 11.4345L14.7079 6.7091C15.0984 6.3186 15.0984 5.68543 14.7079 5.29489C14.3174 4.90434 13.6843 4.9043 13.2937 5.29481L7.29489 11.293C7.10733 11.4805 7.00196 11.7349 7.00195 12.0001C7.00195 12.2653 7.1073 12.5197 7.29485 12.7072L13.2937 18.7061C13.6842 19.0966 14.3174 19.0966 14.7079 18.7061Z" fill="currentColor" />
    </svg>
));
