import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { PALETTE_COLORS, QX_SIZE } from '@core';
import { DropdownItem, DropdownItemProps } from '..';
import { DROPDOWN_ITEM_TYPE } from '../styles/constants';

export default {
    title: STORY_PATHS.core.components.main('Dropdown/DropdownItem'),
    component: DropdownItem,
    parameters: {
        actions: { disable: true },
    },
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
    args: {
        type: DROPDOWN_ITEM_TYPE.default,
        state: false,
        title: 'SuperDelivery',
        description: 'Онлайн‑магазин с доставкой за 15 минут',
        size: QX_SIZE.medium,
        color: PALETTE_COLORS.brand,
        disableFocus: false,
    } as DropdownItemProps,
};

export { SandboxStory } from './sandbox';
export { BooleansStory } from './booleans';
export { ColorsStory } from './colors';
export { CustomizationStory } from './customization';
export { SizesStory } from './sizes';
export { TextStory } from './text';
export { EllipsisStory } from './ellipsis';
export { TypesStory } from './types';
