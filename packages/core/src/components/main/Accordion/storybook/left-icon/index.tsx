import { Accordion, AccordionProps } from '@core';
import { StoryFn } from '@storybook/react-vite';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { AttentionHexagonIcon } from './AttentionHexagonIcon';
import description from './description.md?raw';

export const LeftIconStory: StoryFn<AccordionProps> = ({ ...props }) => (
    <Accordion
        {...props}
        leftIcon={<AttentionHexagonIcon />}
    />
);

setStoryParams(LeftIconStory, {
    title: 'Иконка слева',
    description,
});
