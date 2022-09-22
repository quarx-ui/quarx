import { useCallback, useEffect } from 'react';
import { ownerDocument } from '../../ownerDocument';
import { isArrowKey, UseKeyboardNavigationProps } from './types';
import { arrowKeyToFocusHandler, moveFocus, orientationToKeys } from './helpers';

/**
 * Хук для переключения фокуса на элементах списка с помощью стрелок клавиатуры
 */
export const useKeyboardNavigation = ({
    listRef,
    orientation,
}: UseKeyboardNavigationProps) => {
    const onKeyPress = useCallback((listNode: HTMLElement) => (event: KeyboardEvent) => {
        const { key } = event;

        if (!isArrowKey(key)) { return; }

        if (orientation && !orientationToKeys[orientation].includes(key)
        ) { return; }

        event.preventDefault();

        const focused = ownerDocument(listNode).activeElement;

        const traversalFunction = arrowKeyToFocusHandler[key];

        moveFocus(listNode, focused, traversalFunction);
    }, [orientation]);

    useEffect(() => {
        const rootNode = listRef.current;
        if (!rootNode) { return undefined; }

        rootNode.addEventListener('keydown', onKeyPress(rootNode));

        return () => {
            rootNode.removeEventListener('keydown', onKeyPress(rootNode));
        };
    }, [listRef, onKeyPress]);
};
