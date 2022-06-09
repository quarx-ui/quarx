import React, { forwardRef } from 'react';

export const MagnifyingGlassIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.1553 17.5695C16.0126 17.4269 15.7868 17.4137 15.6223 17.5303C14.3169 18.4559 12.722 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.722 18.4559 14.3169 17.5303 15.6223C17.4137 15.7868 17.4269 16.0126 17.5695 16.1553L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.1553 17.5695ZM17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11Z" fill="currentColor" />
    </svg>
));
