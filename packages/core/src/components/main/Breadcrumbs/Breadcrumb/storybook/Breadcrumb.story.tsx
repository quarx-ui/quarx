import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { PALETTE_COLORS, QX_SIZE, Breadcrumb, BreadcrumbProps, BREADCRUMB_TYPE } from '@core';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';

export default {
    title: STORY_PATHS.core.components.main('Breadcrumbs/Breadcrumb'),
    component: Breadcrumb,
    parameters: {
        actions: { disable: true },
    },
    argTypes: excludeProp(['permissions'], BASE_ARG_TYPES),
    args: {
        children: 'Скидка 300 ₽ на любой заказ от 1 500 ₽',
        maxCrumbLength: 24,
        disableFocus: false,
        size: QX_SIZE.medium,
        color: PALETTE_COLORS.brand,
        type: BREADCRUMB_TYPE.link,
    } as BreadcrumbProps,
};

export { SandboxStory } from './sandbox';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
export { TypesStory } from './types';
export { LengthStory } from './lengths';
export { BooleanParamsStory } from './booleanParams';
