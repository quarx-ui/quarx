import React, { forwardRef } from 'react';

export const TrashBinIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M1 4.3C1 4.13431 1.13432 4 1.3 4L14.7 4C14.8656 4 15 4.13432 15 4.3L15 5.3C15 5.46568 14.8656 5.6 14.7 5.6H13.4989C13.3381 5.6 13.2058 5.72681 13.1991 5.88749L12.8388 14.5209C12.8276 14.7886 12.6073 15 12.3392 15H3.65965C3.39162 15 3.17127 14.7886 3.16009 14.5209L2.79974 5.88749C2.79303 5.72681 2.66082 5.6 2.5 5.6H1.3C1.13431 5.6 1 5.46569 1 5.3L1 4.3ZM6.95039 6.99883C7.11608 6.99883 7.25039 7.13314 7.25039 7.29883L7.25039 11.6988C7.25039 11.8645 7.11608 11.9988 6.95039 11.9988H5.95039C5.78471 11.9988 5.65039 11.8645 5.65039 11.6988L5.65039 7.29883C5.65039 7.13314 5.78471 6.99883 5.95039 6.99883H6.95039ZM10.05 6.99883C10.2157 6.99883 10.35 7.13314 10.35 7.29883V11.699C10.35 11.8647 10.2157 11.999 10.05 11.999H9.05C8.88431 11.999 8.75 11.8647 8.75 11.699L8.75 7.29883C8.75 7.13314 8.88431 6.99883 9.05 6.99883H10.05Z" fill="currentColor" />
        <path d="M9.99178 1.25068C9.96767 1.10603 9.84251 1 9.69586 1L6.30414 1C6.15749 1 6.03233 1.10602 6.00822 1.25068L5.80822 2.45068C5.77774 2.63354 5.91876 2.8 6.10414 2.8L9.89586 2.8C10.0812 2.8 10.2223 2.63354 10.1918 2.45068L9.99178 1.25068Z" fill="currentColor" />
    </svg>
));