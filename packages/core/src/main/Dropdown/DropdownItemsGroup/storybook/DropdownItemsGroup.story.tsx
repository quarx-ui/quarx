import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { Div } from '@storybook/components';
import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle, Title } from '@storybook/addon-docs';
import description from './description.md';
import { DropdownItemsGroup, DropdownItemsGroupProps } from '..';

export default {
    title: STORY_PATHS.core.components.main('Dropdown/DropdownItemsGroup'),
    component: DropdownItemsGroup,
    parameters: {
        actions: { disable: true },
        docs: {
            page: () => (
                <Div>
                    <Title />
                    <Description markdown={description} />
                    <Primary />
                    <Subtitle>Описание пропсов</Subtitle>
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories title="Примеры использования" />
                </Div>
            ),
        },
    },
    argTypes: {
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    args: {
        title: 'Выбор доставки',
    } as Partial<DropdownItemsGroupProps>,
};

export { SandboxStory } from './sandbox';
export { LimitersStory } from './limiter';
export { SizesStory } from './sizes';
