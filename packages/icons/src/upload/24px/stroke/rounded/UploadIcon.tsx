import React, { forwardRef } from 'react';

export const UploadIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M5 16C5 15.4477 4.55229 15 4 15C3.44772 15 3 15.4477 3 16L3 16.6452C2.99998 17.2613 2.99996 17.7927 3.04133 18.2278C3.08513 18.6885 3.18226 19.1435 3.44208 19.5675C3.68945 19.9712 4.02884 20.3106 4.43251 20.5579C4.85651 20.8177 5.31153 20.9149 5.77219 20.9587C6.20736 21 6.73872 21 7.3548 21H16.6452C17.2613 21 17.7926 21 18.2278 20.9587C18.6885 20.9149 19.1435 20.8177 19.5675 20.5579C19.9712 20.3106 20.3106 19.9712 20.5579 19.5675C20.8178 19.1435 20.9149 18.6885 20.9587 18.2278C21 17.7926 21 17.2613 21 16.6452V16C21 15.4477 20.5523 15 20 15C19.4477 15 19 15.4477 19 16V16.6C19 17.274 18.9989 17.7094 18.9677 18.0385C18.9378 18.3528 18.8875 18.4656 18.8526 18.5225C18.7702 18.6571 18.6571 18.7702 18.5225 18.8526C18.4656 18.8875 18.3528 18.9378 18.0385 18.9677C17.7094 18.9989 17.2741 19 16.6 19H7.4C6.72595 19 6.29064 18.9989 5.9615 18.9677C5.64723 18.9378 5.53444 18.8875 5.4775 18.8526C5.34295 18.7702 5.22982 18.6571 5.14736 18.5225C5.11247 18.4656 5.06223 18.3528 5.03235 18.0385C5.00106 17.7094 5 17.274 5 16.6L5 16Z" fill="currentColor" />
        <path d="M8.29289 7.70711C8.68342 8.09763 9.31658 8.09763 9.70711 7.70711L10.7781 6.63614C10.86 6.55424 11 6.61224 11 6.72806L11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15L13 6.72806C13 6.61224 13.14 6.55424 13.2219 6.63614L14.2929 7.70711C14.6834 8.09763 15.3166 8.09763 15.7071 7.70711C16.0976 7.31658 16.0976 6.68342 15.7071 6.29289L12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711Z" fill="currentColor" />
    </svg>
));
