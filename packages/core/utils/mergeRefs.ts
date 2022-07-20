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
            if (typeof ref === 'function') {
                ref(inst);
            } else if (ref) {
                // eslint-disable-next-line no-param-reassign
                ref.current = inst;
            }
        });
    };
};
