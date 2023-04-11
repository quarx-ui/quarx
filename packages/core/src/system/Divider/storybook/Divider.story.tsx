import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { ORIENTATIONS } from '@core/enums';
import { PALETTE_STANDARD_KEYS } from '@core/styles';
import { Divider, DividerProps } from '..';

const defaultArgs: Partial<DividerProps> = {
    orientation: ORIENTATIONS.horizontal,
    indent: false,
    color: PALETTE_STANDARD_KEYS.main,
};

export default {
    title: STORY_PATHS.core.components.system('Divider'),
    component: Divider,
    parameters: { actions: { disable: true } },
    args: defaultArgs,
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
};

export { SandboxStory } from './sandbox';
