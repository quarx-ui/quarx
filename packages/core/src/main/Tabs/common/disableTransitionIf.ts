export const disableTransitionIf = (flag = false) => (
    flag && { transition: 'none' }
);
