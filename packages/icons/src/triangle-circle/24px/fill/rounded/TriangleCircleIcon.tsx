import { forwardRef } from 'react';

export const TriangleCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4863 12C17.4863 11.6583 17.0983 11.4281 16.3223 10.9679L10.8122 7.69979C10.0081 7.22292 9.60611 6.98448 9.30305 7.15709C9 7.3297 9 7.7971 9 8.73191L9 15.2681C9 16.2029 9 16.6703 9.30305 16.8429C9.60611 17.0155 10.0081 16.7771 10.8121 16.3002L16.3223 13.0321C17.0983 12.5719 17.4863 12.3417 17.4863 12Z" fill="currentColor" />
    </svg>
));
