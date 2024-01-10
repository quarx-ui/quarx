import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { Breadcrumbs, BreadcrumbsProps, BreadCrumbStruct } from '@core';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';

const onClick: BreadCrumbStruct['onClick'] = (crumb, event) => {
    event.preventDefault();
    alert(`Клик по "${crumb.text}"`);
};

export default {
    title: STORY_PATHS.core.components.main('Breadcrumbs'),
    component: Breadcrumbs,
    parameters: {
        actions: { disable: true },
    },
    argTypes: {
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    args: {
        crumbs: [
            { value: 0, onClick, link: '#', text: 'Главная' },
            { value: 1, onClick, link: '#', text: 'Продукты' },
            { value: 2, onClick, link: '#', text: 'Самокат' },
            { value: 3, onClick, link: '#', text: 'Напитки' },
            { value: 4, onClick, link: '#', text: 'Энергетики' },
            { value: 5, onClick, link: '#', text: 'Энергетики от самоката' },
            { value: 6, onClick, link: '#', text: 'Скидка 300 ₽ на любой заказ от 1 500 ₽' },
        ],
    } as BreadcrumbsProps,
};

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
export { TypesStory } from './types';
export { ColorsStory } from './colors';
export { CustomDividersStory } from './dividers';
export { CustomizationStory } from './customization';
export { CollapseStory } from './collapse';
