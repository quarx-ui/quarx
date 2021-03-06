import React, { forwardRef } from 'react';

export const DownloadIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M21 19C21 20.1045 20.1046 21 19 21H5C3.89543 21 3 20.1045 3 19L3 16C3 14.8954 3.89543 14 5 14H6L6 15C6 16.1045 6.89543 17 8 17L16 17C17.1046 17 18 16.1045 18 15V14H19C20.1046 14 21 14.8954 21 16V19Z" fill="currentColor" />
        <path d="M7.76016 10.8363L11.6299 15.093C11.8283 15.3113 12.1714 15.3113 12.3698 15.093L16.2396 10.8363C16.5315 10.5152 16.3037 10 15.8696 10H13.9999V2.7C13.9999 2.3134 13.6865 2 13.2999 2L10.6999 2C10.3133 2 9.99986 2.3134 9.99986 2.7V10H8.13013C7.69606 10 7.46818 10.5152 7.76016 10.8363Z" fill="currentColor" />
    </svg>
));
