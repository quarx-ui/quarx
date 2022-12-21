import { forwardRef } from 'react';

export const EuroIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8.51985 9C8.3755 9 8.27908 8.85167 8.34219 8.72184C9.44423 6.45462 11.4974 5 13.7115 5C15.0651 5 16.333 5.52509 17.3756 6.44811C17.7891 6.8142 18.4211 6.77576 18.7872 6.36225C19.1533 5.94874 19.1148 5.31674 18.7013 4.95065C17.3333 3.73952 15.6049 3 13.7115 3C10.2475 3 7.41513 5.41506 6.17533 8.73095C6.11548 8.89103 5.96414 9 5.79324 9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H5.37358C5.49496 11 5.58821 11.1072 5.5741 11.2278C5.52518 11.6455 5.5 12.0704 5.5 12.5C5.5 12.5972 5.50129 12.6941 5.50385 12.7908C5.50687 12.9048 5.41609 13 5.30206 13H3C2.44772 13 2 13.4477 2 14C2 14.5523 2.44772 15 3 15H5.47369C5.65916 15 5.81956 15.1279 5.86756 15.307C6.88592 19.1074 9.92048 22 13.7115 22C16.1533 22 18.3093 20.7736 19.7859 18.8974C20.1274 18.4633 20.0524 17.8346 19.6184 17.4931C19.1844 17.1516 18.5557 17.2265 18.2141 17.6605C17.0565 19.1316 15.4488 20 13.7115 20C11.18 20 8.8589 18.0984 7.92921 15.2549C7.88777 15.1282 7.98374 15 8.1171 15L16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13L7.70289 13C7.59659 13 7.50863 12.9168 7.50512 12.8106C7.50172 12.7077 7.5 12.6042 7.5 12.5C7.5 12.0425 7.53312 11.5974 7.59626 11.1674C7.61047 11.0707 7.69416 11 7.79194 11L16 11C16.5523 11 17 10.5523 17 10C17 9.44771 16.5523 9 16 9L8.51985 9Z" fill="currentColor" />
    </svg>
));
