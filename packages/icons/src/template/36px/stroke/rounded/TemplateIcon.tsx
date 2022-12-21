import { forwardRef } from 'react';

export const TemplateIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18 5C10.8203 5 5 10.8203 5 18C5 25.1797 10.8203 31 18 31C25.1797 31 31 25.1797 31 18C31 10.8203 25.1797 5 18 5ZM3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18Z" fill="currentColor" />
    </svg>
));
