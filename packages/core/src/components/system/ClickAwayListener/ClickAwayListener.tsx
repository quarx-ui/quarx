import { cloneElement, DOMAttributes, FC, Ref, RefAttributes, SyntheticEvent, useEffect, useRef } from 'react';
import {
    clickedRootScrollbar,
    makeEventFromSyntheticEvent,
    ownerDocument,
    useEventCallback,
    useForkRef,
} from '@core/utils';
import {
    ClickAwayListenerProps,
    ClickAwayListenerEvents,
} from './types';

const hasIntersection = (composed: unknown[], ignore: unknown[]): boolean => {
    const composedSet = new Set(composed);
    return Boolean(ignore.find((el) => composedSet.has(el)));
};

const getDocumentListenerEffect = (
    node: Element | null,
    events: {
        syntheticEvent: ClickAwayListenerEvents | 'onTouchMove';
        listener: EventListener;
    }[],
): () => void => {
    const doc = ownerDocument(node);

    events.forEach(({ syntheticEvent, listener }) => {
        const event = makeEventFromSyntheticEvent(syntheticEvent);
        doc.addEventListener(event, listener);
    });

    return () => {
        events.forEach(({ syntheticEvent, listener }) => {
            const event = makeEventFromSyntheticEvent(syntheticEvent);
            doc.removeEventListener(event, listener);
        });
    };
};

export const ClickAwayListener: FC<ClickAwayListenerProps> = ({
    disableReactTree = false,
    mouseEvent: syntheticMouseEvent = 'onClick',
    touchEvent: syntheticTouchEvent = 'onTouchEnd',
    onClickAway,
    ignore,
    children,
}) => {
    const nodeRef = useRef<Element>(null);
    const movedRef = useRef(false);
    const activatedRef = useRef(false);
    const syntheticEventRef = useRef(false);

    useEffect(() => {
        setTimeout(() => { activatedRef.current = true; });
        return () => { activatedRef.current = false; };
    }, []);

    const handleRef = useForkRef(
        (children as typeof children & { ref: Ref<Element> }).ref,
        nodeRef,
    );

    const handleClickAway = useEventCallback((event: MouseEvent | TouchEvent) => {
        const insideReactTree = syntheticEventRef.current;
        syntheticEventRef.current = false;

        const doc = ownerDocument(nodeRef.current);

        const cancelHandling = !activatedRef.current
            || !nodeRef.current
            || clickedRootScrollbar(event, doc);

        if (cancelHandling) { return; }

        if (movedRef.current) {
            movedRef.current = false;
            return;
        }

        const composed = event.composedPath();
        const insideDOM = composed.includes(nodeRef.current);

        const ignoreList = Array.isArray(ignore)
            ? ignore
            : [ignore];
        const ignoredClick = hasIntersection(composed, ignoreList.filter(Boolean));

        if (!ignoredClick && !insideDOM && (disableReactTree || !insideReactTree)) {
            onClickAway(event);
        }
    }) as EventListener;

    const createHandleSynthetic = (handlerName: ClickAwayListenerEvents) => (
        (event: SyntheticEvent) => {
            syntheticEventRef.current = true;

            const childrenPropsHandler = children.props[handlerName];
            if (childrenPropsHandler) {
                childrenPropsHandler(event);
            }
        }
    );

    const childrenProps: RefAttributes<Element>
    & Pick<DOMAttributes<Element>, ClickAwayListenerEvents> = {
        ref: handleRef,
    };

    const touchEventDisabled = syntheticTouchEvent === false;
    if (!syntheticTouchEvent && !touchEventDisabled) {
        Object.assign(childrenProps, {
            [syntheticTouchEvent]: createHandleSynthetic(syntheticTouchEvent),
        });
    }

    useEffect(() => {
        if (!syntheticTouchEvent) { return undefined; }

        return getDocumentListenerEffect(
            nodeRef.current,
            [
                {
                    syntheticEvent: syntheticTouchEvent,
                    listener: handleClickAway,
                },
                {
                    syntheticEvent: 'onTouchMove',
                    listener: () => { movedRef.current = true; },
                },
            ],
        );
    }, [handleClickAway, syntheticTouchEvent]);

    const mouseEventDisabled = syntheticMouseEvent === false;
    if (!syntheticMouseEvent && !mouseEventDisabled) {
        Object.assign(childrenProps, {
            [syntheticMouseEvent]: createHandleSynthetic(syntheticMouseEvent),
        });
    }

    useEffect(() => {
        if (!syntheticMouseEvent) { return undefined; }

        return getDocumentListenerEffect(
            nodeRef.current,
            [{
                syntheticEvent: syntheticMouseEvent,
                listener: handleClickAway,
            }],
        );
    }, [handleClickAway, syntheticMouseEvent]);

    return cloneElement(children, childrenProps);
};
