import path from 'path';

export const sandboxStory = (
    componentName: string,
) => `\
import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@core/storybook/utils';
import { ${componentName}, ${componentName}Props } from '@core';
import description from './description.md';

export const SandboxStory: Story<${componentName}Props> = ({ ...props }) => {
    return (
        <${componentName} {...props} />
    );
};

SandboxStory.storyName = 'Компонент';
SandboxStory.parameters = createStoryDescription(description);
`;

export const sizesStory = (componentName: string): string => `\
import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@core/storybook/utils';
import { ${componentName}, ${componentName}Size, ${componentName}Props } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import description from './description.md';

const SIZES: ${componentName}Size[] = [
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
];

export const SizesStory: Story<${componentName}Props> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: ${componentName},
    componentProps: props,
});

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
SizesStory.parameters = createStoryDescription(description);
`;

export const storybook = (
    componentName: string,
    componentType: string,
    parent: string,
): string => `\
import { Story } from '@storybook/react/types-6-0';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { ${componentName}, ${componentName}Props } from '..';

const defaultArgs: Partial<${componentName}Props> = {};

export default {
    title: STORY_PATHS.core.components.${componentType}('${path.join(parent, componentName)}'),
    component: ${componentName},
    parameters: { actions: { disable: true } },
    args: defaultArgs,
    argTypes: {
        size: { description: 'Размер компонента' },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
};

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
`;
