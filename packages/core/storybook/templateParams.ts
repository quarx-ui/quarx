import { ArgTypes } from '@storybook/react';
import { Args } from '@storybook/api';

export const hiddenDocsTab = {
    previewTabs: {
        'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'canvas',
};

export const designParams = (url: string) => ({
    type: 'figma',
    url,
});

export const excludeProp = <T extends Record<string, any>>(props: Array<keyof T>, defaultArgType?: ArgTypes): ArgTypes => {
    const argTypes = {
        ...defaultArgType,
    };
    props.forEach((property) => {
        argTypes[String(property)] = { table: { disable: true } };
    });
    return argTypes;
};

export const defineCategory = <T = Args>(category: string, defaultArgType: Partial<ArgTypes<T>>): Partial<ArgTypes<T>> => {
    const argTypes: Partial<ArgTypes<T>> = {};

    Object.keys(defaultArgType).forEach((property) => {
        argTypes[property as keyof T] = {
            ...defaultArgType[property as keyof T],
            table: {
                ...defaultArgType[property as keyof T]?.table,
                category,
            },
        };
    });
    return argTypes;
};
