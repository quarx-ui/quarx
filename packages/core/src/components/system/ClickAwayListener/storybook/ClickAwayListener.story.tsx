import { defineCategory } from '@quarx-ui/core/storybook/templateParams';
import { Meta } from '@storybook/react-vite';
import { ClickAwayListener, ClickAwayListenerProps } from '..';
import { defaultClickAwayListenerArgs } from './utils';

export default {
    title: 'core/components/system/ClickAwayListener',
    tags: ['autodocs'],
    component: ClickAwayListener,
    args: defaultClickAwayListenerArgs,
    argTypes: {
        ...defineCategory('Для демонстрации', {
            usePortal: { description: 'Использовать порталы для модальных окон' },
        }),
    },
} as Meta<ClickAwayListenerProps>;

export { SandboxStory } from './sandbox';
