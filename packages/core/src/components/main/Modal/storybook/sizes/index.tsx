import { Story } from '@storybook/react/types-6-0';
import { ModalProps } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { ModalStory } from '../modal';
import description from './description.md';

export const SizesStory: Story<ModalProps> = (props) => DisplayVariants({
    component: ModalStory,
    property: 'size',
    values: ['small', 'medium'],
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['size'],
});
