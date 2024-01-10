import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { PALETTE_COLORS } from '@core/styles';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { Checkbox, CheckboxProps } from '..';

const defaultArgs: Partial<CheckboxProps> = {
    color: PALETTE_COLORS.brand,
    disabled: false,
    indeterminate: false,
    borderRadius: 'medium',
    size: 'medium',
};

export default {
    title: STORY_PATHS.core.components.main('Checkbox'),
    component: Checkbox,
    args: defaultArgs,
    argTypes: {
        borderRadius: {
            description: 'Скругление',
        },
        color: {
            description: 'Изменяет цвет компонента',
        },
        disabled: {
            description: 'Изменяет состояние компонента на активное/неактивное',
        },
        size: {
            description: 'Размер компонента',
        },
        children: {
            description: 'Дочерний текстовый элемент',
        },
        ...BASE_ARG_TYPES,
    },
} as Meta<CheckboxProps>;

export { SandboxStory } from './sandbox';
export { BorderRadiusStory } from './borderRadius';
export { BooleanParamsStory } from './booleanParams';
export { ColorsParamsStory } from './colors';
export { SizesStory } from './sizes';
