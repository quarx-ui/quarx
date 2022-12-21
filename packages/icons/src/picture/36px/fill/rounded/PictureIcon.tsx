import { forwardRef } from 'react';

export const PictureIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.87868 5.87868C3 6.75736 3 8.17157 3 11V25C3 27.8284 3 29.2426 3.87868 30.1213C4.75736 31 6.17157 31 9 31H27C29.8284 31 31.2426 31 32.1213 30.1213C33 29.2426 33 27.8284 33 25V11C33 8.17157 33 6.75736 32.1213 5.87868C31.2426 5 29.8284 5 27 5H9C6.17157 5 4.75736 5 3.87868 5.87868ZM26 15C27.6569 15 29 13.6569 29 12C29 10.3431 27.6569 9 26 9C24.3431 9 23 10.3431 23 12C23 13.6569 24.3431 15 26 15ZM26.8039 23.2517L29.642 26.0898C29.8113 26.2591 29.896 26.3438 29.9319 26.4663C29.9679 26.5888 29.947 26.6843 29.9054 26.8755C29.8422 27.1657 29.7367 27.3847 29.5607 27.5607C29.1213 28 28.4142 28 27 28H17.4916C16.4641 28 15.9503 28 15.8225 27.6913C15.6946 27.3827 16.0579 27.0194 16.7845 26.2929L19.826 23.2515C20.4528 22.6247 20.9929 22.0846 21.4836 21.7103C22.0094 21.3091 22.5942 21.0054 23.315 21.0054C24.0358 21.0054 24.6206 21.3092 25.1464 21.7103C25.637 22.0847 26.1771 22.6248 26.8039 23.2517ZM18.5218 21.0196C18.5218 20.8125 18.3551 20.6458 18.0218 20.3125L14.9665 17.2572C14.3397 16.6302 13.7996 16.0901 13.3089 15.7157C12.783 15.3145 12.1982 15.0107 11.4774 15.0107C10.7566 15.0108 10.1717 15.3146 9.64589 15.7158C9.15524 16.0902 8.61515 16.6304 7.98836 17.2573L6.87859 18.3672C6.44509 18.8007 6.22834 19.0175 6.11417 19.2931C6 19.5688 6 19.8753 6 20.4884V25C6 26.4142 6 27.1213 6.43934 27.5607C6.87868 28 7.58579 28 9 28H10.9197C11.3284 28 11.5328 28 11.7165 27.9239C11.9003 27.8478 12.0448 27.7033 12.3338 27.4143L18.0218 21.7267C18.3551 21.3934 18.5218 21.2267 18.5218 21.0196Z" fill="currentColor" />
    </svg>
));
