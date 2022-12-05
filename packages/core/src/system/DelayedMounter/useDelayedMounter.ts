import { DelayedMounterProps, useEnhancedEffect, useTheme } from '@core';
import { useRef, useState } from 'react';

type UseDelayedMounterProps = Pick<DelayedMounterProps,
| 'mounted'
| 'disableTimeout'
| 'timeout'
| 'onEnter'
| 'onExitStart'
| 'onExit'
>

export const useDelayedMounter = (props: UseDelayedMounterProps) => {
    const defaultTimeout = useTheme().transitions.duration.short;

    const {
        mounted: initialMounted = false,
        disableTimeout = false,
        timeout: externalTimeout = defaultTimeout,

        onEnter,
        onExit,
        onExitStart,
    } = props;

    const timeout = disableTimeout
        ? 0
        : externalTimeout;
    const [mounted, setMounted] = useState(initialMounted);
    const timoutId = useRef<ReturnType<typeof setTimeout>>();

    useEnhancedEffect(() => {
        if (initialMounted === mounted) { return; }

        if (initialMounted) {
            onEnter?.();
            setMounted(initialMounted);

            if (timoutId.current) {
                clearTimeout(timoutId.current);
            }
        } else {
            if (!disableTimeout) {
                onExitStart?.();
            }

            timoutId.current = setTimeout(() => {
                setMounted(false);
                onExit?.();
            }, timeout);
        }
    }, [initialMounted, timeout, disableTimeout]);

    return { mounted };
};
