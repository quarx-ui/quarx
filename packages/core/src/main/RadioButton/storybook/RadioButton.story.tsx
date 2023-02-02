import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { PALETTE_COLORS } from '@core/styles';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { RadioButton, RadioButtonProps } from '..';

const defaultArgs: Partial<RadioButtonProps> = {
    size: 'medium',
    disableFocus: false,
    disabled: false,
    children: 'Доставка на дом',
    color: PALETTE_COLORS.brand,
};

export default {
    title: STORY_PATHS.core.components.main('RadioButton'),
    component: RadioButton,
    parameters: {
        actions: { disable: true },
        design: { disable: true },
    },
    args: defaultArgs,
    argTypes: {
        color: {
            description: 'Изменяет цвет компонента',
        },
        size: {
            description: 'Размер компонента',
        },
        disableFocus: {
            description: 'Отключение возможность фокуса',
        },
        disabled: {
            description: 'Изменяет состояние компонента на активное/неактивное',
        },
        ...BASE_ARG_TYPES,
    },
};

export { SandboxStory } from './sandbox';
export { BooleanParamsStory } from './booleanParams';
export { OuterCheckedStateStory } from './outerCheckedState';
export { SizesStory } from './sizes';
