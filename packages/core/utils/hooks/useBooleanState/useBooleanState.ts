import { Dispatch, SetStateAction, useState } from 'react';

export type UseBooleanStateProps = boolean;

export interface UseBooleanState {
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>,
    setTrue(): void,
    setFalse(): void,
    setOppositeState(): void,
}

export const useBooleanState = (
    initialValue: UseBooleanStateProps,
): UseBooleanState => {
    const [state, setState] = useState<boolean>(initialValue);

    const setTrue = () => setState(true);
    const setFalse = () => setState(false);
    const setOppositeState = () => setState((prev) => !prev);

    return { state, setState, setTrue, setFalse, setOppositeState };
};
