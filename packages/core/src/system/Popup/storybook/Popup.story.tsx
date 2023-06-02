import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Meta } from '@storybook/react';
import { Popup, PopupProps } from '..';
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
            modifiersOptions: { description: 'Параметры модификаторов плавающего элемента' },
            customModifiers: { description: 'Пользовательские модификаторы координат плавающего элемента' },
            disableOffset: { description: 'Убрать отступ между floating и якорным элементами' },
            disableShift: { description: 'Отключение ограничения отрисовки только внутри видимой области' },
            disableFlip: {
                description: [
                    'Отключение переворота при',
                    'отсутствии свободного места',
                    'для корректной отрисовки',
                ].join(' '),
            },
            reference: {
                description: [
                    'Позиционирование контейнера.',
                    'При relative необходимо указать position: relative,',
                    'относительно которого будут отсчитываться координаты объекта',
                ].join(' '),
            },

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
} as Meta<PopupProps>;

export { SandboxStory } from './sandbox';
