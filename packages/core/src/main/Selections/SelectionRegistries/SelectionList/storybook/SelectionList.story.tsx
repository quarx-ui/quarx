import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { PALETTE_COLORS, QX_SIZE, SelectionListProps } from '@core';
import { Meta } from '@storybook/react';
import {
    SelectionList,
    SELECTION_LIST_TYPE,
    DEFAULT_SELECTION_LIST_CONTROLLERS,
} from '../index';
import { list } from './utils';

const defaultArgs = {
    nodes: list,
    controller: DEFAULT_SELECTION_LIST_CONTROLLERS.radiobutton,
    type: SELECTION_LIST_TYPE.text,
    color: PALETTE_COLORS.brand,
    size: QX_SIZE.medium,
};

export default {
    title: STORY_PATHS.core.components.main('Selections/SelectionList'),
    component: SelectionList,
    parameters: {
        layout: 'fullscreen',
    },
    args: defaultArgs,
    argTypes: {
        controller: { description: 'Контроллер, ответственный за переключение состояния каждого узла' },
        nodes: { description: 'Список узлов' },
        onUpdate: { description: 'Функция, вызываемая при изменении состояния узлов' },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
} as Meta<SelectionListProps>;

export { SandboxStory } from './sandbox';
export { TypesStory } from './types';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
export { UtilsStory } from './utils/index';
