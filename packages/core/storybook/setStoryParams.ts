/* eslint-disable no-param-reassign */
import { ArgTypes, StoryFn } from '@storybook/react-vite';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';

interface SetStoryParamsOptions<T extends Record<string, any> = Record<string, any>> {
    title?: string;
    description?: string;
    argTypes?: ArgTypes<T>;
    args?: Partial<T>;
    excludeArgs?: Array<keyof T | string>;
    code?: string;
}

export const setStoryParams = <T extends Record<string, any> = Record<string, any>>(
    story: StoryFn<T>,
    options: SetStoryParamsOptions<T> = {},
) => {
    const {
        title,
        description,
        argTypes = {},
        excludeArgs = [],
        args = {},
        code,
    } = options;

    if (title) {
        story.storyName = title;
    }

    if (description || code) {
        story.parameters = {
            docs: {
                ...description
                    ? {
                        description: {
                            story: description,
                        },
                    }
                    : {},
                ...code
                    ? {
                        source: {
                            code,
                        },
                    }
                    : {},
            },
        };
    }
    story.argTypes = {
        ...argTypes,
        ...excludeProp<T>(excludeArgs),
    };
    story.args = args;
};
