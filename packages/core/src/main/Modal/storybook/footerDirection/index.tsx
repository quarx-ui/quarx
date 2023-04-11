import { Story } from '@storybook/react/types-6-0';
import { ModalProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import { ModalStory } from '../modal';
import description from './description.md';

export const FooterDirectionStory: Story<ModalProps> = (props) => DisplayVariants({
    component: ModalStory,
    property: 'footerDirection',
    values: ['horizontal', 'vertical'],
    componentProps: props,
});

FooterDirectionStory.storyName = 'Расположение кнопок';
FooterDirectionStory.argTypes = excludeProp(['footerDirection']);
FooterDirectionStory.parameters = createStoryDescription(description);
