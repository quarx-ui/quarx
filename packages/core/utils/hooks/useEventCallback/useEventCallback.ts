import { useCallback, useRef } from 'react';
import { useEnhancedEffect } from '@core/utils';

export const useEventCallback = <Args extends unknown[], Return>(
    fn: (...args: Args) => Return,
): (...args: Args) => Return => {
    const ref = useRef(fn);

    useEnhancedEffect(() => {
        ref.current = fn;
    });

    return useCallback(
        (...args) => ref.current(...args),
        [],
    );
};
