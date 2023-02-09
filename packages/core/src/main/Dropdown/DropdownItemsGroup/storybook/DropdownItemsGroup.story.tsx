import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { applyDefaultArgs } from '@core/storybook/applyDefaultArgs';
import { DropdownItemsGroup, DropdownItemsGroupProps } from '..';
import { SandboxStory } from './sandbox';
import { LimitersStory } from './limiter';
import { SizesStory } from './sizes';

const defaultArgs: Partial<DropdownItemsGroupProps> = {
    title: 'Выбор доставки',
};

export default {
    title: STORY_PATHS.core.components.main('Dropdown/DropdownItemsGroup'),
    component: DropdownItemsGroup,
    argTypes: {
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

applyDefaultArgs([
    SandboxStory,
    LimitersStory,
    SizesStory,
], defaultArgs);

export {
    SandboxStory,
    LimitersStory,
    SizesStory,
};
