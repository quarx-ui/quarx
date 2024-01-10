import { Story } from '@storybook/react/types-6-0';
import { Accordion, AccordionProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
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

setStoryParams(CustomCollapseIconStory, {
    title: 'Кастомная иконка',
    description,
});
