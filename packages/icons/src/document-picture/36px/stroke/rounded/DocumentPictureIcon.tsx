import React, { forwardRef } from 'react';

export const DocumentPictureIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.99999 16C8.99999 13.7909 10.7909 12 13 12C15.2091 12 17 13.7909 17 16C17 18.2091 15.2091 20 13 20C10.7909 20 8.99999 18.2091 8.99999 16ZM13 14C11.8954 14 11 14.8954 11 16C11 17.1046 11.8954 18 13 18C14.1046 18 15 17.1046 15 16C15 14.8954 14.1046 14 13 14Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.9294 3L18.9289 3C20.1552 3 20.7683 3 21.3196 3.22837C21.8709 3.45673 22.3045 3.89027 23.1716 4.75736L29.2426 10.8284C30.1097 11.6955 30.5433 12.1291 30.7716 12.6804C31 13.2317 31 13.8448 31 15.0711V26.0706C31 27.4247 31.0001 28.5413 30.8813 29.4251C30.7565 30.3529 30.4845 31.1723 29.8284 31.8284C29.1723 32.4845 28.3529 32.7565 27.4251 32.8813C26.5413 33.0001 25.4247 33 24.0706 33H11.9294C10.5753 33 9.4587 33.0001 8.57494 32.8813C7.64711 32.7565 6.82769 32.4845 6.17158 31.8284C5.51547 31.1723 5.2435 30.3529 5.11876 29.4251C4.99994 28.5413 4.99997 27.4247 5 26.0706L5 9.9294C4.99997 8.5753 4.99994 7.45869 5.11876 6.57494C5.2435 5.64711 5.51547 4.82769 6.17158 4.17158C6.82768 3.51547 7.64711 3.2435 8.57494 3.11876C9.45868 2.99994 10.5754 2.99997 11.9294 3ZM19.8828 5.11716C20 5.23432 20 5.42288 20 5.8L20 9.06586C20 9.95235 19.9999 10.7162 20.0821 11.3278C20.1703 11.9833 20.369 12.6117 20.8787 13.1214C21.3883 13.631 22.0167 13.8298 22.6722 13.9179C23.2839 14.0001 24.0477 14.0001 24.9341 14L28.2 14C28.5771 14 28.7657 14 28.8828 14.1172C29 14.2343 29 14.4229 29 14.8V22.9383C29 23.2806 29 23.4518 28.9098 23.511C28.8887 23.5248 28.8652 23.5346 28.8406 23.5397C28.7349 23.5616 28.6139 23.4405 28.3718 23.1985L27.0889 21.9156C26.3125 21.1392 25.6712 20.4979 25.0975 20.0398C24.4976 19.5608 23.8806 19.2054 23.135 19.1005C22.8098 19.0548 22.4802 19.0493 22.1537 19.0841C21.405 19.1639 20.7764 19.4986 20.1608 19.9572C19.5722 20.3958 18.9097 21.0154 18.1078 21.7654L15.2329 24.4539C14.9596 24.7095 14.823 24.8373 14.6627 24.8577C14.6223 24.8629 14.5844 24.8631 14.5439 24.8586C14.3833 24.8407 14.2399 24.7106 13.9531 24.4505C13.7632 24.2783 13.5814 24.1217 13.4059 23.9819C12.7896 23.4914 12.1553 23.1292 11.3898 23.0325C11.0569 22.9905 10.72 22.9905 10.3871 23.0325C9.62158 23.1292 8.98725 23.4914 8.37095 23.9819C8.13753 24.1677 7.89306 24.3834 7.63324 24.6258C7.38369 24.8587 7.25891 24.9751 7.15552 24.9515C7.13102 24.9459 7.10858 24.9362 7.08778 24.9221C7 24.8626 7 24.6939 7 24.3565L7 10C7 8.55752 7.00213 7.57626 7.10092 6.84144C7.19585 6.13538 7.36322 5.80836 7.58579 5.58579C7.80836 5.36322 8.13538 5.19585 8.84144 5.10092C9.57626 5.00213 10.5575 5 12 5L19.2 5.00001C19.5771 5.00001 19.7657 5.00001 19.8828 5.11716ZM7.69229 27.3687C7.48339 27.5776 7.37895 27.682 7.29362 27.8129C7.17329 27.9974 7.07877 28.2664 7.05725 28.4856C7.04198 28.6411 7.05485 28.758 7.08059 28.9918C7.08686 29.0488 7.09363 29.1043 7.10092 29.1586C7.19585 29.8646 7.36322 30.1916 7.58579 30.4142C7.80836 30.6368 8.13538 30.8042 8.84144 30.8991C9.57626 30.9979 10.5575 31 12 31H16.8274C17.1697 31 17.3409 31 17.4001 30.9098C17.414 30.8887 17.4237 30.8652 17.4288 30.8406C17.4507 30.7349 17.3297 30.6139 17.0876 30.3718L14.0846 27.3687C13.2319 26.516 12.651 25.9373 12.1604 25.5467C11.6858 25.169 11.3926 25.0488 11.1391 25.0167C10.9726 24.9957 10.8042 24.9957 10.6378 25.0167C10.3842 25.0488 10.091 25.169 9.61648 25.5467C9.12584 25.9373 8.54494 26.516 7.69229 27.3687ZM21.6875 31C21.1731 31 20.9159 31 20.6797 30.9191C20.6202 30.8988 20.5621 30.8747 20.5056 30.847C20.2814 30.7372 20.0996 30.5553 19.7358 30.1916L16.6826 27.1383C16.3953 26.851 16.2517 26.7074 16.2321 26.5333C16.2274 26.4908 16.2281 26.4478 16.2343 26.4054C16.2596 26.2321 16.408 26.0933 16.7047 25.8158L19.4319 23.2654C20.2864 22.4663 20.8675 21.9247 21.3558 21.561C21.8273 21.2096 22.1166 21.0994 22.3658 21.0728C22.5291 21.0554 22.6939 21.0581 22.8564 21.081C23.1046 21.1159 23.39 21.2358 23.8496 21.6027C24.3254 21.9826 24.8881 22.5433 25.7154 23.3705L28.4587 26.1138C28.7033 26.3583 28.8255 26.4806 28.8992 26.633C28.9174 26.6708 28.9339 26.7113 28.9472 26.7512C29.0009 26.9117 28.9987 27.0809 28.9944 27.4192C28.9853 28.1331 28.9614 28.6949 28.8991 29.1586C28.8042 29.8646 28.6368 30.1916 28.4142 30.4142C28.1916 30.6368 27.8646 30.8042 27.1586 30.8991C26.4238 30.9979 25.4425 31 24 31L21.6875 31ZM27.2877 11.8766C27.2366 12 27.0311 12 26.6201 12H25C24.0289 12 23.4012 11.9979 22.9387 11.9357C22.505 11.8774 22.369 11.7833 22.2929 11.7071C22.2168 11.631 22.1226 11.4951 22.0643 11.0613C22.0021 10.5988 22 9.97111 22 9.00003V7.37993C22 6.96894 22 6.76345 22.1235 6.71231C22.2469 6.66117 22.3922 6.80648 22.6828 7.09709L26.903 11.3172C27.1936 11.6078 27.3389 11.7531 27.2877 11.8766Z" fill="currentColor" />
    </svg>
));