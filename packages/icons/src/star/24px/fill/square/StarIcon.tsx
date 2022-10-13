import React, { forwardRef } from 'react';

export const StarIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M11.6418 2.72612C11.7886 2.42984 12.2125 2.42984 12.3592 2.72612L15.1635 8.38891C15.2072 8.47715 15.2917 8.53831 15.3894 8.55246L21.6601 9.46054C21.9882 9.50805 22.1192 9.90986 21.8818 10.1405L17.3443 14.5484C17.2736 14.617 17.2413 14.716 17.258 14.813L18.3291 21.037C18.3852 21.3626 18.0422 21.611 17.7488 21.4572L12.1401 18.5187C12.0527 18.4729 11.9483 18.4729 11.8609 18.5187L6.25227 21.4572C5.95882 21.611 5.61585 21.3626 5.67189 21.037L6.74305 14.813C6.75974 14.716 6.72748 14.617 6.65677 14.5484L2.11928 10.1405C1.88187 9.90986 2.01288 9.50805 2.34096 9.46053L8.61162 8.55246C8.70933 8.53831 8.7938 8.47715 8.8375 8.38891L11.6418 2.72612Z" fill="currentColor" />
    </svg>
));