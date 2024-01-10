import { Story } from '@storybook/react/types-6-0';
import { Accordion, AccordionProps } from '@core';

export const SandboxStory: Story<AccordionProps> = ({ ...props }) => (
    <Accordion {...props} />
);

SandboxStory.storyName = 'Компонент';
