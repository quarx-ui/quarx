export const clickedRootScrollbar = (
    event: MouseEvent | TouchEvent,
    doc: Document,
): boolean => {
    const hasClientXProp = 'clientX' in event;
    const hasClientYProp = 'clientY' in event;
    if (!hasClientXProp || !hasClientYProp) { return false; }

    return (
        doc.documentElement.clientWidth < event.clientX
        || doc.documentElement.clientHeight < event.clientY
    );
};
