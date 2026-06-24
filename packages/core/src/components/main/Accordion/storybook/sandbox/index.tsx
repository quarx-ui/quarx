import { StoryFn } from '@storybook/react-vite';
import { Accordion, AccordionProps } from '@core';

export const SandboxStory: StoryFn<AccordionProps> = ({ ...props }) => (
    <Accordion {...props} />
);

SandboxStory.storyName = 'Компонент';
