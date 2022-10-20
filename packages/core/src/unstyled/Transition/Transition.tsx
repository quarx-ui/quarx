import React, { cloneElement, Ref, useCallback, useMemo, useRef } from 'react';
import { Transition as ReactTransition } from 'react-transition-group';
import { forwardRef, mergeRefs, useTheme } from '@core';
import { defaultMapStatusToStyles, defaultStyles } from './constants';
import { TransitionProps, Options, TransitionCallback } from './types';
import { getTransitionProps, mapIsObject, styleIsObject } from './helpers';

export const Transition = forwardRef(<T extends HTMLElement = HTMLDivElement>(
    props: TransitionProps<T>,
    ref: Ref<T>,
) => {
    const theme = useTheme();

    const defaultTimeout = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const {
        appear = true,
        children,
        easing,
        in: inProp,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        styles: externalStyles = defaultStyles,
        addEndListener,
        timeout = defaultTimeout,
        mapStatusToStyles = defaultMapStatusToStyles,
        transitionComponent: TransitionComponent = ReactTransition,
        ...restProps
    } = props;

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

        transition.current = theme.transitions.create('opacity', transitionProps);
    }, [easing, styles, theme.transitions, timeout]);

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
            {...restProps}
        >
            {(status) => cloneElement(
                children, {
                    style: {
                        ...styles,
                        ...resolvedMapStyles[status],
                        transition: transition.current,
                        ...children.props.style,
                    },
                    ...children.props,
                    ref: mergeRefs(children.ref, ref, nodeRef),
                },
            )}
        </TransitionComponent>
    );
});
