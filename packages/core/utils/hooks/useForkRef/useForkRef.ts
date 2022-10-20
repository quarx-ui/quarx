import { Ref, useMemo } from 'react';
import { setRef } from '@core/utils/setRef';

export const useForkRef = <InstanceA, InstanceB>(
    refA: Ref<InstanceA> | null | undefined,
    refB: Ref<InstanceB> | null | undefined,
): Ref<InstanceA & InstanceB> | null => useMemo(() => {
    if (refA === null && refB === null) {
        return null;
    }

    return (refValue) => {
        setRef(refA, refValue);
        setRef(refB, refValue);
    };
}, [refA, refB]);
