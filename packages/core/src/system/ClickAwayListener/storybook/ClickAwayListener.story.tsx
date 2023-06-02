import { defineCategory } from '@core/storybook/templateParams';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Meta } from '@storybook/react';
import { ClickAwayListener, ClickAwayListenerProps } from '..';
import { defaultClickAwayListenerArgs } from './utils';

export default {
    title: STORY_PATHS.core.components.system('ClickAwayListener'),
    component: ClickAwayListener,
    args: defaultClickAwayListenerArgs,
    argTypes: {
        ...defineCategory('Для демонстрации', {
            usePortal: { description: 'Использовать порталы для модальных окон' },
        }),
        mouseEvent: { description: 'Прослушиваемое событие мыши. Выключено при false.' },
        touchEvent: { description: 'Прослушиваемое событие touch. Выключено при false.' },
        onClickAway: { description: 'Функция, срабатываемая при клике вне дочернего компонента.' },
        children: { description: 'Элемент для прослушивания' },
        disableReactTree: { description: '' },
    },
} as Meta<ClickAwayListenerProps>;

export { SandboxStory } from './sandbox';
