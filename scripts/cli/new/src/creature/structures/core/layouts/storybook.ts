import path from 'path';

export const sandboxStory = (
    componentName: string,
) => `\
import { StoryFn } from '@storybook/react-vite';
import { ${componentName}, ${componentName}Props } from '@core';
import description from './description.md';

export const SandboxStory: StoryFn<${componentName}Props> = ({ ...props }) => {
    return (
        <${componentName} {...props} />
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
    description,
})
`;

export const sizesStory = (componentName: string): string => `\
import { StoryFn } from '@storybook/react-vite';
import { ${componentName}, ${componentName}Size, ${componentName}Props } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import description from './description.md';

const SIZES: ${componentName}Size[] = [
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
];

export const SizesStory: StoryFn<${componentName}Props> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: ${componentName},
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['size'],
})
`;

export const storybook = (
    componentName: string,
    componentType: string,
    parent: string,
): string => `\
import { StoryFn } from '@storybook/react-vite';
import { Meta } from '@storybook/react-vite';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { ${componentName}, ${componentName}Props } from '..';

const defaultArgs: Partial<${componentName}Props> = {};

export default {
    title: STORY_PATHS.core.components.${componentType}('${path.join(parent, componentName)}'),
    component: ${componentName},
    args: defaultArgs,
    argTypes: {
        size: { description: 'Размер компонента' },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
} as Meta<${componentName}Props>;

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
`;
