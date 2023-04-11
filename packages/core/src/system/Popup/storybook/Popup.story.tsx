import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Popup } from '..';
import { StorybookPopupProps } from './types';

const defaultArgs: Partial<StorybookPopupProps> = {
    anchorYOffset: 0,
    anchorXOffset: 0,
};

export default {
    title: STORY_PATHS.core.components.system('Popup'),
    component: Popup,
    parameters: {
        layout: 'fullscreen',
        actions: { disable: true },
    },
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Для демонстрации', {
            anchorYOffset: { description: 'Сдвиг якорного элемента по оси Y' },
            anchorXOffset: { description: 'Сдвиг якорного элемента по оси X' },
        }),

        ...defineCategory('Container  свойства', {
            container: { description: 'Контейнер, где Portal расположит Backdrop | Paper', table: { disable: true } },
            open: { description: 'Видимость элемента ' },
            anchor: { description: 'Якорный элемент' },
            placement: { description: 'Расположение плавающего элемента ' },
            disableOffset: { description: 'Убрать отступ между floating и якорным элементами' },
            disableFlip: { description: '' },
            disableShift: { description: '' },
            modifiersOptions: { description: '' },
            customModifiers: { description: '' },
            arrangement: { description: '' },

            TransitionProps: { description: 'Анимация Paper' },
            disableTransition: { description: 'Отключение анимации Paper' },
            children: { description: 'Дочерние элементы popup', table: { disable: true } },
        }),

        ...defineCategory('Portal свойства', {
            disablePortal: { description: 'Отключить портал' },
        }),

        ...defineCategory('Backdrop свойства', {
            disableBackdrop: { description: 'Полное отключение Backdrop компонента' },
            BackdropProps: { description: 'Параметры, передаваемые Backdrop компоненту' },
        }),

        ...defineCategory('ClickAwayListener свойства', {
            onClickAway: { description: 'Функция, вызываемая при клике вне popup', table: { disable: true } },
            ClickAwayListenerProps: { description: 'Параметры, передаваемые ClickAwayListener компоненту' },
        }),

        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
};

export { SandboxStory } from './sandbox';
