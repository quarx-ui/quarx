import { StoryFn } from '@storybook/react-vite';
import { Accordion, AccordionProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';
import { ChevronRightIcon } from './ChevronRightIcon';

export const CustomCollapseIconStory: StoryFn<AccordionProps> = ({ ...props }) => (
    <Accordion
        {...props}
        collapseIcon={<ChevronRightIcon />}
        styles={{
            root: {
                '&.QxAccordion_open .QxAccordion-collapseIcon': {
                    transform: 'rotate(90deg)',
                },
            },
        }}
    />
);

setStoryParams(CustomCollapseIconStory, {
    title: 'Кастомная иконка',
    description,
});
