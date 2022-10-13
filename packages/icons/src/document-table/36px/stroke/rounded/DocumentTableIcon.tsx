import React, { forwardRef } from 'react';

export const DocumentTableIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M10 26.0544L10 23.0054L10 23L10 22.9946L10 19.9456C9.99993 19.5215 9.99984 19.1094 10.0455 18.7695C10.0971 18.3863 10.2226 17.949 10.5858 17.5858C10.949 17.2226 11.3863 17.0971 11.7695 17.0455C12.1094 16.9998 12.5215 16.9999 12.9456 17L15.9945 17L16 17L16.0055 17L23.0544 17C23.4785 16.9999 23.8906 16.9998 24.2305 17.0455C24.6137 17.0971 25.051 17.2226 25.4142 17.5858C25.7774 17.949 25.903 18.3863 25.9545 18.7695C26.0002 19.1094 26.0001 19.5215 26 19.9456L26 26.0544C26.0001 26.4785 26.0002 26.8906 25.9545 27.2305C25.903 27.6137 25.7774 28.051 25.4142 28.4142C25.051 28.7774 24.6137 28.903 24.2305 28.9545C23.8906 29.0002 23.4785 29.0001 23.0544 29H12.9456C12.5215 29.0001 12.1094 29.0002 11.7695 28.9545C11.3863 28.903 10.949 28.7774 10.5858 28.4142C10.2226 28.051 10.0971 27.6137 10.0455 27.2305C9.99984 26.8906 9.99993 26.4785 10 26.0544ZM14.8828 19.1172C15 19.2343 15 19.4229 15 19.8V21.2C15 21.5771 15 21.7657 14.8828 21.8828C14.7657 22 14.5771 22 14.2 22H12.8C12.4229 22 12.2343 22 12.1172 21.8828C12 21.7657 12 21.577 12 21.1997V19.7995C12 19.4227 12 19.2343 12.1172 19.1172C12.2343 19 12.4229 19 12.8 19H14.2C14.5771 19 14.7657 19 14.8828 19.1172ZM17.1172 19.1172C17.2343 19 17.4229 19 17.8 19H23.2C23.5771 19 23.7657 19 23.8829 19.1172C24 19.2343 24 19.4229 24 19.8V21.2C24 21.5771 24 21.7657 23.8829 21.8828C23.7657 22 23.5771 22 23.2 22L17.8 22C17.4229 22 17.2343 22 17.1172 21.8828C17 21.7657 17 21.5771 17 21.2V19.8C17 19.4229 17 19.2343 17.1172 19.1172ZM23.8829 24.1172C24 24.2343 24 24.4229 24 24.8V26.2001C24 26.5772 24 26.7657 23.8829 26.8829C23.7657 27 23.5771 27 23.2 27H17.8C17.4229 27 17.2343 27 17.1172 26.8829C17 26.7657 17 26.5771 17 26.2L17 24.8C17 24.4229 17 24.2343 17.1172 24.1172C17.2343 24 17.4229 24 17.8 24L23.2 24C23.5771 24 23.7657 24 23.8829 24.1172ZM14.8828 26.8829C14.7657 27 14.5771 27 14.2 27H12.8C12.4229 27 12.2343 27 12.1172 26.8829C12 26.7657 12 26.5773 12 26.2005V24.8003C12 24.423 12 24.2343 12.1172 24.1172C12.2343 24 12.4229 24 12.8 24H14.2C14.5771 24 14.7657 24 14.8828 24.1172C15 24.2343 15 24.4229 15 24.8L15 26.2C15 26.5771 15 26.7657 14.8828 26.8829Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M8.57494 3.11875C9.45869 2.99994 10.5753 2.99997 11.9294 3L18.9289 3C20.1552 3 20.7683 3 21.3196 3.22836C21.8709 3.45672 22.3045 3.89026 23.1716 4.75734L29.2426 10.8284C30.1097 11.6955 30.5433 12.1291 30.7716 12.6804C31 13.2317 31 13.8448 31 15.0711L31 26.0706C31 27.4247 31.0001 28.5413 30.8813 29.4251C30.7565 30.3529 30.4845 31.1723 29.8284 31.8284C29.1723 32.4845 28.3529 32.7565 27.4251 32.8813C26.5413 33.0001 25.4247 33 24.0706 33H11.9294C10.5753 33 9.45869 33.0001 8.57494 32.8813C7.64711 32.7565 6.82769 32.4845 6.17158 31.8284C5.51547 31.1723 5.2435 30.3529 5.11876 29.4251C4.99994 28.5413 4.99997 27.4247 5 26.0706L5 9.9294C4.99997 8.57529 4.99994 7.45869 5.11876 6.57494C5.2435 5.64711 5.51547 4.82769 6.17158 4.17158C6.82769 3.51547 7.64711 3.2435 8.57494 3.11875ZM19.8828 5.11716C20 5.23432 20 5.42288 20 5.8L20 9.06586C20 9.95235 19.9999 10.7162 20.0821 11.3278C20.1703 11.9833 20.369 12.6117 20.8787 13.1214C21.3884 13.631 22.0167 13.8298 22.6722 13.9179C23.2839 14.0001 24.0477 14.0001 24.9342 14L28.2 14C28.5771 14 28.7657 14 28.8828 14.1172C29 14.2343 29 14.4229 29 14.8L29 26C29 27.4425 28.9979 28.4238 28.8991 29.1586C28.8042 29.8646 28.6368 30.1916 28.4142 30.4142C28.1916 30.6368 27.8646 30.8042 27.1586 30.8991C26.4238 30.9979 25.4425 31 24 31H12C10.5575 31 9.57626 30.9979 8.84144 30.8991C8.13538 30.8042 7.80836 30.6368 7.58579 30.4142C7.36322 30.1916 7.19585 29.8646 7.10092 29.1586C7.00213 28.4238 7 27.4425 7 26V10C7 8.55752 7.00213 7.57626 7.10092 6.84144C7.19585 6.13538 7.36322 5.80836 7.58579 5.58579C7.80836 5.36322 8.13538 5.19585 8.84144 5.10092C9.57626 5.00213 10.5575 5 12 5L19.2 5C19.5771 5 19.7657 5 19.8828 5.11716ZM27.2877 11.8766C27.2366 12 27.0311 12 26.6201 12H25C24.0289 12 23.4012 11.9979 22.9387 11.9357C22.505 11.8774 22.369 11.7833 22.2929 11.7071C22.2168 11.631 22.1226 11.4951 22.0643 11.0613C22.0021 10.5988 22 9.97111 22 9.00003V7.37993C22 6.96894 22 6.76345 22.1235 6.71231C22.2469 6.66117 22.3922 6.80648 22.6828 7.09709L26.903 11.3172C27.1936 11.6078 27.3389 11.7531 27.2877 11.8766Z" fill="currentColor" />
    </svg>
));
