import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { ORIENTATIONS } from '@core/enums';
import { PALETTE_STANDARD_KEYS } from '@core/styles';
import { Meta } from '@storybook/react-vite';
import { Divider, DividerProps } from '..';

const defaultArgs: Partial<DividerProps> = {
    orientation: ORIENTATIONS.horizontal,
    indent: false,
    color: PALETTE_STANDARD_KEYS.main,
};

export default {
    title: 'core/components/system/Divider',
    tags: ['autodocs'],
    component: Divider,
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
                name: 'other',
                value: 'div',
                default: 'div',
            },
            control: false,
        },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
} as Meta<DividerProps>;

export { SandboxStory } from './sandbox';
