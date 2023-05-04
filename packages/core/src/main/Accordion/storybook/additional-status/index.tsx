import { Story } from '@storybook/react/types-6-0';
import { createStoryDescription } from '@core/storybook/utils';
import { Accordion, AccordionProps } from '@core';
import description from './description.md';
import { CheckmarkCircleIcon } from './CheckmarkCircleIcon';

export const AdditionalStatusStory: Story<AccordionProps> = ({ ...props }) => (
    <Accordion
        {...props}
        statusIcon={<CheckmarkCircleIcon />}
        styles={{ statusIcon: { color: '#15D015' } }}
    />
);

AdditionalStatusStory.storyName = 'Дополнительный статус';
AdditionalStatusStory.parameters = createStoryDescription(description);
