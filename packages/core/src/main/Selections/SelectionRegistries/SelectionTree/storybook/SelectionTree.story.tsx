import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { PALETTE_COLORS, QX_SIZE, SelectionTree } from '@core';
import { SELECTION_TREE_TYPE } from '../styles/constants';
import { DEFAULT_SELECTION_TREE_CONTROLLERS } from '../constants';
import { EXAMPLE_TREE } from './example';

const defaultArgs = {
    controller: DEFAULT_SELECTION_TREE_CONTROLLERS.checkbox,
    nodes: EXAMPLE_TREE,
    type: SELECTION_TREE_TYPE.text,
    color: PALETTE_COLORS.brand,
    size: QX_SIZE.medium,
    synchronizeChildrenVisibility: true,
};

export default {
    title: STORY_PATHS.core.components.main('Selections/SelectionTree'),
    component: SelectionTree,
    parameters: {
        layout: 'fullscreen',
        actions: { disable: true },
    },
    args: defaultArgs,
    argTypes: {
        controller: { description: 'Контроллер, ответственный за переключение состояния каждого узла' },
        nodes: { description: 'Список узлов' },
        onUpdate: { description: 'Функция, вызываемая при изменении состояния узлов' },
        synchronizeChildrenVisibility: { description: 'При свертывании узла дочерние элементы будут свертаны' },
        color: { description: 'Цветовая схема компонента' },
        size: { description: 'Размер компонента' },
        type: { description: 'Тип группировки компонента' },

        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
};

export { SandboxStory } from './sandbox';
export { TypesStory } from './types';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
export { UtilsStory } from './utils';