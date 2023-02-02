import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { PALETTE_COLORS } from '@core/styles';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Switcher, SWITCHER_POSITION, SwitcherProps } from '..';

const defaultArgs: Partial<SwitcherProps> = {
    size: 'medium',
    color: PALETTE_COLORS.brand,
    disabled: false,
    position: SWITCHER_POSITION.left,
};

export default {
    title: STORY_PATHS.core.components.main('Switcher'),
    component: Switcher,
    parameters: {
        actions: { disable: true },
        design: { disable: true },
    },
    args: defaultArgs,
    argTypes: {
        size: { description: 'Размер компонента' },
        color: { description: 'Изменяет цвет компонента' },
        disabled: { description: 'Изменяет состояние компонента на активное/неактивное' },
        position: {
            description: 'Позиция переключателя относительно текста',
        },
        onToggle: { description: 'Событие, возникающее при клике на компонент' },
        ...BASE_ARG_TYPES,
    },
};

export { SandboxStory } from './sandbox';
export { ColorsStory } from './colors';
export { DisabledParamStory } from './disabled';
export { SizesStory } from './sizes';
