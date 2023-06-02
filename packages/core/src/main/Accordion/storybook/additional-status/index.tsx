import { Story } from '@storybook/react/types-6-0';
import { Accordion, AccordionProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';
import { CheckmarkCircleIcon } from './CheckmarkCircleIcon';

export const AdditionalStatusStory: Story<AccordionProps> = ({ ...props }) => (
    <Accordion
        {...props}
        statusIcon={<CheckmarkCircleIcon />}
        styles={{ statusIcon: { color: '#15D015' } }}
    />
);

setStoryParams(AdditionalStatusStory, {
    title: 'Дополнительный статус',
    description,
});
