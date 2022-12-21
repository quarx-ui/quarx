import { forwardRef } from 'react';

export const PinIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M19.7535 4.34042L19.6604 4.24732C19.0336 3.62044 18.4935 3.08031 18.0029 2.70595C17.477 2.30475 16.8922 2.00098 16.1714 2.00098C15.4506 2.00098 14.8658 2.30475 14.34 2.70595C13.8493 3.08031 13.3092 3.62044 12.6824 4.24732L10.5575 6.3723C10.3805 6.54925 10.3443 6.58348 10.3113 6.60991C10.1632 6.72849 9.98452 6.80251 9.796 6.82335C9.75397 6.828 9.70415 6.8294 9.4539 6.8294H8.05462C6.64796 6.8294 5.29891 7.3882 4.30426 8.38285C3.63361 9.0535 3.63361 10.1408 4.30426 10.8115L13.1893 19.6966C13.86 20.3672 14.9473 20.3672 15.618 19.6966C16.6126 18.7019 17.1714 17.3529 17.1714 15.9462V14.5469C17.1714 14.2967 17.1728 14.2468 17.1775 14.2048C17.1983 14.0163 17.2723 13.8376 17.3909 13.6895C17.4173 13.6565 17.4516 13.6203 17.6285 13.4434L19.7535 11.3184C20.3804 10.6916 20.9205 10.1515 21.2949 9.66086C21.6961 9.13502 21.9998 8.55017 21.9998 7.8294C21.9998 7.10863 21.6961 6.52379 21.2949 5.99795C20.9205 5.50729 20.3804 4.96722 19.7535 4.34042Z" fill="currentColor" />
        <path d="M7.57487 17.6265C7.73108 17.7827 7.73107 18.036 7.57487 18.1922L5.1334 20.6337C4.64524 21.1218 3.85378 21.1218 3.36563 20.6337C2.87747 20.1455 2.87747 19.3541 3.36563 18.8659L5.8071 16.4244C5.96331 16.2682 6.21657 16.2682 6.37278 16.4244L7.57487 17.6265Z" fill="currentColor" />
    </svg>
));
