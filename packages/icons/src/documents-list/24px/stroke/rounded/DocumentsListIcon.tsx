import React, { forwardRef } from 'react';

export const DocumentsListIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.5 12.001C9.5 11.4487 9.94772 11.001 10.5 11.001L14 11.001C14.5523 11.001 15 11.4487 15 12.001C15 12.5533 14.5523 13.001 14 13.001L10.5 13.001C9.94772 13.001 9.5 12.5533 9.5 12.001Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9.5 16.001C9.5 15.4487 9.94772 15.001 10.5 15.001L14 15.001C14.5523 15.001 15 15.4487 15 16.001C15 16.5533 14.5523 17.001 14 17.001L10.5 17.001C9.94772 17.001 9.5 16.5533 9.5 16.001Z" fill="currentColor" />
        <path d="M8.3 16.0006C8.3 16.7738 7.6732 17.4006 6.9 17.4006C6.12681 17.4006 5.5 16.7738 5.5 16.0006C5.5 15.2274 6.12681 14.6006 6.9 14.6006C7.6732 14.6006 8.3 15.2274 8.3 16.0006Z" fill="currentColor" />
        <path d="M8.3 12.0006C8.3 12.7738 7.6732 13.4006 6.9 13.4006C6.12681 13.4006 5.5 12.7738 5.5 12.0006C5.5 11.2274 6.12681 10.6006 6.9 10.6006C7.6732 10.6006 8.3 11.2274 8.3 12.0006Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M6.93417 6.00097C6.95604 6.00097 6.97799 6.00097 7 6.00097L14.0658 6.00097C14.9523 6.00092 15.7161 6.00088 16.3278 6.08311C16.9833 6.17124 17.6117 6.36999 18.1213 6.87965C18.631 7.38931 18.8297 8.01766 18.9179 8.67318C19.0001 9.28485 19.0001 10.0487 19 10.9352V17.0668C19.0001 17.9533 19.0001 18.7171 18.9179 19.3288C18.8297 19.9843 18.631 20.6126 18.1213 21.1223C17.6117 21.632 16.9833 21.8307 16.3278 21.9188C15.7161 22.0011 14.9523 22.001 14.0658 22.001H6.93417C6.04769 22.001 5.28387 22.0011 4.67221 21.9188C4.0167 21.8307 3.38835 21.632 2.87868 21.1223C2.36902 20.6126 2.17028 19.9843 2.08215 19.3288C1.99991 18.7171 1.99995 17.9533 2 17.0668L2 11.001C2 10.979 2 10.957 2 10.9351C1.99995 10.0487 1.99991 9.28484 2.08215 8.67318C2.17028 8.01766 2.36902 7.38931 2.87868 6.87965C3.38835 6.36999 4.0167 6.17124 4.67221 6.08311C5.28387 6.00088 6.04769 6.00092 6.93417 6.00097ZM4.93871 8.06528C4.50497 8.12359 4.36902 8.21774 4.2929 8.29386C4.21677 8.36999 4.12263 8.50594 4.06431 8.93968C4.00213 9.40218 4 10.0299 4 11.001V17.001C4 17.9721 4.00213 18.5998 4.06431 19.0623C4.12263 19.496 4.21677 19.632 4.2929 19.7081C4.36902 19.7842 4.50497 19.8783 4.93871 19.9367C5.40122 19.9988 6.02893 20.001 7 20.001H14C14.9711 20.001 15.5988 19.9988 16.0613 19.9367C16.495 19.8783 16.631 19.7842 16.7071 19.7081C16.7832 19.632 16.8774 19.496 16.9357 19.0623C16.9979 18.5998 17 17.9721 17 17.001V11.001C17 10.0299 16.9979 9.40218 16.9357 8.93968C16.8774 8.50594 16.7832 8.36999 16.7071 8.29386C16.631 8.21774 16.495 8.12359 16.0613 8.06528C15.5988 8.0031 14.9711 8.00097 14 8.00097H7C6.02893 8.00097 5.40122 8.0031 4.93871 8.06528Z" fill="currentColor" />
        <path d="M7.73897 3.02971C7.44688 3.3647 7.30083 3.53219 7.40743 3.76659C7.51404 4.00098 7.7771 4.00099 8.30323 4.00101L14.6402 4.0012C16.2402 4.0012 17.3558 4.00271 18.2097 4.09973C19.0432 4.19443 19.5018 4.36919 19.8389 4.63073C20.0378 4.78498 20.2164 4.96363 20.3707 5.16248C20.6322 5.49966 20.807 5.95818 20.9017 6.79169C20.9987 7.64565 21.0002 8.76124 21.0002 10.3612C21.0002 12.4788 21.0001 14.5963 21 16.7139C21 17.2291 21 17.4867 21.234 17.5934C21.468 17.7001 21.6316 17.5581 21.9588 17.274C22.3114 16.9679 22.5936 16.5795 22.7719 16.1492C22.9069 15.8233 22.9564 15.4934 22.9789 15.1636C23.0002 14.8503 23.0002 14.4718 23.0002 14.0332V10.3004C23.0002 8.77553 23.0003 7.54601 22.8889 6.56592C22.7738 5.55239 22.5288 4.68161 21.951 3.93666C21.6939 3.60525 21.3962 3.3075 21.0648 3.05042C20.3198 2.47259 19.449 2.22766 18.4355 2.11251C17.4554 2.00116 16.2259 2.00118 14.701 2.0012L10.666 2.00109C10.0566 2.00031 9.52984 1.99965 9.07317 2.14803C8.5497 2.31812 8.09103 2.62595 7.73897 3.02971Z" fill="currentColor" />
    </svg>
));