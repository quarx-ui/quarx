import { useEffect, useRef } from 'react';

export const useRequestAnimationFrame = (callback: FrameRequestCallback) => {
    const requestId = useRef<number | null>(null);

    useEffect(() => {
        if (requestId.current) {
            return undefined;
        }

        requestId.current = window.requestAnimationFrame(callback);

        return () => {
            if (requestId.current) {
                window.cancelAnimationFrame(requestId.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return requestId.current;
};
