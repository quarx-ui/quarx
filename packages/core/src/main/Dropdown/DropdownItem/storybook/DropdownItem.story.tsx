import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { PALETTE_COLORS, QX_SIZE } from '@core';
import { applyDefaultArgs } from '@core/storybook/applyDefaultArgs';
import { DropdownItem, DropdownItemProps } from '..';
import { DROPDOWN_ITEM_TYPE } from '../styles/constants';
import { SandboxStory } from './sandbox';
import { BooleansStory } from './booleans';
import { ColorsStory } from './colors';
import { CustomizationStory } from './customization';
import { SizesStory } from './sizes';
import { TextStory } from './text';
import { TypesStory } from './types';

const defaultArgs: DropdownItemProps = {
    type: DROPDOWN_ITEM_TYPE.default,
    state: false,
    title: 'SuperDelivery',
    description: 'Онлайн‑магазин с доставкой за 15 минут',
    size: QX_SIZE.medium,
    color: PALETTE_COLORS.brand,
    disableFocus: false,
};

export default {
    title: STORY_PATHS.core.components.main('Dropdown/DropdownItem'),
    component: DropdownItem,
    argTypes: {
        type: { description: 'Тип компонента' },
        leftItem: { description: 'Левая иконка' },
        activeIcon: { description: 'Иконка выбора для компонента типа \'default\'' },
        title: { description: 'Заголовок' },
        description: { description: 'Краткое описание' },
        children: { description: 'Пользовательский компонент вместо title и description' },
        size: { description: 'Размер компонента' },
        disableFocus: { description: 'Отключить фокусное наведение' },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

applyDefaultArgs([
    SandboxStory,
    BooleansStory,
    ColorsStory,
    CustomizationStory,
    SizesStory,
    TextStory,
    TypesStory,
], defaultArgs);

export {
    SandboxStory,
    BooleansStory,
    ColorsStory,
    CustomizationStory,
    SizesStory,
    TextStory,
    TypesStory,
};
