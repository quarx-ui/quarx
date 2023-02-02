import { Story } from '@storybook/react/types-6-0';
import { ModalProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import { ModalStory } from '../modal';
import description from './description.md';

export const SizesStory: Story<ModalProps> = (props) => DisplayVariants({
    component: ModalStory,
    property: 'size',
    values: ['small', 'medium'],
    componentProps: props,
});

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
SizesStory.parameters = createStoryDescription(description);
