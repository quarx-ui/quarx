import { defineCategory } from '@quarx-ui/core/storybook/templateParams';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
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
    },
} as Meta<ClickAwayListenerProps>;

export { SandboxStory } from './sandbox';
