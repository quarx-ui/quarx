import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { defineCategory } from '@core/storybook/templateParams';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { DEMONSTRATION_ALERT } from '@core/storybook/constants';
import { Button, ButtonProps } from '..';
import { PaperClipIcon, ChevronDownIcon } from './assets';

const defaultArgs: ButtonProps = {
    buttonType: 'button',
    children: 'Перейти',
    size: 'medium',
    borderRadius: 'medium',
    disabled: false,
    loading: false,
    color: 'brand',
    type: 'contained',
    leftIcon: <PaperClipIcon />,
    rightIcon: <ChevronDownIcon />,
};

export default {
    title: STORY_PATHS.core.components.main('Button'),
    component: Button,
    parameters: {
        design: { disable: true },
        actions: { disable: true },
    },
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Стилизация', {
            borderRadius: {},
            color: {},
            type: {},
            size: {},
        }),
        ...defineCategory('Состояние', {
            disabled: {},
            loading: {},
            buttonType: {
                control: false,
            },
        }),
        ...defineCategory('Элементы', {
            children: {},
            leftIcon: {
                control: false,
            },
            rightIcon: {
                control: false,
            },
            Loader: {
                control: false,
            },
            LoaderProps: {
                control: false,
            },
        }),
        ...defineCategory('Для демонстрации', {
            leftIconShown: {
                description: `Включить/выключить левую иконку.${DEMONSTRATION_ALERT}`,
            },
            rightIconShown: {
                description: `Включить/выключить правую иконку.${DEMONSTRATION_ALERT}`,
            },
        }),
        ...BASE_ARG_TYPES,
    },
};

export { SandboxStory } from './sandbox';
export { BorderRadiusStory } from './borderRadius';
export { BooleanPropsStory } from './booleans';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
export { TypesStory } from './types';
