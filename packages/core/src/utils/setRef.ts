import { MutableRefObject } from 'react';

export type RefFunction<T> = (instance: T | null) => void
export type RefType<T> = MutableRefObject<T | null> | RefFunction<T> | null | undefined

function refIsFunction<T>(ref: RefType<T>): ref is RefFunction<T> {
    return typeof ref === 'function';
}

export const setRef = <T>(
    ref: RefType<T>,
    value: T | null,
): void => {
    if (refIsFunction(ref)) {
        ref(value);
    } else if (ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = value;
    }
};
