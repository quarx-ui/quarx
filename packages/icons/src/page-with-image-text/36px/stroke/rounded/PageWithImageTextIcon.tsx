import { forwardRef } from 'react';

export const PageWithImageTextIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M28 14C28.5523 14 29 13.5523 29 13C29 12.4477 28.5523 12 28 12L24 12C23.4477 12 23 12.4477 23 13C23 13.5523 23.4477 14 24 14H28Z" fill="currentColor" />
        <path d="M29 17C29 17.5523 28.5523 18 28 18H24C23.4477 18 23 17.5523 23 17C23 16.4477 23.4477 16 24 16H28C28.5523 16 29 16.4477 29 17Z" fill="currentColor" />
        <path d="M28 22C28.5523 22 29 21.5523 29 21C29 20.4477 28.5523 20 28 20H24C23.4477 20 23 20.4477 23 21C23 21.5523 23.4477 22 24 22H28Z" fill="currentColor" />
        <path d="M29 26C29 26.5523 28.5523 27 28 27H9C8.44772 27 8 26.5523 8 26C8 25.4477 8.44772 25 9 25H28C28.5523 25 29 25.4477 29 26Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.9384 10C11.2843 9.99994 10.6966 9.99989 10.2209 10.0638C9.70149 10.1337 9.16868 10.2958 8.73224 10.7322C8.2958 11.1687 8.13367 11.7015 8.06384 12.2209C7.99989 12.6966 7.99994 13.2843 8.00001 13.9384V19.0616C7.99994 19.7157 7.99989 20.3035 8.06384 20.7792C8.13367 21.2985 8.2958 21.8313 8.73224 22.2678C9.16868 22.7042 9.70149 22.8663 10.2209 22.9362C10.6966 23.0001 11.2843 23.0001 11.9384 23H17.0616C17.7157 23.0001 18.3035 23.0001 18.7792 22.9362C19.2985 22.8663 19.8313 22.7042 20.2678 22.2678C20.7042 21.8313 20.8664 21.2985 20.9362 20.7792C21.0001 20.3035 21.0001 19.7157 21 19.0616V13.9384C21.0001 13.2843 21.0001 12.6966 20.9362 12.2209C20.8663 11.7015 20.7042 11.1687 20.2678 10.7322C19.8313 10.2958 19.2985 10.1337 18.7792 10.0638C18.3035 9.99989 17.7158 9.99994 17.0617 10L11.9384 10ZM10.046 12.4873C10.0846 12.2005 10.1399 12.1521 10.1465 12.1465C10.1521 12.1399 10.2005 12.0846 10.4873 12.046C10.8137 12.0021 11.2646 12 12 12L17 12C17.7354 12 18.1863 12.0021 18.5127 12.046C18.7995 12.0846 18.8474 12.1394 18.8531 12.1459L18.8541 12.1469C18.8606 12.1526 18.9154 12.2005 18.954 12.4873C18.9979 12.8137 19 13.2646 19 14V19C19 19.7354 18.9979 20.1863 18.954 20.5127C18.9154 20.7995 18.8606 20.8474 18.8541 20.8531L18.8531 20.8541C18.8474 20.8606 18.7995 20.9154 18.5127 20.954C18.1863 20.9979 17.7354 21 17 21H12C11.2646 21 10.8137 20.9979 10.4873 20.954C10.2005 20.9154 10.1526 20.8606 10.1469 20.8541L10.1459 20.8531C10.1394 20.8474 10.0846 20.7995 10.046 20.5127C10.0021 20.1863 10 19.7354 10 19V14C10 13.2646 10.0021 12.8137 10.046 12.4873Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M31.8284 6.17206C31.1723 5.51595 30.3529 5.24399 29.4251 5.11924C28.5413 5.00043 27.4247 5.00046 26.0707 5.00049L9.92943 5.00049C8.57531 5.00045 7.4587 5.00043 6.57494 5.11924C5.64711 5.24399 4.82769 5.51596 4.17158 6.17206C3.51547 6.82817 3.2435 7.6476 3.11876 8.57543C2.99994 9.45918 2.99997 10.5758 3 11.9299L3 24.0711C2.99997 25.4252 2.99994 26.5418 3.11876 27.4256C3.2435 28.3534 3.51547 29.1728 4.17158 29.8289C4.82769 30.485 5.64711 30.757 6.57494 30.8817C7.4587 31.0006 8.57532 31.0005 9.92944 31.0005H26.0706C27.4247 31.0005 28.5413 31.0006 29.4251 30.8817C30.3529 30.757 31.1723 30.485 31.8284 29.8289C32.4845 29.1728 32.7565 28.3534 32.8813 27.4256C33.0001 26.5418 33 25.4252 33 24.0711L33 11.9299C33 10.5759 33.0001 9.45917 32.8813 8.57543C32.7565 7.6476 32.4845 6.82817 31.8284 6.17206ZM26 7.00049C27.4425 7.00049 28.4238 7.00261 29.1586 7.10141C29.8646 7.19634 30.1917 7.36371 30.4142 7.58628C30.6368 7.80885 30.8042 8.13587 30.8991 8.84192C30.9979 9.57674 31 10.558 31 12.0005L31 24.0005C31 25.443 30.9979 26.4242 30.8991 27.1591C30.8042 27.8651 30.6368 28.1921 30.4142 28.4147C30.1917 28.6373 29.8646 28.8046 29.1586 28.8996C28.4238 28.9984 27.4425 29.0005 26 29.0005H10C8.55752 29.0005 7.57626 28.9984 6.84144 28.8996C6.13538 28.8046 5.80836 28.6373 5.58579 28.4147C5.36322 28.1921 5.19585 27.8651 5.10092 27.1591C5.00213 26.4242 5 25.443 5 24.0005L5 12.0005C5 10.558 5.00213 9.57674 5.10092 8.84192C5.19585 8.13587 5.36322 7.80885 5.58579 7.58628C5.80836 7.36371 6.13538 7.19633 6.84144 7.10141C7.57626 7.00261 8.55752 7.00049 10 7.00049L26 7.00049Z" fill="currentColor" />
    </svg>
));
