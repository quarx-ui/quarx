import { setRef } from '@core/utils';

export const mergeRefs = (...refs: any[]) => {
    const filteredRefs = refs.filter(Boolean);
    if (!filteredRefs.length) {
        return null;
    }
    if (filteredRefs.length === 1) {
        return filteredRefs[0];
    }
    return (inst: any[]) => {
        filteredRefs.forEach((ref) => {
            setRef(ref, inst);
        });
    };
};
