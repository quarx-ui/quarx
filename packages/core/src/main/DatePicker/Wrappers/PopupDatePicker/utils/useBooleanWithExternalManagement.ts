import { useBooleanState } from '@core';
import { useEffect } from 'react';

export const useBooleanWithExternalManagement = (externalState: boolean,
    setExternalState?: (newState: boolean) => void) => {
    const { state: innerState, setState: setInnerState, setTrue: setTrueInner, setFalse: setFalseInner,
        setOppositeState: setOppositeStateInner } = useBooleanState(externalState);

    const setState = (newState: boolean) => {
        setInnerState(newState);
        setExternalState?.(newState);
    };

    const setFalse = () => {
        setFalseInner();
        setExternalState?.(false);
    };

    const setTrue = () => {
        setTrueInner();
        setExternalState?.(true);
    };

    const setOppositeState = () => {
        setOppositeStateInner();
        setExternalState?.(!innerState); // todo протестировать!!
    };

    useEffect(() => {
        if (innerState !== externalState) {
            setInnerState(externalState);
        }
    });

    return { state: innerState, setTrue, setFalse, setOppositeState, setState };
};
