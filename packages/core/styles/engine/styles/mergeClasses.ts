import * as React from 'react';
import { getDisplayName } from '../utils';

export type Classes = Record<string, string>

export interface MergeClassesOption {
    baseClasses: Classes;
    newClasses?: Classes;
    Component?: React.ElementType;
}

export function mergeClasses(options: MergeClassesOption) {
    const { baseClasses, newClasses, Component } = options;

    if (!newClasses) {
        return baseClasses;
    }

    const nextClasses = { ...baseClasses };

    if (process.env.NODE_ENV !== 'production') {
        if (typeof newClasses === 'string') {
            console.error(
                [
                    `QuarX-UI: The value \`${newClasses}\` `
                    + `provided to the classes prop of ${getDisplayName(Component)} is incorrect.`,
                    'You might want to use the className prop instead.',
                ].join('\n'),
            );

            return baseClasses;
        }
    }

    Object.keys(newClasses).forEach((key) => {
        if (process.env.NODE_ENV !== 'production') {
            if (!baseClasses[key] && newClasses[key]) {
                console.error(
                    [
                        `QuarX-UI: The key \`${key}\` `
                        + `provided to the classes prop is not implemented in ${getDisplayName(Component)}.`,
                        `You can only override one of the following: ${Object.keys(baseClasses).join(',')}.`,
                    ].join('\n'),
                );
            }

            if (newClasses[key] && typeof newClasses[key] !== 'string') {
                console.error(
                    [
                        `QuarX-UI: The key \`${key}\` `
                        + `provided to the classes prop is not valid for ${getDisplayName(Component)}.`,
                        `You need to provide a non empty string instead of: ${newClasses[key]}.`,
                    ].join('\n'),
                );
            }
        }

        if (newClasses[key]) {
            nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
        }
    });

    return nextClasses;
}
