import { ArgTypes } from '@storybook/react';

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

export const excludeProp = (props: Array<string>, defaultArgType?: ArgTypes): ArgTypes => {
    const argTypes = {
        ...defaultArgType,
    };
    props.forEach((property) => {
        argTypes[property] = { table: { disable: true } };
    });
    return argTypes;
};

export const defineCategory = (category: string, defaultArgType: ArgTypes): ArgTypes => {
    const argTypes: ArgTypes = {};

    Object.keys(defaultArgType).forEach((property) => {
        argTypes[property] = {
            ...defaultArgType[property],
            table: {
                ...defaultArgType[property].table,
                category,
            },
        };
    });
    return argTypes;
};
