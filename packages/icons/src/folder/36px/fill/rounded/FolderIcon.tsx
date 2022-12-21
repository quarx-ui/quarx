import { forwardRef } from 'react';

export const FolderIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M3.87868 30.1213C4.75736 31 6.17157 31 9 31L27 31C29.8284 31 31.2426 31 32.1213 30.1213C33 29.2426 33 27.8284 33 25V16C33 13.1716 33 11.7574 32.1213 10.8787C31.2426 10 29.8284 10 27 10H21.4155C20.2309 10 19.6386 10 19.1163 9.79796C18.8433 9.69236 18.5872 9.54738 18.3562 9.36762C17.9142 9.0237 17.6095 8.5158 17 7.5C16.3905 6.4842 16.0858 5.9763 15.6438 5.63238C15.4128 5.45262 15.1567 5.30764 14.8837 5.20204C14.3614 5 13.7691 5 12.5845 5H9C6.17157 5 4.75736 5 3.87868 5.87868C3 6.75736 3 8.17157 3 11V25C3 27.8284 3 29.2426 3.87868 30.1213Z" fill="currentColor" />
        <path d="M18.3665 5.26716C18.2471 5.49417 18.3977 5.79545 18.699 6.39802C19.0746 7.14921 19.2624 7.52481 19.591 7.7454C19.6223 7.76638 19.6543 7.78618 19.687 7.80475C20.0313 8 20.4512 8 21.2911 8H30.0714C30.3081 8 30.5 7.80812 30.5 7.57143C30.5 6.15127 29.3487 5 27.9286 5H19.563C18.8893 5 18.5525 5 18.4029 5.20837C18.3894 5.2271 18.3773 5.24675 18.3665 5.26716Z" fill="currentColor" />
    </svg>
));
