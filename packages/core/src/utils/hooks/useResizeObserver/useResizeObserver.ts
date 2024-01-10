import { RefObject, useCallback, useEffect, useState } from 'react';

export const useResizeObserver = (
    ref: RefObject<HTMLElement>,
) => {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    const handleResize: ResizeObserverCallback = useCallback((entries) => {
        if (!Array.isArray(entries)) {
            return;
        }

        const entry = entries[0];
        setWidth(entry.target.clientWidth);
        setHeight(entry.target.clientHeight);
    }, []);

    useEffect(() => {
        if (!ref.current) { return undefined; }

        const observer = new ResizeObserver(handleResize);
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleResize, ref.current]);

    return { width, height };
};
