import { Story } from '@storybook/react/types-6-0';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { ORIENTATIONS } from '@core/enums';
import { PALETTE_STANDARD_KEYS } from '@core/styles';
import { Divider, DividerProps } from '..';
import { SandboxStory } from './sandbox';

const defaultArgs: Partial<DividerProps> = {
    orientation: ORIENTATIONS.horizontal,
    indent: false,
    color: PALETTE_STANDARD_KEYS.main,
};

export default {
    title: STORY_PATHS.core.components.system('Divider'),
    component: Divider,
    argTypes: {
        color: {
            control: { type: 'text' },
        },
        component: {
            table: {
                defaultValue: {
                    summary: '"div"',
                },
            },
            type: {
                required: false,
                default: 'div',
            },
            control: false,
        },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

const variantsArray: Array<Story<DividerProps>> = [
    SandboxStory,
];

variantsArray.forEach((
    variant,
    index,
) => { variantsArray[index].args = defaultArgs; });

export {
    SandboxStory,
};
