import { forwardRef } from 'react';

export const ArrowDownSquareIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.73223 2.73223C3 3.46447 3 4.64298 3 7L3 17C3 19.357 3 20.5355 3.73223 21.2678C4.46447 22 5.64298 22 8 22H16C18.357 22 19.5355 22 20.2678 21.2678C21 20.5355 21 19.357 21 17V7C21 4.64298 21 3.46447 20.2678 2.73223C19.5355 2 18.357 2 16 2L8 2C5.64298 2 4.46447 2 3.73223 2.73223ZM7.2 18.999H16.8C17.4627 18.999 18 18.4618 18 17.799C18 17.1363 17.4627 16.599 16.8 16.599L7.2 16.599C6.53726 16.599 6 17.1363 6 17.799C6 18.4618 6.53726 18.999 7.2 18.999ZM9.63172 9.97544L10.9001 11.2438L10.9001 5.6C10.9001 4.99249 11.3926 4.5 12.0001 4.5C12.6076 4.5 13.1001 4.99249 13.1001 5.6V11.2437L14.3684 9.97544C14.798 9.54586 15.4945 9.54586 15.924 9.97544C16.3536 10.405 16.3536 11.1015 15.924 11.5311L12.7779 14.6772C12.3483 15.1068 11.6518 15.1068 11.2222 14.6772L8.07609 11.5311C7.64651 11.1015 7.64651 10.405 8.07609 9.97544C8.50567 9.54586 9.20215 9.54586 9.63172 9.97544Z" fill="currentColor" />
    </svg>
));
