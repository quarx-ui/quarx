import { Accordion, AccordionProps } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { AttentionHexagonIcon } from './AttentionHexagonIcon';
import description from './description.md';

export const LeftIconStory: Story<AccordionProps> = ({ ...props }) => (
    <Accordion
        {...props}
        leftIcon={<AttentionHexagonIcon />}
    />
);

setStoryParams(LeftIconStory, {
    title: 'Иконка слева',
    description,
});
