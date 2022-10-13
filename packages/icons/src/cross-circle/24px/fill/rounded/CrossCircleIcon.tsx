import React, { forwardRef } from 'react';

export const CrossCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.287 16.2885C16.7557 15.8199 16.7557 15.0601 16.287 14.5914L14.0494 12.3538C13.8542 12.1586 13.8542 11.842 14.0494 11.6467L16.2873 9.40888C16.7559 8.94025 16.7559 8.18045 16.2873 7.71182C15.8186 7.24319 15.0588 7.24319 14.5902 7.71182L12.3524 9.94967C12.1571 10.1449 11.8405 10.1449 11.6453 9.94967L9.40742 7.71182C8.93879 7.24319 8.17899 7.24319 7.71036 7.71182C7.24173 8.18045 7.24173 8.94025 7.71036 9.40888L9.9482 11.6467C10.1435 11.842 10.1435 12.1586 9.9482 12.3538L7.71058 14.5914C7.24196 15.0601 7.24196 15.8199 7.71058 16.2885C8.17921 16.7571 8.93901 16.7571 9.40764 16.2885L11.6453 14.0509C11.8405 13.8556 12.1571 13.8556 12.3524 14.0509L14.59 16.2885C15.0586 16.7571 15.8184 16.7571 16.287 16.2885Z" fill="currentColor" />
    </svg>
));
