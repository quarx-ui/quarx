import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { DropdownItemsGroup, DropdownItemsGroupProps } from '..';

export default {
    title: 'core/components/main/Dropdown/DropdownItemsGroup',
    tags: ['autodocs'],
    component: DropdownItemsGroup,
    parameters: {
        actions: { disable: true },
    },
    argTypes: {
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    args: {
        title: 'Выбор доставки',
    } as Partial<DropdownItemsGroupProps>,
};

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
export { LimitersStory } from './limiter';
export { DividersStory } from './dividers';
