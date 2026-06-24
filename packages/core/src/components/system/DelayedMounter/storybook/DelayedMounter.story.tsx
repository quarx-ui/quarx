import { DelayedMounter, DelayedMounterProps } from '@core';
import { Meta } from '@storybook/react-vite';

const defaultArgs: Partial<DelayedMounterProps> = {
    disableTimeout: false,
    timeout: 250,
};

export default {
    title: 'core/components/system/DelayedMounter',
    tags: ['autodocs'],
    component: DelayedMounter,
    args: defaultArgs,
    argTypes: {
        mounted: { description: 'Компонент монтирован' },
        timeout: { description: 'Продолжительность задержки' },
        disableTimeout: { description: 'Отключение задержки размонтирования' },
        children: { description: 'Дочерний элемент' },
        onEnter: { description: 'Обработчик, вызываемый при монтировании компонента' },
        onExitStart: { description: 'Обработчик, вызываемый в начале размонтирования компонента' },
        onExit: { description: 'Обработчик, вызываемый в конце размонтирования компонента' },
    },
} as Meta<DelayedMounterProps>;

export { SandboxStory } from './sandbox';
export { TimeoutStory } from './timeout';
export { DisableTimeoutStory } from './disableTimeout';
