import { Meta } from '@storybook/react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Alert as AlertKit, ALERT_COLORS, ALERT_SIZE, ALERT_TYPE } from '@core/src';
import { createDemoDescription } from '@core/storybook/utils';
import { ELEVATION_SIZE, ELEVATION_TYPE } from '@core';
import { StoryAlertProps } from './types';

const defaultArgs: StoryAlertProps = {
    title: 'Title',
    description: 'Description',
    color: ALERT_COLORS.default,
    leftItem: 'default',
    descriptionShown: true,
    actionButtonsShown: true,
    closeButtonShown: true,
    size: ALERT_SIZE.large,
    type: ALERT_TYPE.vertical,
    background: ELEVATION_TYPE.main,
    elevation: ELEVATION_SIZE.medium,
    PrimaryButtonProps: {
        children: 'Primary',
    },
    SecondaryButtonProps: {
        children: 'Secondary',
    },
};

export default {
    title: STORY_PATHS.core.components.main('Alert'),
    component: AlertKit,
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Стилизация', {
            color: {},
            size: {},
            type: {},
            background: {},
            elevation: {},
        }),
        ...defineCategory('Элементы', {
            title: {},
            description: {},
            leftItem: {
                control: {
                    type: 'radio',
                    options: ['default', false],
                },
            },
        }),
        ...defineCategory('Для демонстрации', {
            descriptionShown: createDemoDescription('Показать/Скрыть описание'),
            actionButtonsShown: createDemoDescription('Показать/Скрыть `actionButtons`'),
            closeButtonShown: createDemoDescription('Показать/Скрыть кнопку закрытия'),
        }),
        ...defineCategory('Передача свойств', {
            PrimaryButtonProps: {},
            SecondaryButtonProps: {},
            LeftItemProps: {},
            BodyProps: {},
            ActionButtonsProps: {},
            CloseButtonProps: {},
        }),
        ...defineCategory('Обработчики', {
            onClose: {},
        }),
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
} as Meta<StoryAlertProps>;

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
export { TypesStory } from './types/index';
export { ColorsStory } from './colors';
