import React, { forwardRef } from 'react';

export const FilterIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M19.4695 3.34989C14.5022 2.88346 9.49487 2.8886 4.52841 3.36654C3.57112 3.45867 2.88431 4.33103 3.01942 5.28321L3.1731 6.3662C3.36593 7.72515 3.95403 8.99743 4.86424 10.0248L5.89652 11.1899L8.74883 13.9794C9.03738 14.2617 9.20004 14.6482 9.20004 15.0518V20.8001C9.20004 21.7324 10.2168 22.3086 11.0166 21.8295L14.1194 19.9711C14.5416 19.7182 14.8 19.2622 14.8 18.7701V15.0537C14.8 14.6494 14.9632 14.2623 15.2526 13.98L18.1121 11.1905L19.1441 10.0263C20.0675 8.98465 20.6593 7.69133 20.844 6.31162L20.9855 5.25458C21.1128 4.3034 20.4225 3.43937 19.4695 3.34989Z" fill="currentColor" />
    </svg>
));
