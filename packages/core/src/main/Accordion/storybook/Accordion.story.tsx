import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Accordion, AccordionProps } from '@core';

const defaultArgs: Partial<AccordionProps> = {
    title: 'Название',
    description: 'Описание',
    showDivider: true,
    children: (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto autem commodi cupiditate
            delectus ducimus eaque et exercitationem harum illo impedit iure labore, maiores porro praesentium
            provident, quam rerum, sit!
        </div>
    ),
};

export default {
    title: STORY_PATHS.core.components.main('Accordion'),
    component: Accordion,
    parameters: { actions: { disable: true } },
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Основное', {
            title: {},
            description: {},
            children: {
                control: {
                    type: 'none',
                },
            },
        }),
        ...defineCategory('Управление', {
            open: {},
            initialOpen: {},
            onChange: {},
        }),
        ...defineCategory('Кастомизация', {
            size: {},
            collapseIcon: {},
            statusIcon: {},
            inheritTextStyles: {},
            showDivider: {},
        }),
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
};

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
export { CustomCollapseIconStory } from './custom-collapse-icon';
export { AdditionalStatusStory } from './additional-status';
