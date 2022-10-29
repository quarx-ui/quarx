export const makeEventFromSyntheticEvent = (event: string): keyof DocumentEventMap => (
    event.substring(2).toLowerCase() as keyof DocumentEventMap
);
