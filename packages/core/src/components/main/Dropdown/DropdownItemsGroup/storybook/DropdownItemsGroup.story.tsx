import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { DropdownItemsGroup, DropdownItemsGroupProps } from '..';

export default {
    title: STORY_PATHS.core.components.main('Dropdown/DropdownItemsGroup'),
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
