export const focusable = (condition: boolean): number => {
    const reachable = 0;
    const notReachable = -1;
    return condition
        ? reachable
        : notReachable;
};
