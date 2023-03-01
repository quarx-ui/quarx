import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Stack, StackProps } from '..';
import { DirectionAndOrder } from './DirectionAndOrder';
import { WithDivider } from './WithDivider';
import { CustomComponent } from './CustomComponent';
import { defaultArgs } from './defaultArgs';

export default {
    title: STORY_PATHS.core.components.system('Stack'),
    component: Stack,
    argTypes: {
        component: {
            control: false,
            type: {
                required: false,
            },
        },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
        children: {
            control: false,
        },
        ...defineCategory('Выравнивание', {
            justifyContent: {
                control: { type: 'select' },
            },
            alignItems: {
                control: { type: 'select' },
            },
        }),
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<StackProps> = ({ ...props }) => (
    <Stack {...props} />
);

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

const variantsArray = [
    DirectionAndOrder,
    WithDivider,
    CustomComponent,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});

export {
    DirectionAndOrder,
    WithDivider,
    CustomComponent,
};
