import { StoryFn } from '@storybook/react-vite';
import { ModalProps } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { ModalStory } from '../modal';
import description from './description.md?raw';

export const SizesStory: StoryFn<ModalProps> = (props) => DisplayVariants({
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
