/* eslint-disable */

import React from 'react';
import { create } from 'jss';
import { createGenerateClassName } from './createGenerateClassName';
import { jssPreset } from './jssPreset';
import { StylesProviderProps } from './types';

// Default JSS instance.
const jss = create(jssPreset());

// Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.
const generateClassName = createGenerateClassName();

// Exported for test purposes
export const sheetsManager = new Map();

const defaultOptions = {
    disableGeneration: false,
    generateClassName,
    jss,
    sheetsCache: null,
    sheetsManager,
    sheetsRegistry: null,
};

export const StylesContext = React.createContext(defaultOptions);

if (process.env.NODE_ENV !== 'production') {
    StylesContext.displayName = 'StylesContext';
}

let injectFirstNode: HTMLHeadElement | Comment;

export function StylesProvider(props: Partial<StylesProviderProps>) {
    const {
        children, injectFirst = false, disableGeneration = false, ...localOptions
    } = props;

    const outerOptions = React.useContext(StylesContext);
    const context = { ...outerOptions, disableGeneration, ...localOptions };

    if (process.env.NODE_ENV !== 'production') {
        if (typeof window === 'undefined' && !context.sheetsManager) {
            console.error(
                'QuarX-UI: You need to use the ServerStyleSheets API when rendering on the server.',
            );
        }
    }

    if (process.env.NODE_ENV !== 'production') {
        // @ts-ignore
        if (context.jss.options.insertionPoint && injectFirst) {
            console.error(
                'QuarX-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.',
            );
        }
    }

    if (process.env.NODE_ENV !== 'production') {
        if (injectFirst && localOptions.jss) {
            console.error('QuarX-UI: You cannot use the jss and injectFirst props at the same time.');
        }
    }

    // @ts-ignore
    if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
        if (!injectFirstNode) {
            const { head } = document;
            injectFirstNode = document.createComment('mui-inject-first');
            head.insertBefore(injectFirstNode, head.firstChild);
        }

        context.jss = create({ plugins: jssPreset().plugins, insertionPoint: injectFirstNode });
    }

    // @ts-ignore
    return <StylesContext.Provider value={context}>{children}</StylesContext.Provider>;
}
