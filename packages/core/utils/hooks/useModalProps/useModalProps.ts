import { useCallback, useRef, useState } from 'react';
import { TransitionProps as ReactTransitionProps } from 'react-transition-group/Transition';
import { BackdropProps as BackdropPropsType, ModalProps } from '@core/src';
import { ownerDocument, useEnhancedEffect } from '@core/utils';
import { DefaultStyles, getModals, getNextModal, getScrollbarSize, restoreStyles } from './helpers';

export const useModalProps = <Props extends ModalProps>(props: Props): Props => {
    const {
        open,
        closeByEscape = true,
        closeByClickAway = true,
        onClick,
        onClose,
        TransitionProps,
        BackdropProps,
        tabIndex,
        onKeyDown,
        disableScrollLock,
    } = props;

    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const defaultStyles = useRef<DefaultStyles>({});
    const modalRef = useRef<HTMLElement | null>(null);
    const hasNextModal = useRef(false);

    const handleMount = useCallback(() => {
        if (!modalRef.current || disableScrollLock) {
            return;
        }

        hasNextModal.current = getModals(modalRef.current).length > 1;

        const container = ownerDocument(modalRef.current);
        const { paddingRight } = container.body.style;

        defaultStyles.current = {
            'padding-right': paddingRight,
            overflow: container.body.style.overflow,
        };

        if (!hasNextModal.current) {
            const scrollbarSize = getScrollbarSize(container);

            if (scrollbarSize) {
                container.body.style.paddingRight = `${scrollbarSize}px`;
            }
            container.body.style.overflow = 'hidden';
        } else {
            modalRef.current.style.paddingRight = paddingRight;
            modalRef.current.style.width = `${modalRef.current?.clientWidth + parseInt(paddingRight, 10)}px`;
        }
    }, [disableScrollLock]);

    const handleUnmount = useCallback(() => {
        if (!modalRef.current || disableScrollLock) {
            return;
        }

        if (!hasNextModal.current) {
            const { body } = ownerDocument(modalRef.current);

            restoreStyles(body, defaultStyles.current);
        }
    }, [disableScrollLock]);

    useEnhancedEffect(() => {
        if (open) {
            handleMount();
        }
    }, [handleMount, open]);

    const onEnter: ReactTransitionProps['onEnter'] = useCallback((node, isAppearing) => {
        modalRef.current = node;

        TransitionProps?.onEnter?.(node, isAppearing);
    }, [TransitionProps]);

    const onEntering: ReactTransitionProps['onEntering'] = useCallback((node, isAppearing) => {
        node?.focus();

        TransitionProps?.onEntering?.(node, isAppearing);
    }, [TransitionProps]);

    const onEntered: ReactTransitionProps['onEntered'] = useCallback((node, isAppearing) => {
        setCurrentTabIndex(getModals(node).length - 1);
        node?.focus();

        TransitionProps?.onEntered?.(node, isAppearing);
    }, [TransitionProps]);

    const onExited: ReactTransitionProps['onExited'] = useCallback((node) => {
        if (hasNextModal.current) {
            const nextModal = getNextModal(node, currentTabIndex);
            nextModal?.focus();
        }

        TransitionProps?.onExited?.(node);
        handleUnmount();
    }, [TransitionProps, currentTabIndex, handleUnmount]);

    const handleClick: ModalProps['onClick'] = useCallback((event) => {
        onClick?.(event);

        if (event.target !== event.currentTarget) {
            return;
        }

        if (closeByClickAway) {
            onClose?.(event, 'clickAway');
        }
    }, [closeByClickAway, onClick, onClose]);

    const handleBackdropClick: BackdropPropsType['onClick'] = useCallback((event) => {
        if (event.target !== event.currentTarget) {
            return;
        }

        BackdropProps?.onClick?.(event);

        if (closeByClickAway) {
            onClose?.(event, 'clickAway');
        }
    }, [BackdropProps, closeByClickAway, onClose]);

    const handleKeyDown: ModalProps['onKeyDown'] = useCallback((event) => {
        onKeyDown?.(event);

        if (event.key !== 'Escape') {
            return;
        }

        if (closeByEscape) {
            event.stopPropagation();

            onClose?.(event, 'escape');
        }
    }, [closeByEscape, onClose, onKeyDown]);

    return {
        ...props,
        onClick: handleClick,
        tabIndex: tabIndex ?? currentTabIndex,
        onKeyDown: handleKeyDown,
        BackdropProps: {
            ...BackdropProps,
            onClick: handleBackdropClick,
        },
        TransitionProps: {
            ...TransitionProps,
            onEnter,
            onExited,
            onEntering,
            onEntered,
        },
    };
};
