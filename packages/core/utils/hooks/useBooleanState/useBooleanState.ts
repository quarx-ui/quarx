import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export type UseBooleanStateProps = boolean | undefined;

export interface UseBooleanStateActions {
    setState: Dispatch<SetStateAction<boolean>>;
    setTrue(): void;
    setFalse(): void;
    toggleState(): void;
}

export type UseBooleanState = [ boolean, UseBooleanStateActions ]

export const useBooleanState = (
    initialValue: UseBooleanStateProps = false,
): UseBooleanState => {
    const [state, setState] = useState<boolean>(initialValue);

    const setTrue = useCallback(() => setState(true), []);
    const setFalse = useCallback(() => setState(false), []);
    const toggleState = useCallback(() => setState((prev) => !prev), []);

    return [state, { setState, setTrue, setFalse, toggleState }];
};
