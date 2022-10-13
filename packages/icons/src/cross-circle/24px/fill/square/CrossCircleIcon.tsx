import React, { forwardRef } from 'react';

export const CrossCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.8581 10.1611C11.9363 10.2392 12.0629 10.2392 12.141 10.1611L14.7567 7.54536C14.9129 7.38915 15.1662 7.38915 15.3224 7.54536L16.4538 8.67674C16.61 8.83295 16.61 9.08621 16.4538 9.24242L13.838 11.8582C13.7599 11.9363 13.7599 12.0629 13.838 12.141L16.4542 14.7572C16.6104 14.9134 16.6104 15.1666 16.4542 15.3228L15.3228 16.4542C15.1666 16.6104 14.9134 16.6104 14.7571 16.4542L12.141 13.8381C12.0629 13.76 11.9363 13.76 11.8581 13.8381L9.2413 16.4549C9.08509 16.6111 8.83182 16.6111 8.67561 16.4549L7.54424 15.3235C7.38803 15.1673 7.38803 14.9141 7.54424 14.7579L10.1611 12.141C10.2392 12.0629 10.2392 11.9363 10.1611 11.8582L7.54466 9.24173C7.38845 9.08552 7.38845 8.83225 7.54466 8.67605L8.67603 7.54467C8.83224 7.38846 9.0855 7.38846 9.24171 7.54467L11.8581 10.1611Z" fill="currentColor" />
    </svg>
));