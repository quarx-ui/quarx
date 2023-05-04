import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@core/storybook/utils';
import { Accordion, AccordionProps } from '@core';
import description from './description.md';
import { ChevronRightIcon } from './ChevronRightIcon';

export const CustomCollapseIconStory: Story<AccordionProps> = ({ ...props }) => (
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

CustomCollapseIconStory.storyName = 'Кастомная иконка';
CustomCollapseIconStory.parameters = createStoryDescription(description);
