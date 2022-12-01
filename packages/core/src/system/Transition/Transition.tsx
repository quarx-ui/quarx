import React, { cloneElement, Ref, useCallback, useMemo, useRef } from 'react';
import { Transition as ReactTransition } from 'react-transition-group';
import { forwardRef, mergeRefs, useTheme } from '@core';
import { defaultMapStatusToStyles, defaultStyles } from './constants';
import { TransitionProps, Options, TransitionCallback } from './types';
import { getTransitionProps, mapIsObject, styleIsObject } from './helpers';

export const Transition = forwardRef(<Props extends object, T extends HTMLElement = HTMLDivElement>(
    props: TransitionProps<Props, T>,
    ref: Ref<T>,
) => {
    const theme = useTheme();

    const defaultTimeout = theme.transitions.duration.short;

    const defaultEasing = {
        enter: theme.transitions.easing.easeInOut,
        exit: theme.transitions.easing.easeInOut,
    };

    const {
        appear = true,
        children,
        in: inProp,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        styles: externalStyles = defaultStyles,
        addEndListener,
        timeoutProperty = 'opacity',
        easing = defaultEasing,
        timeout = defaultTimeout,
        mapStatusToStyles = defaultMapStatusToStyles,
        transitionComponent: TransitionComponent = ReactTransition,
        enter,
        childrenProps,
        ...restProps
    } = props ?? {};

    const styles = useMemo(() => (
        styleIsObject(externalStyles)
            ? externalStyles
            : externalStyles?.(theme) ?? {}
    ), [externalStyles, theme]);

    const resolvedMapStyles = mapIsObject(mapStatusToStyles)
        ? mapStatusToStyles
        : mapStatusToStyles?.(theme) ?? {};

    const nodeRef = useRef(null);
    const transition = useRef<string | undefined>();

    // Подготовка данных для передачи в callback
    const normalizeTransitionCallback = useCallback((callback?: TransitionCallback) => (
        nodeOrIsAppear?: HTMLElement | boolean,
        maybeIsAppearing = true,
    ) => {
        // При передаче nodeRef в Transition первый параметр node (HTMLElement), а второй - isAppear (boolean)
        // Если nodeRef не передается в качестве первого параметра приходит isAppear (boolean), а второй отсутствует
        const node = typeof nodeOrIsAppear === 'boolean'
            ? nodeRef.current
            : nodeOrIsAppear;

        const isAppear = typeof nodeOrIsAppear === 'boolean'
            ? nodeOrIsAppear
            : maybeIsAppearing;

        callback?.(node as HTMLElement, isAppear);
    }, []);

    const applyTransition = useCallback((mode: Options['mode']) => {
        // Создаем параметры для получения transition
        const transitionProps = getTransitionProps(
            { style: styles, timeout, easing },
            { mode },
        );

        transition.current = !enter && mode === 'enter'
            ? undefined
            : theme.transitions.create(timeoutProperty, transitionProps);
    }, [easing, enter, styles, theme.transitions, timeout, timeoutProperty]);

    const handleEnter = normalizeTransitionCallback((node, isAppearing) => {
        applyTransition('enter');
        onEnter?.(node, isAppearing);
    });

    const handleExit = normalizeTransitionCallback((node: HTMLElement) => {
        applyTransition('exit');
        onExit?.(node);
    });

    const handleEntering = normalizeTransitionCallback(onEntering);
    const handleEntered = normalizeTransitionCallback(onEntered);
    const handleExiting = normalizeTransitionCallback(onExiting);
    const handleExited = normalizeTransitionCallback(onExited);

    const handleAddEndListener = useCallback((nodeOrDone: HTMLElement | (() => void), done: () => void) => {
        const node = typeof nodeOrDone === 'function'
            ? nodeRef.current
            : nodeOrDone;

        const resolvedDone = typeof nodeOrDone === 'function'
            ? nodeOrDone
            : done;

        addEndListener?.(node as HTMLElement, resolvedDone);
    }, [addEndListener, nodeRef]);

    if (!children) {
        return null;
    }

    return (
        <TransitionComponent
            appear={appear}
            in={inProp}
            nodeRef={nodeRef}
            onEnter={handleEnter}
            onEntered={handleEntered}
            onEntering={handleEntering}
            onExit={handleExit}
            onExited={handleExited}
            onExiting={handleExiting}
            addEndListener={handleAddEndListener}
            timeout={timeout}
            enter={enter}
            {...restProps}
        >
            {(status) => cloneElement(
                children, {
                    ...childrenProps,
                    ...children.props,
                    ref: mergeRefs(children.ref, ref, nodeRef),
                    style: {
                        ...styles,
                        ...resolvedMapStyles[status],
                        transition: transition.current,
                        ...children.props.style,
                    },
                },
            )}
        </TransitionComponent>
    );
});
