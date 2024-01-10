import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { PALETTE_COLORS } from '@core/styles';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
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
} as Meta<SwitcherProps>;

export { SandboxStory } from './sandbox';
export { ColorsStory } from './colors';
export { DisabledParamStory } from './disabled';
export { SizesStory } from './sizes';
