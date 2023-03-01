import path from 'path';

export const sandboxStory = (
    componentName: string,
) => `\
import { Story } from '@storybook/react/types-6-0';
import { ${componentName}, ${componentName}Props } from '@core';
import description from './description.md';

const Template: Story<${componentName}Props> = ({ ...props }) => {
    return (
        <${componentName} {...props} />
    );
};

export const SandboxStory: Story<${componentName}Props> = Template.bind({});
SandboxStory.storyName = 'Компонент';
SandboxStory.parameters = {
    docs: {
        description: { story: description },
    },
};
`;

export const sizesStory = (componentName: string): string => `\
import { Story } from '@storybook/react/types-6-0';
import { ${componentName}, ${componentName}Size } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import description from './description.md';

const SIZES: ${componentName}Size[] = [
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
];

export const SizesStory: Story = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: ${componentName},
    componentProps: props,
});

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
SizesStory.parameters = {
    docs: {
        description: { story: description },
    },
};
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
import { SandboxStory } from './sandbox';
import { SizesStory } from './sizes';

const defaultArgs: Partial<${componentName}Props> = {};

export default {
    title: STORY_PATHS.core.components.${componentType}('${path.join(parent, componentName)}'),
    component: ${componentName},
    argTypes: {
        size: { description: 'Размер компонента' },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

const variantsArray: Array<Story<${componentName}Props>> = [
    SandboxStory,
    SizesStory,
];

variantsArray.forEach((
    variant,
    index,
) => { variantsArray[index].args = defaultArgs; });

export {
    SandboxStory,
    SizesStory,
};
`;
