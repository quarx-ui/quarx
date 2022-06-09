import { defineCategory } from '@core/storybook/templateParams';

export const BASE_ARG_TYPES = defineCategory('Общие', {
    hidden: {
        control: 'boolean',
        description: 'Удаляет компонент со страницы',
    },
    permissions: {
        description: 'Объект с правами доступа к компоненту',
    },
    className: {
        control: false,
        description: 'Пользовательский CSS-класс для корневого элемента.',
    },
    classes: {
        control: false,
        description: 'Объект с пользовательскими CSS-классами для переопределения стандартных.',
    },
    styles: {
        control: false,
        description: 'Объект с пользовательскими CSS-стилями для переопределения стандартных',
    },
    ref: {
        control: false,
        description: 'Ссылка к корневому элементу.',
    },
});
