import { StoryFn } from '@storybook/react-vite';
import { Accordion, AccordionProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';
import { CheckmarkCircleIcon } from './CheckmarkCircleIcon';

export const AdditionalStatusStory: StoryFn<AccordionProps> = ({ ...props }) => (
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
