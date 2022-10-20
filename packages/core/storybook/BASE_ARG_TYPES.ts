import { defineCategory, excludeProp } from '@core/storybook/templateParams';

export const BASE_ARG_TYPES = defineCategory('Общие', {
    hidden: {
        control: 'boolean',
        description: 'Удаляет компонент со страницы',
    },
    permissions: {
        description: 'Объект с правами доступа к компоненту',
    },
    classes: {
        control: false,
        description: 'Объект с пользовательскими CSS-классами для переопределения стандартных.',
    },
    styles: {
        control: false,
        description: 'Объект с пользовательскими CSS-стилями для переопределения стандартных',
    },
    ...excludeProp(['cssVars', 'className', 'ref']),
});
