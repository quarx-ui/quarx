import React, { forwardRef } from 'react';

export const EuroIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M2 14C2 13.4477 2.44772 13 3 13H5.51139C5.50382 12.8342 5.5 12.6674 5.5 12.5C5.5 11.9921 5.53519 11.4908 5.60321 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H6.07892C7.26347 5.54651 10.1545 3 13.7115 3C15.6049 3 17.3333 3.73952 18.7013 4.95065C19.1148 5.31674 19.1533 5.94874 18.7872 6.36225C18.4211 6.77576 17.7891 6.8142 17.3756 6.44811C16.333 5.52509 15.0651 5 13.7115 5C11.4081 5 9.27893 6.57428 8.21358 9L16 9C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H7.62248C7.54232 11.4816 7.5 11.9828 7.5 12.5C7.5 12.6684 7.50449 12.8351 7.51331 13H16C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15H7.85035C8.72169 17.9842 11.1051 20 13.7115 20C15.4488 20 17.0565 19.1316 18.2141 17.6605C18.5557 17.2265 19.1844 17.1516 19.6184 17.4931C20.0524 17.8346 20.1274 18.4633 19.7859 18.8974C18.3093 20.7736 16.1533 22 13.7115 22C9.81903 22 6.72404 18.9505 5.79016 15H3C2.44772 15 2 14.5523 2 14Z" fill="currentColor" />
    </svg>
));
