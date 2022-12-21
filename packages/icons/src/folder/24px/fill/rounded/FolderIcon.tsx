import { forwardRef } from 'react';

export const FolderIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M2 16.3747C2 16.3565 2 16.3383 2 16.32L2 7.62532C1.99997 6.88381 1.99994 6.24453 2.05886 5.72592C2.12154 5.17416 2.26155 4.6357 2.62954 4.16129C2.78378 3.96244 2.96243 3.78378 3.16128 3.62954C3.63569 3.26155 4.17415 3.12155 4.72592 3.05886C5.24453 2.99994 5.88381 2.99997 6.62532 3.00001L7.27638 3.00001C7.32069 3.00001 7.36465 2.99994 7.40827 2.99988C8.04927 2.99895 8.61662 2.99813 9.14235 3.2008C9.27319 3.25124 9.40033 3.31079 9.52284 3.37901C10.0151 3.65315 10.3777 4.08952 10.7873 4.58255C10.8152 4.6161 10.8433 4.6499 10.8717 4.68394C10.9314 4.75558 11.001 4.83884 11.0756 4.928C11.5138 5.4512 11.7328 5.7128 12.0339 5.85363C12.3349 5.99446 12.6775 5.99497 13.3627 5.99598C14.5729 5.99777 16.2969 6 17.3747 6C18.1162 5.99997 18.7555 5.99994 19.2741 6.05886C19.8259 6.12155 20.3643 6.26155 20.8387 6.62954C21.0376 6.78378 21.2162 6.96243 21.3705 7.16128C21.7385 7.6357 21.8785 8.17415 21.9412 8.72592C22.0001 9.24453 22 9.88381 22 10.6253V16.3747C22 17.1162 22.0001 17.7555 21.9412 18.2741C21.8785 18.8259 21.7385 19.3643 21.3705 19.8387C21.2162 20.0376 21.0376 20.2162 20.8387 20.3705C20.3643 20.7385 19.8259 20.8785 19.2741 20.9412C18.7555 21.0001 18.1162 21 17.3747 21L6.68 21C6.66172 21 6.64349 21 6.62532 21C5.88381 21 5.24453 21.0001 4.72592 20.9412C4.17415 20.8785 3.6357 20.7385 3.16128 20.3705C2.96243 20.2162 2.78378 20.0376 2.62954 19.8387C2.26155 19.3643 2.12154 18.8259 2.05886 18.2741C1.99994 17.7555 1.99997 17.1162 2 16.3747Z" fill="currentColor" />
    </svg>
));
