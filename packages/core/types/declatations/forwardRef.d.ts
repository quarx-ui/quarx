import { Ref, ReactElement, RefAttributes } from 'react';

declare module 'react' {
    function forwardRef<T, P = object>(
        render: (props: P, ref: Ref<T>) => ReactElement | null
    ): (props: P & RefAttributes<T>) => ReactElement | null;
}
