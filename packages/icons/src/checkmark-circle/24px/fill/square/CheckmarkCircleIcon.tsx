import { forwardRef } from 'react';

export const CheckmarkCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.2114 10.2827C17.3676 10.1265 17.3676 9.87324 17.2114 9.71702L16.0801 8.58559C15.9239 8.42937 15.6706 8.42936 15.5144 8.58556L11.1459 12.9536C11.0678 13.0317 10.9412 13.0317 10.8631 12.9536L8.97586 11.0667C8.81964 10.9106 8.56637 10.9106 8.41018 11.0668L7.27891 12.1983C7.12272 12.3545 7.12274 12.6078 7.27896 12.764L10.7925 16.2768C10.9096 16.3939 11.0995 16.3939 11.2167 16.2768L17.2114 10.2827Z" fill="currentColor" />
    </svg>
));
