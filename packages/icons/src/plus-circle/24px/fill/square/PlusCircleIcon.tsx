import { forwardRef } from 'react';

export const PlusCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.001 22.001C17.5238 22.001 22.001 17.5238 22.001 12.001C22.001 6.47813 17.5238 2.00098 12.001 2.00098C6.47813 2.00098 2.00098 6.47813 2.00098 12.001C2.00098 17.5238 6.47813 22.001 12.001 22.001ZM13.2008 10.6012C13.2008 10.7116 13.2903 10.8012 13.4008 10.8012H17.1C17.3209 10.8012 17.5 10.9803 17.5 11.2012V12.8012C17.5 13.0221 17.3209 13.2012 17.1 13.2012H13.4008C13.2903 13.2012 13.2008 13.2907 13.2008 13.4012V17.101C13.2008 17.3219 13.0217 17.501 12.8008 17.501H11.2008C10.9799 17.501 10.8008 17.3219 10.8008 17.101V13.4012C10.8008 13.2907 10.7112 13.2012 10.6008 13.2012H6.9C6.67909 13.2012 6.5 13.0221 6.5 12.8012V11.2012C6.5 10.9803 6.67909 10.8012 6.9 10.8012H10.6008C10.7112 10.8012 10.8008 10.7116 10.8008 10.6012V6.90098C10.8008 6.68006 10.9799 6.50098 11.2008 6.50098H12.8008C13.0217 6.50098 13.2008 6.68006 13.2008 6.90098V10.6012Z" fill="currentColor" />
    </svg>
));
