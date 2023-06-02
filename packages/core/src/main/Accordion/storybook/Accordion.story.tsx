import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Accordion, AccordionProps } from '@core';
import { Meta } from '@storybook/react';

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
            disableTransition: {},
            CollapseProps: {},
        }),
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
} as Meta<AccordionProps>;

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
export { CustomCollapseIconStory } from './custom-collapse-icon';
export { AdditionalStatusStory } from './additional-status';
