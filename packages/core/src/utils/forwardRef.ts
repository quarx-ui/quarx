import { forwardRef as fR, Ref, RefAttributes, ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
interface RenderComponent<T, P = {}> {
    (props: P, ref: Ref<T>): (ReactElement | null);
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type ForwardRef = <T, P = {}>(
    render: RenderComponent<T, P>
) => RenderComponent<T, P & RefAttributes<T>>

export const forwardRef: ForwardRef = fR as ForwardRef;
