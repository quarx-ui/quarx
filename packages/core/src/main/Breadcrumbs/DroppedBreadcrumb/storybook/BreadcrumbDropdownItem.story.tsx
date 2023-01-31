import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { DroppedBreadcrumb, DroppedBreadcrumbProps } from '@core';

export default {
    title: STORY_PATHS.core.components.main('Breadcrumbs/DroppedBreadcrumb'),
    component: DroppedBreadcrumb,
    parameters: { actions: { disable: true } },
    argTypes: {
        ...defineCategory('Только для кастомизации. По умолчанию не реализуются', {
            color: {},
            size: {},
            type: {},
            maxCrumbLength: {},
        }),
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    args: {
        children: 'Скидка 300 ₽ на любой заказ от 1 500 ₽',
        disableFocus: false,
    } as DroppedBreadcrumbProps,
};

export { SandboxStory } from './sandbox';
